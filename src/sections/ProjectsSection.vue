<script setup>
import projects from "../data/projects";
</script>

<template>
    <!-- Projects Section Start -->
    <div id="projects" class="container mx-auto px-5 md:w-4/5">
        <section class="py-16 pt-18">
            <div class="w-4/5 md:w-3/5 mx-auto">
                <h2 class="text-3xl md:text-4xl font-theme-heading font-medium text-center">Active Projects</h2>
                <p class="text-theme-grayish-blue text-center text-lg font-theme-content mt-7">Here are a few projects I've been working on of late. Come check them out!</p>
            </div>
            <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
                <div v-for="(project, index) in projects" :key="project.id" :class="[index === 0 ? 'lg:mb-10' : '', index === 1 ? 'lg:mt-10' : '', index === 2 ? 'lg:mt-20 lg:-mb-10' : '']" class="shadow-lg rounded-lg">
                    <div class="flex justify-center mt-12">
                        <img :src="project.icon" alt="Browser Logo" />
                    </div>
                    <h3 class="text-2xl font-theme-heading font-medium text-center mt-6">{{ project.title }}</h3>
                    <p class="text-md font-theme-content text-theme-grayish-blue text-center mt-3">{{ project.subTitle }}</p>
                    <div class="my-7">
                        <img class="w-full" src="../assets/images/bg-dots.svg" alt="Dot Backaground" />
                    </div>
                    <div class="flex justify-center mb-8">
                        <LinkButton btn-type="primary" :link="project.link" class="text-sm">Check it out!</LinkButton>
                    </div>
                </div>
            </div>
        </section>
    </div>
    <!-- Projects Section End -->
</template>
