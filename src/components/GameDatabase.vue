<template>
  <section class="py-12 bg-amber-50">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <h2 class="text-3xl font-bold text-purple-900 mb-8">Irish Games Database</h2>
      
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div v-for="game in games" :key="game.id" class="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
          <div class="p-6">
            <h3 class="text-xl font-semibold text-purple-900 mb-2">{{ game.title }}</h3>
            <p class="text-gray-600 mb-4">{{ game.developer }}</p>
            <div class="flex flex-wrap gap-2 mb-4">
              <span v-for="platform in game.platforms" :key="platform" 
                    class="px-2 py-1 bg-amber-50 text-purple-900 text-sm rounded">
                {{ platform }}
              </span>
            </div>
            <p class="text-gray-600 text-sm mb-4">{{ game.description }}</p>
            <div class="flex justify-between items-center">
              <span class="text-sm text-gray-500">{{ game.year }}</span>
              <a :href="game.link" target="_blank" 
                 class="text-purple-900 hover:text-purple-700 text-sm font-medium">
                Learn More →
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
const games = [
  {
    id: 1,
    title: "Dungeons of Dredmor",
    developer: "Gaslamp Games",
    year: 2011,
    platforms: ["PC", "Linux", "Mac"],
    description: "A roguelike dungeon crawler with a humorous take on the genre, featuring deep gameplay and extensive modding support.",
    link: "https://store.steampowered.com/app/98800/Dungeons_of_Dredmor/"
  },
  {
    id: 2,
    title: "The Swapper",
    developer: "Facepalm Games",
    year: 2013,
    platforms: ["PC", "PS4", "PS Vita", "Wii U"],
    description: "A critically acclaimed puzzle-platformer that explores themes of consciousness and identity through innovative cloning mechanics.",
    link: "https://store.steampowered.com/app/231160/The_Swapper/"
  },
  {
    id: 3,
    title: "The Curious Expedition",
    developer: "Maschinen-Mensch",
    year: 2015,
    platforms: ["PC", "PS4", "Xbox One", "Switch"],
    description: "A roguelike expedition simulation game set in the late 19th century, featuring procedurally generated adventures.",
    link: "https://store.steampowered.com/app/358130/The_Curious_Expedition/"
  }
];
</script> 