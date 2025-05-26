<script setup>
import UrlButton from '../components/UrlButton.vue'
</script>

<template>
    <!-- Hero Section Start -->
    <div class="container mx-auto px-5 overflow-x-hidden lg:overflow-x-visible">
        <section class="grid grid-cols-none lg:grid-cols-2 pb-16 pt-8 items-center">
            <div class="lg:w-5/6 order-2 lg:order-none">
                <h1 class="text-4xl xl:text-5xl font-bold text-purple-900 text-center lg:text-left">Preserving Ireland's Gaming Heritage</h1>
                <p class="lg:text-xl mt-10 text-gray-600 text-center lg:text-left">
                    CAIRDE is dedicated to preserving and celebrating Ireland's rich video game history. 
                    From early home computer games to modern indie titles, we work to ensure that Ireland's 
                    contribution to gaming culture is documented, preserved, and accessible to future generations.
                </p>
                <div class="flex gap-4 justify-center lg:justify-start mt-8">
                    <UrlButton url="#games" variant="primary">Explore Games</UrlButton>
                    <UrlButton url="#join" variant="secondary">Join Us</UrlButton>
                </div>
            </div>
            <div class="relative order-1 lg:order-none mb-20 lg:mt-0 lg:mb-0 lg:-mr-10">
                <div class="bg-amber-50 p-8 rounded-lg shadow-lg mb-6 border-4 border-white">
                    <h3 class="text-xl font-semibold text-purple-900 mb-4">Our Mission</h3>
                    <ul class="space-y-3 text-gray-600">
                        <li class="flex items-start">
                            <svg class="h-6 w-6 text-purple-900 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                            </svg>
                            Document and preserve Irish-made games
                        </li>
                        <li class="flex items-start">
                            <svg class="h-6 w-6 text-purple-900 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                            </svg>
                            Celebrate gaming history and culture
                        </li>
                        <li class="flex items-start">
                            <svg class="h-6 w-6 text-purple-900 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                            </svg>
                            Support game preservation efforts
                        </li>
                        <li class="flex items-start">
                            <svg class="h-6 w-6 text-purple-900 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                            </svg>
                            Build a community of enthusiasts
                        </li>
                    </ul>
                </div>
                <div class="-z-10 bg-purple-100 h-52 w-full sm:h-80 sm:w-full rounded-l-full absolute -right-28 md:-right-48 -bottom-8"></div>
            </div>
        </section>
    </div>
    <!-- Hero Section End -->
</template>
