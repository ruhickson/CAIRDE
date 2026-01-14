<script setup>
import projects from "../data/projects";
</script>

<template>
    <!-- Projects Section Start -->
    <div id="projects" class="container mx-auto px-5 md:w-4/5">
        <section class="py-16 pt-18">
            <div class="w-4/5 md:w-3/5 mx-auto">
                <h2 class="text-3xl md:text-4xl font-theme-heading font-medium text-center dark:text-green-300">Active Projects</h2>
                <p class="text-theme-grayish-blue dark:text-white text-center text-lg font-theme-content mt-7">Here are our current initiatives to preserve and celebrate Irish gaming history.</p>
            </div>
            <div class="relative">
                <div class="absolute inset-0 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] dark:bg-[radial-gradient(#374151_1px,transparent_1px)] [background-size:16px_16px] opacity-50"></div>
                <div class="relative">
                    <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
                        <div v-for="(project, index) in projects" :key="project.id" :class="[index === 0 ? 'lg:mb-10' : '', index === 1 ? 'lg:mt-10' : '', index === 2 ? 'lg:mt-20 lg:-mb-10' : '']" class="shadow-lg rounded-lg bg-white dark:bg-gray-800 p-6 border border-gray-200 dark:border-gray-700">
                            <h3 class="text-2xl font-theme-heading font-medium text-center mt-6 dark:text-green-300">{{ project.title }}</h3>
                            <p class="text-md font-theme-content text-theme-grayish-blue dark:text-white text-center mt-3">{{ project.description }}</p>
                            <div class="flex justify-center mb-8 mt-6">
                                <LinkButton btn-type="primary" :link="project.link" class="text-sm">Learn More</LinkButton>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </div>
    <!-- Projects Section End -->
</template>
