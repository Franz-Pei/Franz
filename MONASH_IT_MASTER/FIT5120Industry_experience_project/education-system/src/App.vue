<script setup>
import { RouterLink, RouterView } from 'vue-router'
import ChatBot from './views/chat-bot/ChatBot.vue';
import FullProtect from './components/FullProtect.vue';
import { useRoute } from 'vue-router'
const route = useRoute()
</script>

<template>
  <RouterView />
  <ChatBot/>
  <FullProtect v-if="!['secondaryDetail', 'detail'].includes(route.name)" />

</template>

