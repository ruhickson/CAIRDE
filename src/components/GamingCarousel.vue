<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue'

const slides = [
  {
    image: 'https://i.imgur.com/h8YW9cp.jpg',
    title: 'Irish Dev Meetups',
    description: 'Community gatherings where studios share prototypes, tech, and preservation wins.'
  },
  {
    image: 'https://i.imgur.com/OLJpeiz.jpg',
    title: 'Future Concept Art',
    description: 'Concept pieces from Irish sci-fi storytellers exploring Dublin’s neon skyline.'
  },
  {
    image: 'https://i.imgur.com/ljiqhmu.jpg',
    title: 'Retro Preservation Kits',
    description: 'Digitising boxed releases, manuals, and peripherals before they vanish.'
  },
  {
    image: 'https://i.imgur.com/D07aEBF.jpg',
    title: 'Arcade Restorations',
    description: 'Volunteer teams breathing new life into classic cabinets across Ireland.'
  },
  {
    image: 'https://i.imgur.com/EoKbDw4.jpg',
    title: 'Indie Studio Life',
    description: 'Small teams iterating late into the night on stories rooted in Irish folklore.'
  }
]

const currentIndex = ref(0)
let intervalId

const nextSlide = () => {
  currentIndex.value = (currentIndex.value + 1) % slides.length
}

const prevSlide = () => {
  currentIndex.value = (currentIndex.value - 1 + slides.length) % slides.length
}

const startAutoPlay = () => {
  intervalId = setInterval(() => {
    nextSlide()
  }, 6000)
}

const stopAutoPlay = () => {
  if (intervalId) clearInterval(intervalId)
}

onMounted(() => {
  startAutoPlay()
})

onBeforeUnmount(() => {
  stopAutoPlay()
})
</script>

<template>
  <section class="py-10">
    <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="relative rounded-2xl overflow-hidden shadow-xl">
        <div class="relative h-80 sm:h-96">
          <transition name="fade" mode="out-in">
            <img
              :key="slides[currentIndex].image"
              class="h-full w-full object-cover"
              :src="slides[currentIndex].image"
              :alt="slides[currentIndex].title"
              loading="lazy"
            />
          </transition>

          <div class="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent"></div>

          <div class="absolute inset-0 flex flex-col justify-end p-6 sm:p-10 text-white">
            <p class="text-sm uppercase tracking-widest mb-2 opacity-80">
              Irish Gaming Snapshot
            </p>
            <h3 class="text-2xl sm:text-3xl font-bold mb-3">
              {{ slides[currentIndex].title }}
            </h3>
            <p class="text-base sm:text-lg max-w-2xl">
              {{ slides[currentIndex].description }}
            </p>
          </div>

          <button
            class="absolute inset-y-0 left-0 flex items-center px-4 text-white hover:text-green-200 focus:outline-none"
            @click="prevSlide"
            @mouseenter="stopAutoPlay"
            @mouseleave="startAutoPlay"
            aria-label="Previous slide"
          >
            <span class="text-3xl sm:text-4xl">‹</span>
          </button>
          <button
            class="absolute inset-y-0 right-0 flex items-center px-4 text-white hover:text-green-200 focus:outline-none"
            @click="nextSlide"
            @mouseenter="stopAutoPlay"
            @mouseleave="startAutoPlay"
            aria-label="Next slide"
          >
            <span class="text-3xl sm:text-4xl">›</span>
          </button>
        </div>

        <div class="flex justify-center gap-2 py-4 bg-white dark:bg-black">
          <button
            v-for="(slide, index) in slides"
            :key="slide.image"
            class="h-3 w-3 rounded-full border border-green-600"
            :class="index === currentIndex ? 'bg-green-600' : 'bg-transparent'"
            @click="currentIndex = index"
            @mouseenter="stopAutoPlay"
            @mouseleave="startAutoPlay"
            :aria-label="`Go to slide ${index + 1}`"
          ></button>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.6s ease;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>

