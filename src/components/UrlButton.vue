<template>
  <a
    :href="url"
    class="inline-block px-6 py-2 rounded-lg font-semibold shadow transition
           focus:outline-none focus:ring-2 focus:ring-blue-400"
    :class="variantClass"
    target="_blank"
    rel="noopener noreferrer"
  >
    <slot />
  </a>
</template>

<script setup>
import { computed } from 'vue'

const props = defineProps({
  url: { type: String, required: true },
  variant: { type: String, default: 'primary' }
})

const variantClass = computed(() =>
  props.variant === 'secondary'
    ? 'bg-white text-blue-600 border border-blue-600 hover:bg-blue-50'
    : 'text-white bg-blue-600 hover:bg-blue-700'
)
</script>
