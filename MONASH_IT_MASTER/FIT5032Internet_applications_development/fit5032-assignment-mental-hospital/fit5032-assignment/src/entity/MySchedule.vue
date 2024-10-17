<template>
  <div>
    <div v-if="error.status" class="text-danger my-2">
      {{ error.message }}
      <button @click="error.status = false" class="btn my-2 btn-primary tw-w-full">Dismiss</button>
    </div>
    <ejs-schedule
      :selectedDate="selectedDate"
      :eventSettings="eventSettings"
      :actionBegin="onActionBegin"
      :actionComplete="onActionComplete"
      v-if="!loadingData"
    ></ejs-schedule>
    <div v-else class="text-danger my-2">Loading data...</div>
  </div>
</template>

<script>
import { defineComponent, ref, onMounted } from 'vue'
import { Day, Week, WorkWeek, Month, Agenda } from '@syncfusion/ej2-vue-schedule'
import {
  getFirestore,
  doc,
  setDoc,
  updateDoc,
  deleteDoc,
  getDocs,
  collection
} from 'firebase/firestore'
import { auth } from '@/firebase'

export default defineComponent({
  name: 'MySchedule',
  setup() {
    const selectedDate = ref(new Date())
    const loadingData = ref(true)
    const eventSettings = ref({
      dataSource: []
    })
    const userId = ref('')
    const db = getFirestore()
    const error = ref({
      status: false,
      message: ''
    })

    const fetchEventsFromFirestore = async () => {
      loadingData.value = true
      const eventsCol = collection(db, `events/${userId.value}/userEvents`)
      const eventsSnapshot = await getDocs(eventsCol)
      const eventsArray = eventsSnapshot.docs.map((doc) => {
        const data = doc.data()
        return {
          Id: doc.id,
          Subject: data.Subject,
          StartTime: new Date(data.StartTime),
          EndTime: new Date(data.EndTime)
        }
      })
      eventSettings.value.dataSource = eventsArray
      loadingData.value = false
    }

    const checkForConflicts = (newEvent) => {
      const { StartTime, EndTime } = newEvent

      // Loop through existing events to check for any conflicts
      return eventSettings.value.dataSource.some((event) => {
        const eventStart = new Date(event.StartTime)
        const eventEnd = new Date(event.EndTime)

        // Check if the new event overlaps with any existing event
        return StartTime < eventEnd && EndTime > eventStart
      })
    }

    const addEventToFirestore = async (newEvent) => {
      const eventsCol = collection(db, `events/${userId.value}/userEvents`)
      const newEventRef = doc(eventsCol) // Creates a new document reference
      await setDoc(newEventRef, {
        Subject: newEvent.Subject,
        StartTime: newEvent.StartTime.toISOString(),
        EndTime: newEvent.EndTime.toISOString()
      })
    }

    const updateEventInFirestore = async (event) => {
      const eventDoc = doc(db, `events/${userId.value}/userEvents/${event.Id}`)
      await updateDoc(eventDoc, {
        Subject: event.Subject,
        StartTime: event.StartTime.toISOString(),
        EndTime: event.EndTime.toISOString()
      })
    }

    const deleteEventFromFirestore = async (eventId) => {
      const eventDoc = doc(db, `events/${userId.value}/userEvents/${eventId}`)
      await deleteDoc(eventDoc)
    }

    const onActionBegin = async (args) => {
      if (error.value.status) {
        args.cancel = true
        error.value = {
          status: true,
          message: error.value.message + 'Please dismiss error message.'
        }
        return
      }
      if (args.requestType === 'eventCreate') {
        const newEvent = args.data[0]
        if (checkForConflicts(newEvent)) {
          args.cancel = true
          error.value = {
            status: true,
            message: 'This time slot is already booked.'
          }
        } else {
          await addEventToFirestore(newEvent)
        }
        await fetchEventsFromFirestore()
      }
      if (args.requestType === 'eventRemove') {
        const eventId = args.data[0].Id
        await deleteEventFromFirestore(eventId)
        await fetchEventsFromFirestore()
      }
      if (args.requestType === 'eventChange') {
        const updatedEvent = args.data
        if (checkForConflicts(updatedEvent)) {
          args.cancel = true
          error.value = {
            status: true,
            message: 'This time slot is already booked.'
          }
        } else {
          await updateEventInFirestore(updatedEvent)
        }
        await fetchEventsFromFirestore()
      }
    }

    const onActionComplete = async () => {

    }

    onMounted(async () => {
      const user = auth.currentUser
      if (user) {
        userId.value = user.uid
        await fetchEventsFromFirestore()
      }
    })

    return {
      loadingData,
      error,
      selectedDate,
      eventSettings,
      onActionBegin,
      onActionComplete
    }
  },
  provide: {
    schedule: [Day, Week, WorkWeek, Month, Agenda]
  }
})
</script>

<style scoped></style>
