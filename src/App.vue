<script setup>
import { reactive } from 'vue'
import Home from './components/Home.vue'
import DonationHub from './components/DonationHub.vue'
import Network from './components/Network.vue'
import Career from './components/Career.vue'
import Documents from './components/Documents.vue'
import BottomNav from './components/BottomNav.vue'

const state = reactive({
  currentPage: 'home'
})

const handleNavigate = (pageId) => {
  state.currentPage = pageId
}
</script>

<template>
  <div id="app">
    <main class="main-content">
      <Home v-if="state.currentPage === 'home'" />
      <Network v-else-if="state.currentPage === 'network'" />
      <DonationHub v-else-if="state.currentPage === 'donate'" />
      <Career v-else-if="state.currentPage === 'career'" />
      <Documents v-else-if="state.currentPage === 'documents'" />
    </main>
    <BottomNav :currentPage="state.currentPage" @navigate="handleNavigate" />
  </div>
</template>

<style scoped>
#app {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}

.main-content {
  flex: 1;
  overflow-y: auto;
}
</style>
