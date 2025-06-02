<template>
    <div v-if="visible" class="modal-overlay" @click.self="closeModal">
      <div class="modal-container">
        <div class="modal-header">
          <h3>College Map</h3>
          <button class="close-btn" @click="closeModal">&times;</button>
        </div>
        <div class="modal-content">
          <div class="map-wrapper">
            <l-map
              ref="map"
              :zoom="zoom"
              :center="center"
              :use-global-leaflet="false"
              @ready="onMapReady"
            >
              <l-tile-layer
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                layer-type="base"
                name="OpenStreetMap"
              ></l-tile-layer>
              <l-marker
                v-for="(college, index) in colleges"
                :key="college.id"
                :title="college.name"
                :lat-lng="college.coordinates"
                :icon="getMarkerIcon(index)"
                @click="handleMarkerClick(college)"
                :options="getMarkerOptions(college, index)"
              >
                <l-popup :options="{ autoOpen: true }"> {{ college.name }}</l-popup>
              </l-marker>
              <l-marker
                :key="colleges.length"
                title="You Location"
                :lat-lng="currentPosition"
                :icon="getYouMarkerIcon()"
                :options="getYouMarkerOptions('You Location', colleges.length)"
              >
                <l-popup :options="{ autoOpen: true }"> {{ "You Location" }}</l-popup>
              </l-marker>
            </l-map>
          </div>
  
          <div v-if="loading" class="loading">Loading...</div>
          <div v-if="error" class="error">{{ error }}</div>
        </div>
      </div>
    </div>
  </template>
  
  <script setup>
  import { ref, onMounted, nextTick, watch } from "vue";
  import { useRouter } from "vue-router";
  import { LMap, LTileLayer, LMarker, LPopup } from "@vue-leaflet/vue-leaflet";
  import L from "leaflet";
  import "leaflet/dist/leaflet.css";
  
  import markerIcon2x from "leaflet/dist/images/marker-icon-2x.png";
  import markerIcon from "leaflet/dist/images/marker-icon.png";
  import markerShadow from "leaflet/dist/images/marker-shadow.png";
  
  delete L.Icon.Default.prototype._getIconUrl;
  L.Icon.Default.mergeOptions({
    iconRetinaUrl: markerIcon2x,
    iconUrl: markerIcon,
    shadowUrl: markerShadow,
  });
  
  const props = defineProps({
    visible: {
      type: Boolean,
      default: false
    },
    collegeIds: {
      type: String,
      default: () => ""
    }
  });
  
  const emit = defineEmits(['update:visible', 'close']);
  
  const zoom = ref(5);
  const currentPosition = ref([])
  const center = ref([-25.2744, 133.7751]);
  const colleges = ref([]);
  const loading = ref(false);
  const error = ref(null);
  let addressMap = null;
  const router = useRouter();
  
  const geocodeAddress = async (address) => {
    const response = await fetch(
      `https://nominatim.openstreetmap.org/search?format=json&q=${encodeURIComponent(
        address
      )}`
    );
    const data = await response.json();
    if (!data.length) throw new Error(`Address not found: ${address}`);
    return [parseFloat(data[0].lat), parseFloat(data[0].lon)];
  };
  const adjustMapView = () => {
    if (addressMap && colleges.value.length > 0) {
      const bounds = colleges.value.map((c) => c.coordinates);
      bounds.push(currentPosition.value);
      addressMap.flyToBounds(bounds, {
        padding: [50, 50]
      });
    }
  };
  const handleMarkerClick = (college) => {
    router.push({
      name: "secondaryDetail",
      query: { name: college.name },
    });
  };
  const getMarkerIcon = (index) => {
    return L.icon({
      iconUrl: "https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-green.png",
      shadowUrl: "https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png",
      iconSize: [25, 41],
      iconAnchor: [12, 41],
      popupAnchor: [1, -34],
      shadowSize: [41, 41],
    });
  };

  const getYouMarkerIcon = () => {
    return L.icon({
      iconUrl: "https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-red.png",
      shadowUrl: "https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png",
      iconSize: [25, 41],
      iconAnchor: [12, 41],
      popupAnchor: [1, -34],
      shadowSize: [41, 41],
    });
  }
  
  const getMarkerOptions = (college, index) => ({
    title: college.name,
    alt: `${index + 1}: ${college.name}`,
    riseOnHover: true,
    keyboard: true
  });
  const getYouMarkerOptions = (name, index) => ({
    title: name,
    alt: `${index + 1}: ${name}`,
    riseOnHover: true,
    keyboard: true
  });
  
  const onMapReady = (mapInstance) => {
    addressMap = mapInstance;
  };
  
  const fetchColleges = async (ids) => {
    try {
      loading.value = true;
      error.value = null;
      colleges.value = [];
  
      if (!ids) {
        throw new Error("No college IDs provided.");
      }
      const response = await fetch(
        `/api/getSecondaryCollegesByids?ids=${ids}`
      );
      if (!response.ok) throw new Error("API request failed.");
  
      const data = await response.json();
      colleges.value = await Promise.all(
        data.data.map(async (college) => ({
          ...college,
          coordinates: await geocodeAddress(college.name),
        }))
      );
      nextTick(adjustMapView);
    } catch (err) {
      error.value = err.message;
    } finally {
      loading.value = false;
    }
  };
  
  const closeModal = () => {
    emit('update:visible', false);
    emit('close');
  };
  
  watch(() => props.collegeIds, (newIds) => {
    if (props.visible && newIds && newIds.length > 0) {
       navigator.geolocation.getCurrentPosition((position)=>{
        currentPosition.value = []
        currentPosition.value.push(position.coords.latitude);
        currentPosition.value.push(position.coords.longitude);
        fetchColleges(newIds);
      })
      
    }
  }, { immediate: true });
  
  watch(() => props.visible, (newVal) => {
    if (newVal && props.collegeIds && props.collegeIds.length > 0) {
      navigator.geolocation.getCurrentPosition((position)=>{
        currentPosition.value = []
        currentPosition.value.push(position.coords.latitude);
        currentPosition.value.push(position.coords.longitude);
        fetchColleges(props.collegeIds);
      })
    }
  });
  </script>
  
  <style scoped>
  .modal-overlay {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: rgba(0, 0, 0, 0.5);
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 1000;
  }
  
  .modal-container {
    background-color: white;
    border-radius: 8px;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.2);
    width: 80%;
    max-width: 900px;
    max-height: 90vh;
    display: flex;
    flex-direction: column;
  }
  
  .modal-header {
    padding: 16px 20px;
    border-bottom: 1px solid #eee;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  
  .modal-header h3 {
    margin: 0;
    font-size: 1.2rem;
  }
  
  .close-btn {
    background: none;
    border: none;
    font-size: 1.5rem;
    cursor: pointer;
    color: #666;
    padding: 0 8px;
  }
  
  .close-btn:hover {
    color: #333;
  }
  
  .modal-content {
    padding: 20px;
    overflow: auto;
    flex-grow: 1;
  }
  
  .map-wrapper {
    height: 500px;
    width: 100%;
    border: 1px solid #ddd;
    border-radius: 4px;
  }
  
  .loading,
  .error {
    position: absolute;
    top: 70px;
    left: 50%;
    transform: translateX(-50%);
    padding: 10px 20px;
    background: rgba(0, 0, 0, 0.8);
    color: white;
    border-radius: 5px;
    z-index: 1001;
  }
  
  .error {
    background: #ff4444;
  }
  </style>