<script setup>
import { ref, onMounted, watch } from 'vue'
import Header from './layouts/Header.vue';
import Main from './layouts/Main.vue';
import Footer from './layouts/Footer.vue';
import QualificationsSidebar from './components/QualificationsSidebar.vue'
import GameDatabase from './components/GameDatabase.vue'
import PreservationResources from './components/PreservationResources.vue'

const showQualifications = ref(false)
const accessibilityMode = ref(false)

const toggleAccessibility = () => {
  accessibilityMode.value = !accessibilityMode.value
  // Store preference in localStorage
  localStorage.setItem('cairde_accessibility_mode', accessibilityMode.value.toString())
}

// Load accessibility preference on mount
onMounted(() => {
  const saved = localStorage.getItem('cairde_accessibility_mode')
  if (saved === 'true') {
    accessibilityMode.value = true
  }
  // Apply class to body for global styling
  updateBodyClass()
})

// Watch for changes and update body class
watch(accessibilityMode, () => {
  updateBodyClass()
})

const updateBodyClass = () => {
  if (accessibilityMode.value) {
    document.documentElement.classList.add('accessibility-mode')
    document.body.classList.add('accessibility-mode')
  } else {
    document.documentElement.classList.remove('accessibility-mode')
    document.body.classList.remove('accessibility-mode')
  }
}
</script>

<template>
  <div :class="['min-h-screen', accessibilityMode ? 'bg-black' : 'bg-green-50']">
    <header :class="['shadow-sm border-b', accessibilityMode ? 'bg-black border-white' : 'bg-white border-green-100']">
      <nav class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 relative">
        <!-- Accessibility Toggle Button -->
        <button
          @click="toggleAccessibility"
          :aria-label="accessibilityMode ? 'Disable accessibility mode' : 'Enable accessibility mode'"
          :title="accessibilityMode ? 'Disable accessibility mode' : 'Enable accessibility mode'"
          class="absolute top-4 right-4 md:right-8 p-3 rounded-lg border-2 transition-all duration-200 z-10"
          :class="accessibilityMode 
            ? 'bg-black border-white text-white hover:bg-gray-800' 
            : 'bg-green-700 border-green-800 text-white hover:bg-green-600'"
        >
          <i :class="accessibilityMode ? 'fas fa-eye' : 'fas fa-universal-access'" class="text-xl"></i>
        </button>
        
        <h1 :class="['font-extrabold flex items-center gap-3', accessibilityMode ? 'text-white text-5xl md:text-6xl' : 'text-4xl md:text-5xl text-green-800']">
          <i :class="['fas fa-gamepad', accessibilityMode ? 'text-white text-4xl md:text-5xl' : 'text-green-700 text-3xl md:text-4xl']"></i>
          CAIRDE
        </h1>
        <p :class="['mt-2', accessibilityMode ? 'text-xl md:text-2xl text-white' : 'text-lg md:text-xl text-gray-700']">Cultural Archive for Irish Representation in Digital Entertainment</p>
      </nav>
    </header>

    <main>
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div class="bg-white shadow rounded-lg p-6 mb-8 border border-green-100">
          <h2 class="text-2xl md:text-3xl font-bold mb-6 text-green-800">Preserving Ireland's Gaming Heritage</h2>
          <p class="text-lg text-gray-700 mb-6 leading-relaxed">
            CAIRDE is dedicated to preserving and celebrating Ireland's rich video game history. 
            From early home computer games to modern indie titles, we work to ensure that Ireland's 
            contribution to gaming culture is documented, preserved, and accessible to future generations.
          </p>
          <div class="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
            <div class="bg-green-50 p-4 rounded-lg border border-green-100">
              <h3 class="text-lg font-bold mb-3 text-green-800">Irish Games</h3>
              <p class="text-base text-gray-700 leading-relaxed">Discover and explore games developed in Ireland, from classic titles to modern indie releases.</p>
            </div>
            <div class="bg-green-50 p-4 rounded-lg border border-green-100">
              <h3 class="text-lg font-bold mb-3 text-green-800">Preservation</h3>
              <p class="text-base text-gray-700 leading-relaxed">Learn about our efforts to preserve digital games and gaming history for future generations.</p>
            </div>
            <div class="bg-green-50 p-4 rounded-lg border border-green-100">
              <h3 class="text-lg font-bold mb-3 text-green-800">Community</h3>
              <p class="text-base text-gray-700 leading-relaxed">Join our community of game preservationists, historians, and enthusiasts.</p>
            </div>
          </div>
        </div>
      </div>

      <GameDatabase />
      <PreservationResources />
    </main>

    <footer :class="['py-8', accessibilityMode ? 'bg-black border-t-2 border-white' : 'bg-green-800 text-white']">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 class="text-lg font-semibold mb-4">About CAIRDE</h3>
            <p :class="accessibilityMode ? 'text-white' : 'text-green-100'">Dedicated to preserving and celebrating Ireland's video game heritage.</p>
          </div>
          <div>
            <h3 class="text-lg font-semibold mb-4">Contact</h3>
            <p :class="accessibilityMode ? 'text-white' : 'text-green-100'">Email: info@cairde.ie</p>
          </div>
          <div>
            <h3 class="text-lg font-semibold mb-4">Follow Us</h3>
            <div class="flex space-x-4">
              <a href="#" :class="accessibilityMode ? 'text-white underline' : 'text-green-100 hover:text-green-50'">Twitter</a>
              <a href="#" :class="accessibilityMode ? 'text-white underline' : 'text-green-100 hover:text-green-50'">Discord</a>
              <a href="#" :class="accessibilityMode ? 'text-white underline' : 'text-green-100 hover:text-green-50'">GitHub</a>
            </div>
          </div>
        </div>
        <div :class="['mt-8 pt-8 border-t text-center', accessibilityMode ? 'border-white text-white' : 'border-green-700 text-green-100']">
          <p>&copy; {{ new Date().getFullYear() }} CAIRDE. All rights reserved.</p>
        </div>
      </div>
    </footer>
  </div>
</template>

<style scoped></style>
