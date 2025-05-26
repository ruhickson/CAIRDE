<script setup>
import { ref } from 'vue';

const props = defineProps({
    isOpen: {
        type: Boolean,
        required: true
    }
});

const qualifications = [
    {
        id: 1,
        title: "Education",
        items: [
            {
                degree: "M.Sc. in Data Analytics",
                institution: "Technological University of the Shannon",
                year: "2022",
                url: "https://www.tudublin.ie/courses/postgraduate/data-analytics-msc"
            },
            {
                degree: "Adv. Dip. in Data Protection Law",
                institution: "The Honorable Society of King's Inns",
                year: "2021",
                url: "https://www.kingsinns.ie/education/courses-open-to-lawyers-nonlawyers/advanced-diploma-in-data-protection-law"
            },
            {
                degree: "Professional Cert. in Artificaial Intelligence",
                institution: "Analytics Institute of Ireland",
                year: "2020",
                url: "https://analyticsinstitute.org/"
            },
            {
                degree: "B.Sc. in Mathematical Science",
                institution: "Dublin Institute of Technology",
                year: "2011",
                url: "https://www.tudublin.ie/explore/faculties-and-schools/computing-digital-data/mathematics-and-statistics/"
            }
        ]
    }
];
</script>

<template>
    <!-- Overlay -->
    <div v-if="isOpen" 
         class="fixed inset-0 bg-black bg-opacity-50 z-40 transition-opacity"
         @click="$emit('close')">
    </div>

    <!-- Sidebar -->
    <div :class="[
        'fixed top-0 left-0 h-full w-80 bg-white shadow-lg z-50 transform transition-transform duration-300 ease-in-out',
        isOpen ? 'translate-x-0' : '-translate-x-full'
    ]">
        <div class="p-6">
            <div class="flex justify-between items-center mb-6">
                <h2 class="text-2xl font-theme-heading font-semibold">Qualifications</h2>
                <button @click="$emit('close')" class="text-gray-500 hover:text-gray-700">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                </button>
            </div>

            <div class="space-y-8">
                <div v-for="section in qualifications" :key="section.id">
                    <h3 class="text-xl font-theme-heading font-medium mb-4">{{ section.title }}</h3>
                    <div class="space-y-4">
                        <div v-for="(item, index) in section.items" :key="index" 
                             class="bg-gray-50 p-4 rounded-lg">
                            <h4 class="font-theme-heading font-medium">
                                <a
                                  v-if="item.url"
                                  :href="item.url"
                                  target="_blank"
                                  rel="noopener"
                                  class="text-blue-600 underline hover:text-blue-800 transition"
                                >
                                  {{ item.degree }}
                                </a>
                                <span v-else>
                                  {{ item.degree }}
                                </span>
                            </h4>
                            <p class="text-gray-600">{{ item.institution }}</p>
                            <p class="text-gray-500 text-sm">{{ item.year }}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>