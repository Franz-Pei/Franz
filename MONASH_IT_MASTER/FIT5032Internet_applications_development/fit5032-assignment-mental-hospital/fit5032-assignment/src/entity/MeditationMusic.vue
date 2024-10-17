<template>
  <div class="meditation-music-container">
    <h1 class="text-3xl font-bold mb-6">Meditation Music</h1>
    <div class="music-list">
      <!-- Example of one music track -->
      <div class="music-track">
        <audio controls>
          <source src="@\assets\deep-meditation-192828.mp3" type="audio/mpeg" />
          Your browser does not support the audio element.
        </audio>
        <audio controls>
          <source src="@\assets\relaxing-music-vol1-124477.mp3" type="audio/mpeg" />
          Your browser does not support the audio element.
        </audio>
        <audio controls>
          <source src="@\assets\relaxing-music-vol1-124477.mp3" type="audio/mpeg" />
          Your browser does not support the audio element.
        </audio>
        <div class="track-info">
          <h3 class="text-lg font-semibold">Relaxing Music Vol.1</h3>
          <p class="text-sm">RelaxingTime</p>
        </div>
      </div>
      <!-- Add more music tracks as needed -->
    </div>
  </div>
</template>

<script>
export default {
  name: 'MeditationMusic',
  mounted() {
    console.log('MeditationMusic component has been loaded')
  }
}
</script>

<style scoped>
.meditation-music-container {
  padding: 20px;
  text-align: center;
}

.music-list {
  display: flex;
  flex-direction: column;
  gap: 20px;
  align-items: center;
}

.music-track {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.track-info {
  margin-top: 10px;
}
</style>
