<template>
  <div class="tw-min-h-screen tw-bg-gray-100 tw-p-6">
    <!-- Header Section -->
    <div class="tw-text-center">
      <h1 class="tw-text-4xl tw-font-bold">Mindfulness Video</h1>
      <p class="tw-mt-4 tw-text-lg">Mindful relax and Let's start exercise.</p>
    </div>

    <!-- Filter Section -->
    <div class="tw-flex tw-justify-center tw-mt-8 tw-space-x-4">
      <button
        v-for="filter in filters"
        :key="filter"
        class="tw-px-4 tw-py-2 tw-bg-white tw-rounded-lg tw-shadow-md hover:tw-bg-blue-100"
      >
        {{ filter }}
      </button>
    </div>

    <!-- Video Sections -->
    <div class="tw-mt-12 tw-space-y-16">
      <!-- Section 1: Psychological Support for Beginner -->
      <div>
        <div class="tw-flex tw-justify-between tw-items-center">
          <h2 class="tw-text-2xl tw-font-semibold">Psychological Support for Beginner</h2>
          <a href="#" class="tw-text-blue-600 hover:tw-underline">ALLE ANZEIGEN (365) &rarr;</a>
        </div>
        <div class="tw-grid tw-grid-cols-3 tw-gap-6 tw-mt-6">
          <div
            v-for="(video,indexs) in rats.beginnerVideos"
            :key="video.title"
            class="tw-bg-white tw-rounded-lg tw-shadow-lg tw-overflow-hidden"
          >
            <img
              :src="video.thumbnail"
              alt="Video Thumbnail"
              class="tw-w-full tw-h-40 tw-object-cover"
            />
            <div class="tw-p-4">
              <h3 class="tw-font-semibold">{{ video.title }}</h3>
              <p class="tw-text-sm tw-text-gray-600 tw-mt-2">{{ video.description }}</p>
              <p class="tw-text-sm tw-text-gray-600 tw-mt-2">
                🕒 {{ video.duration }} | Level: {{ video.level }} | {{ video.difficulty }}
              </p>
              <!-- add Ranting Component here -->
               <div class="start">
                  <div class="start_item">
                    <span>Rating:</span>
                    <StarRating
                      v-model="video.rating"
                      @rating-selected="handleRatingChange(video)"
                      @click="setRating(video)"
                      :star-size="20"
                    />
                  </div>
                  <div class="start_item">
                    <span>Average Score:</span>
                    <StarRating
                      v-model="video.avtRating"
                      :star-size="20"
                    />
                  </div>
               </div>
               <div class="start_message">
                  <div class="message_title">Comments:</div>
                  <div class="message">
                    <div class="message_item" v-for="(item,index) in video.messageList" :key="index">{{ item }}</div>
                  </div>
                  <div class="input_message">
                    <input
                      type="text"
                      class="form-control"
                      id="email"
                      v-model="video.message"
                    />
                    <button type="submit" class="btn btn-primary me-2" @click="submitMessage(video,'beginnerVideos',indexs)">Submit</button>

                  </div>
               </div>
             
            </div>
          </div>
        </div>
      </div>

      <!-- Section 2: Intermediate Mental Health Tools (Level 1) -->
      <div>
        <div class="tw-flex tw-justify-between tw-items-center">
          <h2 class="tw-text-2xl tw-font-semibold">Intermediate Mental Health Tools (Level 1)</h2>
          <a href="#" class="tw-text-blue-600 hover:tw-underline">ALLE ANZEIGEN (58) &rarr;</a>
        </div>
        <div class="tw-grid tw-grid-cols-3 tw-gap-6 tw-mt-6">
          <div
            v-for="(video,indexs)  in rats.intermediateVideos"
            :key="video.title"
            class="tw-bg-white tw-rounded-lg tw-shadow-lg tw-overflow-hidden"
          >
            <img
              :src="video.thumbnail"
              alt="Video Thumbnail"
              class="tw-w-full tw-h-40 tw-object-cover"
            />
            <div class="tw-p-4">
              <h3 class="tw-font-semibold">{{ video.title }}</h3>
              <p class="tw-text-sm tw-text-gray-600 tw-mt-2">{{ video.description }}</p>
              <p class="tw-text-sm tw-text-gray-600 tw-mt-2">
                🕒 {{ video.duration }} | Level: {{ video.level }} | {{ video.difficulty }}
              </p>
              <!-- add Ranting Component here -->
              <div class="start">
                  <div class="start_item">
                    <span>Rating:</span>
                    <StarRating
                      v-model="video.rating"
                      @rating-selected="handleRatingChange(video)"
                      @click="setRating(video)"
                      :star-size="20"
                    />
                  </div>
                  <div class="start_item">
                    <span>Average Score:</span>
                    <StarRating
                      v-model="video.avtRating"
                      :star-size="20"
                    />
                  </div>
               </div>
               <div class="start_message">
                  <div class="message_title">Comments:</div>
                  <div class="message">
                    <div class="message_item" v-for="(item,index) in video.messageList" :key="index">{{ item }}</div>
                  </div>
                  <div class="input_message">
                    <input
                      type="text"
                      class="form-control"
                      id="email"
                      v-model="video.message"
                    />
                    <button type="submit" class="btn btn-primary me-2" @click="submitMessage(video,'intermediateVideos',indexs)">Submit</button>

                  </div>
               </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Section 3: Advanced Psychological Workshops (Level 2) -->
      <div>
        <div class="tw-flex tw-justify-between tw-items-center">
          <h2 class="tw-text-2xl tw-font-semibold">Advanced Psychological Workshops (Level 2)</h2>
          <a href="#" class="tw-text-blue-600 hover:tw-underline">ALLE ANZEIGEN (53) &rarr;</a>
        </div>
        <div class="tw-grid tw-grid-cols-3 tw-gap-6 tw-mt-6">
          <div
            v-for="(video,indexs)  in rats.advancedVideos"
            :key="video.title"
            class="tw-bg-white tw-rounded-lg tw-shadow-lg tw-overflow-hidden"
          >
            <img
              :src="video.thumbnail"
              alt="Video Thumbnail"
              class="tw-w-full tw-h-40 tw-object-cover"
            />
            <div class="tw-p-4">
              <h3 class="tw-font-semibold">{{ video.title }}</h3>
              <p class="tw-text-sm tw-text-gray-600 tw-mt-2">{{ video.description }}</p>
              <p class="tw-text-sm tw-text-gray-600 tw-mt-2">
                🕒 {{ video.duration }} | Level: {{ video.level }} | {{ video.difficulty }}
              </p>
              <!-- add Ranting Component here -->
              <div class="start">
                  <div class="start_item">
                    <span>Rating:</span>
                    <StarRating
                      v-model="video.rating"
                      @rating-selected="handleRatingChange(video)"
                      @click="setRating(video)"
                      :star-size="20"
                    />
                  </div>
                  <div class="start_item">
                    <span>Average Score:</span>
                    <StarRating
                      v-model="video.avtRating"
                      :star-size="20"
                    />
                  </div>
               </div>
               <div class="start_message">
                  <div class="message_title">Comments:</div>
                  <div class="message">
                    <div class="message_item" v-for="(item,index) in video.messageList" :key="index">{{ item }}</div>
                  </div>
                  <div class="input_message">
                    <input
                      type="text"
                      class="form-control"
                      id="email"
                      v-model="video.message"
                    />
                    <button type="submit" class="btn btn-primary me-2" @click="submitMessage(video,'advancedVideos',indexs)">Submit</button>

                  </div>
               </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Section 4: Mental Health for Specific Needs (Level 3) -->
      <div>
        <div class="tw-flex tw-justify-between tw-items-center">
          <h2 class="tw-text-2xl tw-font-semibold">Mental Health for Specific Needs (Level 3)</h2>
          <a href="#" class="tw-text-blue-600 hover:tw-underline">ALLE ANZEIGEN (231) &rarr;</a>
        </div>
        <div class="tw-grid tw-grid-cols-3 tw-gap-6 tw-mt-6">
          <div
            v-for="(video,indexs)  in rats.specificNeedsVideos"
            :key="video.title"
            class="tw-bg-white tw-rounded-lg tw-shadow-lg tw-overflow-hidden"
          >
            <img
              :src="video.thumbnail"
              alt="Video Thumbnail"
              class="tw-w-full tw-h-40 tw-object-cover"
            />
            <div class="tw-p-4">
              <h3 class="tw-font-semibold">{{ video.title }}</h3>
              <p class="tw-text-sm tw-text-gray-600 tw-mt-2">{{ video.description }}</p>
              <p class="tw-text-sm tw-text-gray-600 tw-mt-2">
                🕒 {{ video.duration }} | Level: {{ video.level }} | {{ video.difficulty }}
              </p>
              <!-- add Ranting Component here -->
              <div class="start">
                  <div class="start_item">
                    <span>Rating:</span>
                    <StarRating
                      v-model="video.rating"
                      @rating-selected="handleRatingChange(video)"
                      @click="setRating(video)"
                      :star-size="20"
                    />
                  </div>
                  <div class="start_item">
                    <span>Average Score:</span>
                    <StarRating
                      v-model="video.avtRating"
                      :star-size="20"
                    />
                  </div>
               </div>
               <div class="start_message">
                  <div class="message_title">Comments:</div>
                  <div class="message">
                    <div class="message_item" v-for="(item,index) in video.messageList" :key="index">{{ item }}</div>
                  </div>
                  <div class="input_message">
                    <input
                      type="text"
                      class="form-control"
                      id="email"
                      v-model="video.message"
                    />
                    <button type="submit" class="btn btn-primary me-2" @click="submitMessage(video,'specificNeedsVideos',indexs)">Submit</button>

                  </div>
               </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { ref, onMounted } from 'vue'
import StarRating from 'vue3-star-ratings'

import image1 from '@/images/path-to-image1.png'
import image2 from '@/images/path-to-image2.png'
import image3 from '@/images/path-to-image3.png'
import image4 from '@/images/path-to-image4.png'
import image5 from '@/images/path-to-image5.png'
import image6 from '@/images/path-to-image6.png'
import image7 from '@/images/path-to-image7.png'
import image8 from '@/images/path-to-image8.png'
import image9 from '@/images/path-to-image9.png'
import image10 from '@/images/path-to-image10.png'

export default {
  components: {
    StarRating
  },
  setup() {
    const rats = ref({
      beginnerVideos:[
          {
            id: 1,
            title: 'Tutorial: Introduction to Mindfulness Meditation',
            description: 'Barbra Noh',
            duration: '20 Min',
            level: 'Early',
            difficulty: 'Stress Reduction',
            thumbnail: image1,
            rating: 0, // Initial rating value
            avtRating:0,
            message:"",
            messageList:[]
          },
          {
            id: 2,
            title: "A beginner's guide to understanding and managing anxiety.",
            description: 'Christina Lobe',
            duration: '14 Min',
            level: 'Easy',
            difficulty: 'Anstrengung',
            thumbnail: image2,
            rating: 0, // Initial rating value
            avtRating:0,
            message:"",
            messageList:[]
          },
          {
            id: 3,
            title: 'Strategies for recognizing and handling depressive symptoms.',
            description: 'Dr. Patrick Broome',
            duration: '15 Min',
            level: 'Easy',
            difficulty: 'Anstrengung',
            thumbnail: image3,
            rating: 0, // Initial rating value
            avtRating:0,
            message:"",
            messageList:[]
          }
        ],
      intermediateVideos:[
          {
            id: 4,
            title: 'Cognitive Behavioral Techniques',
            description: 'Irina Alex',
            duration: '46 Min',
            level: 'Level 1',
            difficulty: 'Anstrengung',
            thumbnail: image3,
            rating: 0, // Initial rating value
            avtRating:0,
            message:"",
            messageList:[]
          },
          {
            id: 5,
            title: 'Emotional Resilience Building',
            description: 'Barbra Noh',
            duration: '16 Min',
            level: 'Level 1-2',
            difficulty: 'Anstrengung',
            thumbnail: image4,
            rating: 0, // Initial rating value
            avtRating:0,
            message:"",
            messageList:[]
          },
          {
            id: 6,
            title: 'Mindfulness for Daily Stress',
            description: 'Moritz Ulrich',
            duration: '32 Min',
            level: 'Level 1-2',
            difficulty: 'Anstrengung',
            thumbnail: image5,
            rating: 0, // Initial rating value
            avtRating:0,
            message:"",
            messageList:[]
          }
        ],
      advancedVideos: [
          {
            id: 7,
            title: 'Deep dive into meditation techniques for profound mental balance.',
            description: 'Lucie Beyer',
            duration: '32 Min',
            level: 'Level 2-3',
            difficulty: 'Anstrengung',
            thumbnail: image6,
            rating: 0, // Initial rating value
            avtRating:0,
            message:"",
            messageList:[]
          },
          {
            id: 8,
            title: 'Developing skills for better interpersonal communications and mental health.',
            description: 'Moritz Ulrich',
            duration: '32 Min',
            level: 'Level 1-2',
            difficulty: 'Anstrengung',
            thumbnail: image7,
            rating: 0, // Initial rating value
            avtRating:0,
            message:"",
            messageList:[]
          },
          {
            id: 9,
            title: 'Understanding the fundamentals of psychoanalytic therapy.',
            description: 'Moritz Ulrich',
            duration: '37 Min',
            level: 'Level 1-2',
            difficulty: 'Anstrengung',
            thumbnail: image8,
            rating: 0, // Initial rating value
            avtRating:0,
            message:"",
            messageList:[]
          }
        ],
      specificNeedsVideos: [
          {
            id: 10,
            title: 'Anxiety Management for Professionals',
            description: 'Lucie Beyer',
            duration: '35 Min',
            level: 'Level 2-3',
            difficulty: 'Anstrengung',
            thumbnail: image8,
            rating: 0, // Initial rating value
            avtRating:0,
            message:"",
            messageList:[]
          },
          {
            id: 11,
            title: 'Stress Relief for Parents',
            description: 'Lucie Beyer',
            duration: '29 Min',
            level: 'Level 2-3',
            difficulty: 'Anstrengung',
            thumbnail: image9,
            rating: 0, // Initial rating value
            avtRating:0,
            message:"",
            messageList:[]
          },
          {
            id: 12,
            title: 'Mental Health for the Elderly',
            description: 'Valentin Alex',
            duration: '59 Min',
            level: 'Level 3',
            difficulty: 'Anstrengung',
            thumbnail: image10,
            rating: 0, // Initial rating value
            avtRating:0,
            message:"",
            messageList:[]
          }
        ]
    })


    const userList = ref(JSON.parse(localStorage.getItem('userList')))
    const id = ref(sessionStorage.getItem('id'))
    const userData =  userList.value.filter((item) => item.id == id.value)
    const userDataNo =  userList.value.filter((item) => item.id != id.value)

    const getAvt = () => {
      let beginnerVideos0 = 0
      let beginnerVideos1 = 0
      let beginnerVideos2 = 0
      let intermediateVideos0 = 0
      let intermediateVideos1 = 0
      let intermediateVideos2 = 0
      let advancedVideos0 = 0
      let advancedVideos1 = 0
      let advancedVideos2 = 0
      let specificNeedsVideos0 = 0
      let specificNeedsVideos1 = 0
      let specificNeedsVideos2 = 0
      userList.value.forEach((item) => {
        if(item.rats) {
          Object.keys(item.rats).forEach((items) => {
           
            item.rats[items].forEach((itemes,indexes) => {
              itemes.message = itemes.message?itemes.message:""
              itemes.messageList = itemes.messageList?itemes.messageList:[]
              if(items == 'beginnerVideos') {
                if(indexes == 0) {
                  beginnerVideos0 += itemes.rating
                } else if(indexes == 1) {
                  beginnerVideos1+= itemes.rating
                } else {
                  beginnerVideos2+= itemes.rating
                }
              } else if(items == 'intermediateVideos') {
                if(indexes == 0) {
                  intermediateVideos0+= itemes.rating
                } else if(indexes == 1) {
                  intermediateVideos1+= itemes.rating
                } else {
                  intermediateVideos2+= itemes.rating
                }
              } else if(items == 'advancedVideos') {
                if(indexes == 0) {
                  advancedVideos0+= itemes.rating
                } else if(indexes == 1) {
                  advancedVideos1+= itemes.rating
                } else {
                  advancedVideos2+= itemes.rating
                }
              } else if(items == 'specificNeedsVideos') {
                if(indexes == 0) {
                  specificNeedsVideos0+= itemes.rating
                } else if(indexes == 1) {
                  specificNeedsVideos1+= itemes.rating
                } else {
                  specificNeedsVideos2+= itemes.rating
                }
              }
            })
          })
        } 
      })

      Object.keys(rats.value).forEach((item) => {
        if(item == 'beginnerVideos') {
          rats.value[item].forEach((items,indexs) => {
            if(indexs == 0) {
              rats.value[item][indexs].avtRating = (beginnerVideos0 / userList.value.length).toFixed(1)
            } else if(indexs == 1) {
              rats.value[item][indexs].avtRating = (beginnerVideos1 / userList.value.length).toFixed(1)
            } else {
              rats.value[item][indexs].avtRating = (beginnerVideos2 / userList.value.length).toFixed(1)
            }
          })
        } else  if(item == 'intermediateVideos') {
          rats.value[item].forEach((items,indexs) => {
            if(indexs == 0) {
              rats.value[item][indexs].avtRating = (intermediateVideos0 / userList.value.length).toFixed(1)
            } else if(indexs == 1) {
              rats.value[item][indexs].avtRating = (intermediateVideos1 / userList.value.length).toFixed(1)
            } else {
              rats.value[item][indexs].avtRating = (intermediateVideos2 / userList.value.length).toFixed(1)
            }
          })
        }else  if(item == 'advancedVideos') {
          rats.value[item].forEach((items,indexs) => {
            if(indexs == 0) {
              rats.value[item][indexs].avtRating = (advancedVideos0 / userList.value.length).toFixed(1)
            } else if(indexs == 1) {
              rats.value[item][indexs].avtRating = (advancedVideos1 / userList.value.length).toFixed(1)
            } else {
              rats.value[item][indexs].avtRating = (advancedVideos2 / userList.value.length).toFixed(1)
            }
          })
        }else  if(item == 'specificNeedsVideos') {
          rats.value[item].forEach((items,indexs) => {
            if(indexs == 0) {
              rats.value[item][indexs].avtRating = (specificNeedsVideos0 / userList.value.length).toFixed(1)
            } else if(indexs == 1) {
              rats.value[item][indexs].avtRating = (specificNeedsVideos1 / userList.value.length).toFixed(1)
            } else {
              rats.value[item][indexs].avtRating = (specificNeedsVideos2 / userList.value.length).toFixed(1)
            }
          })
        }
      })
      // if(list.length > 0) {
      
      // }
    }
    const submitMessage = (video,flag,index) => {
      let mess = userData[0].username + ":" + video.message
     
       userList.value.forEach((item) => {
        Object.keys(item.rats).forEach((items) => {
        
          if(items == flag) {
            item.rats[flag][index].messageList.push(mess)
          }
        })
      })
      // video.messageList.push(mess)
      video.message = ""
      localStorage.setItem('userList', JSON.stringify(userList.value))
      let list = userData[0].rats
      if(userData.length > 0 && list.beginnerVideos) {
        rats.value = list
      }
    }
    const handleRatingChange = (video, newRating) => {
      video.rating = newRating
      localStorage.setItem(`video-rating-${video.id}`, newRating)
      
     
    }
    const setRating = async () => {
      userData[0].rats = rats.value
      let allStore = userDataNo.concat(userData)
      console.log(allStore,"allStore")
      await localStorage.setItem('userList', JSON.stringify(allStore))
      getAvt()
    }
        // Load ratings from localStorage when the component mounts
    onMounted(() => {
      let list = userData[0].rats
      console.log(userData,"userData")
      console.log(list,"list")
      if(userData.length > 0 && list.beginnerVideos) {
        rats.value = list
      }
      getAvt()
      const allVideos = [
        ...rats.value.beginnerVideos,
        ...rats.value.intermediateVideos,
        ...rats.value.advancedVideos,
        ...rats.value.specificNeedsVideos
      ]

      allVideos.forEach((video) => {
        const savedRating = localStorage.getItem(`video-rating-${video.id}`)
        if (savedRating) {
          video.rating = parseInt(savedRating, 10)
        }
      })

    })
    return {
      rats,
      userList,
      id,
      handleRatingChange,
      setRating,
      getAvt,
      submitMessage
    }
  }
}
</script>

<style scoped>
.start{
  display: flex;
  justify-content: space-between;
}
.start_item{
  display: flex;
  justify-content: space-between;
}
.start_message{
  width: 100%;
  height: auto;
  text-align: left;
  margin-top: 20px;
}
.input_message{
  display: flex;
  justify-content: space-between;
}
.btn{
  margin-left: 10px;
}
</style>