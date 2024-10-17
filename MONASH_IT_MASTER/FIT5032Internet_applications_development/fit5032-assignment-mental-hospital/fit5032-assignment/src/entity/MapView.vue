<template>
  <div class="d-flex tw-flex-col tw-gap-5 tw-w-full tw-h-full mt-5">
    <!-- Map Title -->
    <h2 class="tw-font-normal tw-text-lg my-1">Map</h2>

    <!-- Search input for searching places -->
    <div class="d-flex tw-flex-col tw-gap-2">
      <input
        type="text"
        v-model="query"
        @input="onSearch"
        placeholder="Search..."
        class="p-2 border rounded shadow tw-w-full"
      />
      <ul
        v-if="suggestions.length"
        class="bg-white border rounded mt-2 max-h-48 overflow-auto d-flex tw-flex-col tw-gap-1 tw-my-2"
      >
        <!-- Display search suggestions -->
        <li
          v-for="place in suggestions"
          :key="place.id"
          @click="selectPlace(place)"
          class="p-2 hover:tw-bg-gray-200 tw-cursor-pointer tw-w-full"
        >
          {{ place.place_name }}
        </li>
      </ul>
    </div>

    <!-- Buttons to export data and show hospitals -->
    <div class="d-flex gap-2 tw-justify-end tw-items-center">
      <button @click="exportToCSV" class="px-4 py-2 bg-blue-500 rounded shadow">
        Export as CSV
      </button>
      <button @click="exportToPDF" class="px-4 py-2 bg-green-500 rounded shadow">
        Export as PDF
      </button>
      <button @click="fetchNearbyHospitals" class="px-4 py-2 bg-blue-500 rounded shadow">
        Show Nearby Hospitals
      </button>
    </div>

    <!-- Map container -->
    <div ref="mapContainer" class="mapContainer"></div>

    <!-- Display nearby hospitals -->
    <div v-if="nearbyHospitals.length" class="mt-4">
      <h3 class="tw-font-semibold tw-text-lg">Nearby Hospitals</h3>
      <ul class="tw-list-disc tw-list-inside tw-pl-4">
        <li v-for="hospital in nearbyHospitals" :key="hospital.id">
          <strong>{{ hospital.text }}</strong> - {{ hospital.place_name }}
        </li>
      </ul>
    </div>

    <!-- Search History -->
    <div
      v-if="searchHistory.length"
      class="tw-my-2 d-flex tw-flex-col tw-justify-center tw-gap-1"
    >
      <h3 class="tw-font-semibold tw-text-lg">History</h3>
      <ul class="tw-list-disc tw-pl-5 tw-w-full tw-flex tw-flex-col tw-gap-1">
        <li
          v-for="(place, index) in searchHistory"
          :key="place.id"
          class="d-flex tw-justify-between tw-items-center tw-w-full"
        >
          <span @click="selectPlace(place)" class="tw-cursor-pointer tw-text-blue-500">
            {{ place.place_name }}
          </span>
          <button @click="removeFromHistory(index)" class="tw-text-red-500 tw-rounded tw-p-1">
            DELETE
          </button>
        </li>
      </ul>
      <button
        @click="clearHistory"
        class="tw-mt-2 tw-px-4 tw-py-2 tw-bg-red-500 tw-text-white tw-rounded"
      >
        Delete All
      </button>
    </div>
  </div>
</template>

<script>
import { ref, onMounted, reactive } from 'vue'
import mapboxgl from 'mapbox-gl' // Import Mapbox GL JS
import 'mapbox-gl/dist/mapbox-gl.css' // Import Mapbox GL JS CSS
import MapboxDirections from '@mapbox/mapbox-gl-directions/dist/mapbox-gl-directions'
import '@mapbox/mapbox-gl-directions/dist/mapbox-gl-directions.css'
import { saveAs } from 'file-saver' // To save files (CSV export)
import jsPDF from 'jspdf' // To generate PDFs
import { MAPBOX_ACCESS_TOKEN } from '@/variables' // Your Mapbox access token

// Import Firestore
import { getFirestore, collection, addDoc, getDocs, deleteDoc, doc } from 'firebase/firestore'
import { app } from '@/firebase' // Correct import of Firebase app

export default {
  name: 'MapView',
  setup() {
    const mapContainer = ref(null)
    const map = ref(null)
    const query = ref('')
    const suggestions = ref([])
    const searchHistory = reactive([])
    const nearbyHospitals = reactive([])

    // Initialize Firestore using the Firebase app
    const db = getFirestore(app) // Firestore database reference

    // Firestore collection reference
    const historyCollectionRef = collection(db, 'searchHistory')

    const accessToken = MAPBOX_ACCESS_TOKEN
    mapboxgl.accessToken = accessToken

    // Load search history from Firestore on mount
    const loadSearchHistory = async () => {
      const querySnapshot = await getDocs(historyCollectionRef)
      querySnapshot.forEach((doc) => {
        searchHistory.push({ id: doc.id, ...doc.data() })
      })
    }

    onMounted(async () => {
      // Load existing search history from Firestore
      await loadSearchHistory()

      const defaultLocation = [-73.935242, 40.73061]; // New York City as default
      map.value = new mapboxgl.Map({
        container: mapContainer.value,
        style: 'mapbox://styles/mapbox/streets-v11',
        center: defaultLocation,
        zoom: 12,
        dragPan: true,
        scrollZoom: true,
        doubleClickZoom: true
      })

      map.value.addControl(new mapboxgl.NavigationControl())

      map.value.addControl(new mapboxgl.FullscreenControl(), 'top-right')
      map.value.addControl(
        new mapboxgl.GeolocateControl({
          positionOptions: {
            enableHighAccuracy: true
          },
          trackUserLocation: true
        }),
        'top-left'
      )

      // Add Mapbox Directions control
      const directions = new MapboxDirections({
        accessToken: accessToken,
        unit: 'metric',
        profile: 'mapbox/driving'
      })
      map.value.addControl(directions, 'top-left')

      // Try to get the user's location
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(
          (position) => {
            const userLocation = [position.coords.longitude, position.coords.latitude]

            // Update map view to user's location
            map.value.setCenter(userLocation)

            // Add a marker at the user's current location
            new mapboxgl.Marker().setLngLat(userLocation).addTo(map.value)
          },
          (error) => {
            console.error('Geolocation error: ', error)
            // Fallback to default location if error occurs
            map.value.setCenter(defaultLocation)
          }
        )
      } else {
        console.error('Geolocation is not supported by this browser.')
        // Use default location if geolocation is not available
        map.value.setCenter(defaultLocation)
      }
    })

    const onSearch = async () => {
      if (query.value.length > 2) {
        const response = await fetch(
          `https://api.mapbox.com/geocoding/v5/mapbox.places/${encodeURIComponent(
            query.value
          )}.json?access_token=${accessToken}&limit=5`
        )
        const data = await response.json()
        suggestions.value = data.features
      } else {
        suggestions.value = []
      }
    }

    const selectPlace = async (place) => {
      const [lng, lat] = place.geometry.coordinates;

      console.log('Selected place:', place); // Log the selected place

      new mapboxgl.Marker().setLngLat([lng, lat]).addTo(map.value);

      map.value.flyTo({ center: [lng, lat], zoom: 14 });

      // Check if the place is already in searchHistory, and then add it if it's not
      if (!searchHistory.some((item) => item.id === place.id)) {
        place.image = `https://api.mapbox.com/styles/v1/mapbox/streets-v11/static/${lng},${lat},14,0/400x200?access_token=${accessToken}`;
        
        // Save to Firestore
        const docRef = await addDoc(historyCollectionRef, place);
        searchHistory.push({ id: docRef.id, ...place }); // Add the place to searchHistory
        
        console.log('Updated searchHistory:', JSON.parse(JSON.stringify(searchHistory))); // Log searchHistory after adding the place
      } else {
        console.log('Place already in history.');
      }

      suggestions.value = [];
      query.value = place.place_name;
    }

    const fetchNearbyHospitals = async () => {
      const center = map.value.getCenter(); // Get the current map center
      const lng = center.lng;
      const lat = center.lat;

      const response = await fetch(
        `https://api.mapbox.com/geocoding/v5/mapbox.places/hospital.json?proximity=${lng},${lat}&access_token=${accessToken}&types=poi&limit=5`
      );
      const data = await response.json();
      nearbyHospitals.splice(0, nearbyHospitals.length, ...data.features); // Update nearbyHospitals

      // Add markers for hospitals
      data.features.forEach(hospital => {
        const [hospitalLng, hospitalLat] = hospital.geometry.coordinates;
        new mapboxgl.Marker({ color: 'green' })
          .setLngLat([hospitalLng, hospitalLat])
          .setPopup(new mapboxgl.Popup().setHTML(`<h4>${hospital.text}</h4><p>${hospital.place_name}</p>`))
          .addTo(map.value);
      });
    };

    const removeFromHistory = async (index) => {
      const placeToRemove = searchHistory[index];
      const placeDocRef = doc(db, 'searchHistory', placeToRemove.id);

      await deleteDoc(placeDocRef); // Remove from Firestore
      searchHistory.splice(index, 1); // Remove from local state
    }

    const clearHistory = async () => {
      for (let i = 0; i < searchHistory.length; i++) {
        const placeDocRef = doc(db, 'searchHistory', searchHistory[i].id);
        await deleteDoc(placeDocRef); // Remove each document from Firestore
      }
      searchHistory.splice(0, searchHistory.length) // Clear local state
    }

    const exportToCSV = () => {
      if (searchHistory.length === 0) {
        console.log("No data to export");
        return;
      }
      const header = ['Place', 'Full Name', 'Longitude', 'Latitude', 'Thumbnail']
      const rows = searchHistory.map((place) => [
        place.text,
        place.place_name,
        place.geometry.coordinates[0],
        place.geometry.coordinates[1],
        place.image
      ])

      let csvContent =
        header.join(',') +
        '\n' +
        rows.map((e) => e.map((field) => `"${field}"`).join(',')).join('\n')

      const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' })
      saveAs(blob, 'places.csv')
    }

    const exportToPDF = async () => {
      if (searchHistory.length === 0) {
        console.log("No data to export");
        return;
      }
      const doc = new jsPDF()

      for (let i = 0; i < searchHistory.length; i++) {
        const place = searchHistory[i]
        doc.text(`Place: ${place.text}`, 10, 10 + i * 60)
        doc.text(`Full Name: ${place.place_name}`, 10, 20 + i * 60)
        doc.text(
          `Longitude ${place.geometry.coordinates[0]}, Latitude ${place.geometry.coordinates[1]}`,
          10,
          30 + i * 60
        )

        const imgData = await getImageData(place.image)
        doc.addImage(imgData, 'JPEG', 10, 35 + i * 60, 180, 40)

        if (i !== searchHistory.length - 1) {
          doc.addPage()
        }
      }

      doc.save('places.pdf')
    }

    const getImageData = (url) => {
      return new Promise((resolve) => {
        const img = new Image()
        img.crossOrigin = 'Anonymous'
        img.src = url
        img.onload = () => {
          const canvas = document.createElement('canvas')
          canvas.width = img.width
          canvas.height = img.height
          const ctx = canvas.getContext('2d')
          ctx.drawImage(img, 0, 0)
          resolve(canvas.toDataURL('image/jpeg'))
        }
      })
    }

    return {
      mapContainer,
      query,
      suggestions,
      onSearch,
      selectPlace,
      exportToCSV,
      exportToPDF,
      searchHistory,
      removeFromHistory,
      clearHistory,
      fetchNearbyHospitals,
      nearbyHospitals
    }
  }
}
</script>

<style scoped>
.mapContainer {
  position: relative;
  z-index: 0;
  width: 100%;
  height: 500px; 
}

.mapboxgl-control-container {
  z-index: 99 !important;
}
</style>
