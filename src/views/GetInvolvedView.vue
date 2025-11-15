<script setup>
import { reactive, ref } from 'vue'

const form = reactive({
  name: '',
  email: '',
  interest: '',
  message: ''
})

const submitting = ref(false)
const submitMessage = ref('')
const submitError = ref('')

const handleSubmit = async () => {
  submitting.value = true
  submitMessage.value = ''
  submitError.value = ''

  try {
    const data = new FormData()
    data.append('form-name', 'get-involved')
    Object.keys(form).forEach((key) => data.append(key, form[key] || ''))

    await fetch('/', {
      method: 'POST',
      body: data
    })

    submitMessage.value = 'Thanks for raising your hand—we’ll send onboarding details soon.'
    Object.keys(form).forEach((key) => (form[key] = ''))
  } catch (err) {
    submitError.value = 'Unable to send right now. Please try again shortly.'
  } finally {
    submitting.value = false
  }
}
</script>

<template>
  <section class="py-16 bg-green-50">
    <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="mb-12 text-center">
        <p class="text-sm uppercase tracking-widest text-green-600">Get Involved</p>
        <h1 class="text-4xl md:text-5xl font-extrabold text-green-900 mt-3">Help grow Ireland’s gaming archive</h1>
        <p class="text-lg text-gray-700 mt-4 max-w-3xl mx-auto leading-relaxed">
          Whether you’re a developer, researcher, collector, or fan, CAIRDE relies on volunteers to uncover, preserve, and share Irish-made games.
        </p>
      </div>

      <div class="grid gap-8 md:grid-cols-2">
        <div class="bg-white rounded-2xl border border-green-100 p-8 shadow-sm">
          <h2 class="text-2xl font-bold text-green-900 mb-4">Ways to contribute</h2>
          <ul class="space-y-4 text-gray-700 text-base leading-relaxed">
            <li>• Research missing titles, studios, or release dates and document your findings.</li>
            <li>• Donate or digitise artefacts: code repositories, box art, manuals, marketing materials.</li>
            <li>• Interview veteran developers and share oral histories or behind-the-scenes stories.</li>
            <li>• Advise on legal/licensing questions around archiving and public exhibition.</li>
            <li>• Host preservation meetups, game jams, or exhibitions in your region.</li>
          </ul>
          <p class="mt-6 text-sm text-gray-500">
            Partners welcome: museums, libraries, schools, esports orgs, community labs, and indie collectives.
          </p>
        </div>

        <div class="bg-white rounded-2xl border border-green-100 p-8 shadow-sm">
          <h2 class="text-2xl font-bold text-green-900 mb-4">Tell us about you</h2>
          <form
            class="space-y-5"
            name="get-involved"
            method="POST"
            data-netlify="true"
            netlify-honeypot="bot-field"
            @submit.prevent="handleSubmit"
          >
            <input type="hidden" name="form-name" value="get-involved" />
            <p class="hidden">
              <label>Don’t fill this out if you're human: <input name="bot-field" /></label>
            </p>
            <div>
              <label class="block text-sm font-semibold text-green-900 mb-1">Name *</label>
              <input v-model="form.name" name="name" required type="text" class="w-full rounded-xl border border-green-200 px-4 py-3 focus:ring-2 focus:ring-green-500 focus:border-green-500" placeholder="Eimear Murphy" />
            </div>
            <div>
              <label class="block text-sm font-semibold text-green-900 mb-1">Email *</label>
              <input v-model="form.email" name="email" required type="email" class="w-full rounded-xl border border-green-200 px-4 py-3 focus:ring-2 focus:ring-green-500 focus:border-green-500" placeholder="you@example.com" />
            </div>
            <div>
              <label class="block text-sm font-semibold text-green-900 mb-1">Focus area</label>
              <input
                v-model="form.interest"
                name="interest"
                type="text"
                class="w-full rounded-xl border border-green-200 px-4 py-3 focus:ring-2 focus:ring-green-500 focus:border-green-500"
                placeholder="Research, events, technical preservation, etc."
              />
            </div>
            <div>
              <label class="block text-sm font-semibold text-green-900 mb-1">How would you like to help? *</label>
              <textarea v-model="form.message" name="message" required rows="5" class="w-full rounded-xl border border-green-200 px-4 py-3 focus:ring-2 focus:ring-green-500 focus:border-green-500" placeholder="Share your skills, project ideas, or collection..."></textarea>
            </div>
            <div class="flex flex-wrap items-center justify-between gap-3">
              <p class="text-sm text-gray-500">
                <span v-if="submitMessage" class="text-green-700 font-semibold">{{ submitMessage }}</span>
                <span v-else-if="submitError" class="text-red-600 font-semibold">{{ submitError }}</span>
                <span v-else>We’ll reply with onboarding steps within a week.</span>
              </p>
              <button
                type="submit"
                :disabled="submitting"
                class="inline-flex items-center px-5 py-3 rounded-full bg-green-700 text-white font-semibold hover:bg-green-600 transition disabled:opacity-60 disabled:cursor-not-allowed"
              >
                {{ submitting ? 'Submitting…' : 'Submit interest' }}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </section>
</template>

