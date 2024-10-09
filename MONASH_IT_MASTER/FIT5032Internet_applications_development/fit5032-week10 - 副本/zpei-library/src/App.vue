<template>
  <div class="main-container">
    <!-- 根据 showHeader 的计算结果显示 BHeader -->
    <header v-if="showHeader">
      <BHeader />
    </header>

    <!-- 当 loginStatus 为 true 时显示 -->
    <header v-if="loginStatus">
      <p>User is logged in</p>
    </header>

    <main class="main-box">
      <router-view></router-view>
    </main>
  </div>
</template>

<script setup>
import { ref, computed, watch } from "vue";
import { useRoute } from "vue-router";
import BHeader from './components/BHeader.vue';

const loginStatus = ref(false);
const route = useRoute();

// 根据路由名称动态决定是否显示 BHeader
const showHeader = computed(() => route.name !== 'CountBookAPI');

// 监听路由名称的变化并动态更新 loginStatus
watch(
  () => route.name,
  (name) => {
    if (name) {
      const token = sessionStorage.getItem("token");
      loginStatus.value = !!token; // 如果 token 存在则设置 loginStatus 为 true
    }
  },
  { immediate: true }  // 确保在组件挂载时立即执行
);
</script>

<style scoped>
.main-box {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    flex-direction: column;
    text-align: center;
    min-height: 100vh;
    padding-top: 0;
    margin-top: 0;
    width: 100%;
}

.main-box h1 {
    width: 50%;
    text-align: center;
    margin: 0;
    text-shadow: 4px 4px 8px rgba(0, 0, 0, 0.5);
    padding-top: 0;
}

header {
    margin-bottom: 0;
    padding-bottom: 0;
}
</style>
