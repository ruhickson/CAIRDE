<script setup>
import { ref } from 'vue'
import Header from './layouts/Header.vue';
import Main from './layouts/Main.vue';
import Footer from './layouts/Footer.vue';
import QualificationsSidebar from './components/QualificationsSidebar.vue'
import GameDatabase from './components/GameDatabase.vue'
import PreservationResources from './components/PreservationResources.vue'

const showQualifications = ref(false)
</script>

<template>
  <div class="min-h-screen bg-amber-50">
    <header class="bg-white shadow-sm">
      <nav class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <h1 class="text-2xl font-bold text-purple-900">CAIRDE</h1>
        <p class="text-gray-600">Cultural Archive for Irish Recorded & Digital Entertainment</p>
      </nav>
    </header>

    <main>
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div class="bg-white shadow rounded-lg p-6 mb-8">
          <h2 class="text-xl font-semibold mb-4 text-purple-900">Preserving Ireland's Gaming Heritage</h2>
          <p class="text-gray-600 mb-4">
            CAIRDE is dedicated to preserving and celebrating Ireland's rich video game history. 
            From early home computer games to modern indie titles, we work to ensure that Ireland's 
            contribution to gaming culture is documented, preserved, and accessible to future generations.
          </p>
          <div class="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
            <div class="bg-amber-50 p-4 rounded-lg">
              <h3 class="font-semibold mb-2 text-purple-900">Irish Games</h3>
              <p class="text-sm text-gray-600">Discover and explore games developed in Ireland, from classic titles to modern indie releases.</p>
            </div>
            <div class="bg-amber-50 p-4 rounded-lg">
              <h3 class="font-semibold mb-2 text-purple-900">Preservation</h3>
              <p class="text-sm text-gray-600">Learn about our efforts to preserve digital games and gaming history for future generations.</p>
            </div>
            <div class="bg-amber-50 p-4 rounded-lg">
              <h3 class="font-semibold mb-2 text-purple-900">Community</h3>
              <p class="text-sm text-gray-600">Join our community of game preservationists, historians, and enthusiasts.</p>
            </div>
          </div>
        </div>
      </div>

      <GameDatabase />
      <PreservationResources />
    </main>

    <footer class="bg-purple-900 text-white py-8">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 class="text-lg font-semibold mb-4">About CAIRDE</h3>
            <p class="text-purple-100">Dedicated to preserving and celebrating Ireland's video game heritage.</p>
          </div>
          <div>
            <h3 class="text-lg font-semibold mb-4">Contact</h3>
            <p class="text-purple-100">Email: info@cairde.ie</p>
          </div>
          <div>
            <h3 class="text-lg font-semibold mb-4">Follow Us</h3>
            <div class="flex space-x-4">
              <a href="#" class="text-purple-100 hover:text-white">Twitter</a>
              <a href="#" class="text-purple-100 hover:text-white">Discord</a>
              <a href="#" class="text-purple-100 hover:text-white">GitHub</a>
            </div>
          </div>
        </div>
        <div class="mt-8 pt-8 border-t border-purple-800 text-center text-purple-100">
          <p>&copy; {{ new Date().getFullYear() }} CAIRDE. All rights reserved.</p>
        </div>
      </div>
    </footer>
  </div>
</template>

<style scoped></style>
