<template>
  <div class="home">
    <div class="address-inputs">
      <div class="input-group">
        <label for="address1">地址 1:</label>
        <input
          id="address1"
          v-model="address1"
          @keyup.enter="searchAddresses"
          placeholder="输入第一个地址"
        />
      </div>

      <div class="input-group">
        <label for="address2">地址 2:</label>
        <input
          id="address2"
          v-model="address2"
          @keyup.enter="searchAddresses"
          placeholder="输入第二个地址"
        />
      </div>

      <button @click="searchAddresses">在地图上标记</button>
    </div>

    <div v-if="error" class="error-message">{{ error }}</div>

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

        <l-marker v-if="marker1.lat" :lat-lng="marker1" :icon="icon1">
          <l-popup>地址 1: {{ address1 }}</l-popup>
        </l-marker>

        <l-marker v-if="marker2.lat" :lat-lng="marker2" :icon="icon2">
          <l-popup>地址 2: {{ address2 }}</l-popup>
        </l-marker>
      </l-map>
    </div>
  </div>
</template>

<script>
import { LMap, LTileLayer, LMarker, LPopup } from "@vue-leaflet/vue-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";

// 使用 import 引入图片（Vite / Webpack 会处理）
import markerIcon2x from "leaflet/dist/images/marker-icon-2x.png";
import markerIcon from "leaflet/dist/images/marker-icon.png";
import markerShadow from "leaflet/dist/images/marker-shadow.png";

// 修复 Leaflet 图标路径
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: markerIcon2x,
  iconUrl: markerIcon,
  shadowUrl: markerShadow,
});

export default {
  components: {
    LMap,
    LTileLayer,
    LMarker,
    LPopup,
  },
  data() {
    return {
      zoom: 5,
      center: [-25.2744, 133.7751],
      address1: "",
      address2: "",
      marker1: { lat: null, lng: null },
      marker2: { lat: null, lng: null },
      error: "",
      map: null,
      // 自定义图标
      icon1: L.icon({
        iconUrl:
          "https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-green.png",
        shadowUrl:
          "https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png",
        iconSize: [25, 41],
        iconAnchor: [12, 41],
        popupAnchor: [1, -34],
        shadowSize: [41, 41],
      }),
      icon2: L.icon({
        iconUrl:
          "https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-red.png",
        shadowUrl:
          "https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png",
        iconSize: [25, 41],
        iconAnchor: [12, 41],
        popupAnchor: [1, -34],
        shadowSize: [41, 41],
      }),
    };
  },
  methods: {
    onMapReady(map) {
      console.log(map);
      this.map = map;
    },
    async searchAddresses() {
      if (!this.address1 || !this.address2) {
        this.error = "请输入两个地址";
        return;
      }

      this.error = "";

      try {
        // 并行获取两个地址的坐标
        const [result1, result2] = await Promise.all([
          this.geocodeAddress(this.address1),
          this.geocodeAddress(this.address2),
        ]);

        this.marker1 = result1;
        this.marker2 = result2;

        // 调整地图视图以包含两个标记
        if (this.map) {
          const bounds = [
            [result1.lat, result1.lng],
            [result2.lat, result2.lng],
          ]; //L.latLngBounds([result1, result2]);
          console.log(this.map);
          this.map.flyToBounds(bounds, { padding: [50, 50] });
        }
      } catch (err) {
        this.error = "无法找到其中一个或两个地址，请尝试更具体的地址";
        console.error(err);
      }
    },
    async geocodeAddress(address) {
      // 使用Nominatim API进行地理编码
      const response = await fetch(
        `https://nominatim.openstreetmap.org/search?format=json&q=${encodeURIComponent(
          address
        )}`
      );

      const data = await response.json();

      if (data.length === 0) {
        throw new Error("地址未找到");
      }

      return {
        lat: parseFloat(data[0].lat),
        lng: parseFloat(data[0].lon),
      };
    },
  },
};
</script>

<style>
.map-wrapper {
  height: 500px;
  margin-top: 20px;
  border: 1px solid #ddd;
  border-radius: 4px;
}

.address-inputs {
  display: flex;
  flex-wrap: wrap;
  gap: 15px;
  margin-bottom: 20px;
}

.input-group {
  flex: 1;
  min-width: 250px;
}

.input-group label {
  display: block;
  margin-bottom: 5px;
  font-weight: bold;
}

.input-group input {
  width: 100%;
  padding: 8px;
  border: 1px solid #ddd;
  border-radius: 4px;
}

button {
  padding: 8px 15px;
  background-color: #4caf50;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  align-self: flex-end;
  height: fit-content;
}

button:hover {
  background-color: #45a049;
}

.error-message {
  color: red;
  margin-bottom: 15px;
}
</style>
