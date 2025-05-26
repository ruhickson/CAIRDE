<script setup>
import UrlButton from '../components/UrlButton.vue'
</script>

<template>
    <!-- Hero Section Start -->
    <div class="container mx-auto px-5 overflow-x-hidden lg:overflow-x-visible">
        <section class="grid grid-cols-none lg:grid-cols-2 pb-16 pt-8 items-center">
            <div class="lg:w-5/6 order-2 lg:order-none">
                <h1 class="text-4xl xl:text-5xl font-bold font-theme-heading text-center lg:text-left">Ru Hickson</h1>
                <p class="lg:text-xl mt-10 font-theme-content text-theme-grayish-blue text-center lg:text-left">Veteran data analyst, engineer, and product manager with over 10 years' 
experience in most technical skillsets, languages, and tools. Career interests 
are in video games, cryptocurrency, and  artificial intelligence.</p>
<br />
                <div class="flex gap-4 justify-center">
                    <UrlButton url="https://linkedin.com/in/ruhickson" variant="primary">LinkedIn</UrlButton>
                    <UrlButton url="https://github.com/ruhickson" variant="secondary">GitHub</UrlButton>
                </div>
            </div>
            <div class="relative order-1 lg:order-none mb-20 lg:mt-0 lg:mb-0 lg:-mr-10">
                <img
                    src="../assets/images/ru.png"
                    alt="Analytics dashboard"
                    class="w-48 h-64 rounded-full shadow-lg mb-6 border-4 border-white"
                />
                <div class="-z-10 bg-theme-primary h-52 w-full sm:h-80 sm:w-full rounded-l-full absolute -right-28 md:-right-48 -bottom-8"></div>
            </div>
        </section>
    </div>
    <!-- Hero Section End -->
</template>
