<script setup>
import { reactive, ref } from 'vue'

const form = reactive({
  name: '',
  email: '',
  subject: '',
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
    data.append('form-name', 'contact-legacy')
    Object.keys(form).forEach((key) => data.append(key, form[key] || ''))

    await fetch('/', {
      method: 'POST',
      body: data
    })

    submitMessage.value = 'Thanks! We’ll respond within a few days.'
    Object.keys(form).forEach((key) => (form[key] = ''))
  } catch (err) {
    submitError.value = 'Unable to send right now. Please try later.'
  } finally {
    submitting.value = false
  }
}
</script>

<template>
  <section class="py-16 bg-white">
    <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="mb-10 text-center">
        <p class="text-sm uppercase tracking-widest text-green-600">Contact CAIRDE</p>
        <h2 class="text-4xl md:text-5xl font-extrabold text-green-900 mt-3">Send us a message</h2>
        <p class="text-lg text-gray-600 mt-4">
          Questions, corrections, contributions, or collaboration ideas? Drop us a line and we’ll get back to you.
        </p>
      </div>

      <div class="bg-green-50 rounded-2xl border border-green-100 p-8 shadow-sm">
        <form
          class="space-y-6"
          name="contact-legacy"
          method="POST"
          data-netlify="true"
          netlify-honeypot="bot-field"
          @submit.prevent="handleSubmit"
        >
          <input type="hidden" name="form-name" value="contact-legacy" />
          <p class="hidden">
            <label>Don’t fill this out if you're human: <input name="bot-field" /></label>
          </p>
          <div>
            <label class="block text-sm font-semibold text-green-900 mb-1">Your Name</label>
            <input v-model="form.name" name="name" type="text" class="w-full rounded-xl border border-green-200 px-4 py-3 focus:ring-2 focus:ring-green-500 focus:border-green-500" placeholder="Aine Devlin" />
          </div>

          <div>
            <label class="block text-sm font-semibold text-green-900 mb-1">Email Address *</label>
            <input v-model="form.email" name="email" type="email" required class="w-full rounded-xl border border-green-200 px-4 py-3 focus:ring-2 focus:ring-green-500 focus:border-green-500" placeholder="you@example.com" />
          </div>

          <div>
            <label class="block text-sm font-semibold text-green-900 mb-1">Subject</label>
            <input v-model="form.subject" name="subject" type="text" class="w-full rounded-xl border border-green-200 px-4 py-3 focus:ring-2 focus:ring-green-500 focus:border-green-500" placeholder="New archive submission" />
          </div>

          <div>
            <label class="block text-sm font-semibold text-green-900 mb-1">Message *</label>
            <textarea v-model="form.message" name="message" required rows="6" class="w-full rounded-xl border border-green-200 px-4 py-3 focus:ring-2 focus:ring-green-500 focus:border-green-500" placeholder="Tell us about your project, event, or collection…"></textarea>
          </div>

          <div class="flex flex-wrap items-center justify-between gap-4">
            <p class="text-sm text-gray-500">
              <span v-if="submitMessage" class="text-green-700 font-semibold">{{ submitMessage }}</span>
              <span v-else-if="submitError" class="text-red-600 font-semibold">{{ submitError }}</span>
              <span v-else>We’ll respond within 3–5 working days.</span>
            </p>
            <button
              type="submit"
              :disabled="submitting"
              class="inline-flex items-center px-6 py-3 rounded-full bg-green-700 text-white font-semibold hover:bg-green-600 transition disabled:opacity-60 disabled:cursor-not-allowed"
            >
              {{ submitting ? 'Sending…' : 'Send Message' }}
            </button>
          </div>
        </form>
      </div>
    </div>
  </section>
</template>

