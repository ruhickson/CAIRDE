<script setup>

import skills from '../data/skills.js';
import { ref } from 'vue';
import UrlButton from '../components/UrlButton.vue';

let isOpen = ref(1);

</script>

<template>
    <!-- skills Section Start -->
    <div id="skills" class="container mx-auto px-5">
        <section class="py-16">
            <div class="w-4/5 md:w-3/5 mx-auto">
                <h2 class="text-3xl md:text-4xl font-semibold font-theme-heading text-center">Skills</h2>
                <p class="text-theme-grayish-blue text-center mt-7 font-theme-content text-lg">SAS, SQL, R, Python, Shiny, Tableau, PowerBI, AWS, Azure, GCP, Visualization, Leadership, 
                    JIRA, Atlassian, Confluence, MS Office, Public Speaking, Heroku, Matlab, Java, Powershell, 
                    Teradata, Visual Studio, Spark, Pig, Hive, Looker</p>
            </div>

            <div class="mt-10">
                <ul class="flex flex-col items-center md:flex-row justify-center font-theme-heading">
                    <li v-for="skill in skills" :key="skill.id" :class="isOpen === skill.id ? 'md:border-b-4 md:border-theme-secondary' : ''" class="w-full md:w-56 cursor-pointer hover:text-theme-secondary transition duration-200 border-b-2 border-t-2 md:border-t-0 flex justify-center">
                        <a @click.prevent="isOpen = skill.id" href="#" :class="isOpen === skill.id ? ' border-theme-secondary' : ''" class="py-5  md:border-b-0 border-b-4">{{ skill.name }}</a>
                    </li>
                </ul>
            </div>

            <div class="mt-16">
                <!-- Tab Content -->
                <template v-for="skill in skills" :key="skill.id">
                    <div v-show="isOpen === skill.id" class="grid gap-32 lg:grid-cols-2 items-center">
                        <div class="relative">
                            <img class="z-10 w-full" :src="skill.details.imageUrl" />
                            <div class="-z-10 bg-theme-primary h-52 w-96 sm:h-80 sm:w-full rounded-r-full absolute -left-56 -bottom-16"></div>
                        </div>
                        <div>
                            <h3 class="font-theme-heading text-2xl md:text-3xl font-medium text-center lg:text-left">{{ skill.details.title }}</h3>
                            <p class="mt-7 font-theme-content text-lg text-theme-grayish-blue text-center lg:text-left">{{ skill.details.description }}</p>
                            <div class="flex justify-center lg:justify-start mt-7">
                                <UrlButton :url="skill.details.link">More Info</UrlButton>
                            </div>
                        </div>
                    </div>
                </template>
                <!-- Tab Content -->
            </div>
        </section>
    </div>
    <!-- skills Section End -->
</template>
