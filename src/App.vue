<script setup>
import { useRouter, useRoute } from 'vue-router'

const router = useRouter()
const route = useRoute()

const handleMobileNav = (event) => {
  const path = event.target.value
  if (path && path !== route.path) {
    router.push(path)
  }
}
</script>

<template>
  <div class="min-h-screen bg-green-50">
    <header class="shadow-sm border-b border-green-100 bg-white">
      <nav class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div class="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <div>
            <h1 class="text-4xl md:text-5xl font-extrabold flex items-center gap-3 text-green-800">
              <i class="fas fa-gamepad text-green-700 text-3xl md:text-4xl"></i>
              CAIRDE
            </h1>
            <p class="mt-2 text-lg md:text-xl text-gray-700">
              Cultural Archive for Irish Representation in Digital Entertainment
            </p>
          </div>

          <div class="hidden md:flex items-center gap-6 text-sm font-semibold uppercase tracking-wide text-green-900">
            <RouterLink to="/" class="hover:text-green-500 transition">Home</RouterLink>
            <RouterLink to="/about" class="hover:text-green-500 transition">About</RouterLink>
            <RouterLink to="/mission" class="hover:text-green-500 transition">Mission</RouterLink>
            <RouterLink to="/history" class="hover:text-green-500 transition">History</RouterLink>
            <RouterLink to="/database" class="hover:text-green-500 transition">Database</RouterLink>
            <RouterLink
              to="/get-involved"
              class="px-5 py-2 rounded-full border-2 border-green-800 text-green-800 hover:bg-green-800 hover:text-white transition font-bold"
            >
              Get Involved
            </RouterLink>
          </div>
        </div>
      </nav>

      <div class="md:hidden px-4 pb-4">
        <select
          class="w-full rounded-xl border border-green-200 px-4 py-3 text-green-900"
          :value="route.path"
          @change="handleMobileNav"
        >
          <option value="/">Home</option>
          <option value="/about">About</option>
          <option value="/mission">Mission</option>
          <option value="/history">Irish Gaming History</option>
          <option value="/database">Irish Gaming Database</option>
          <option value="/get-involved">Get Involved</option>
        </select>
      </div>
    </header>

    <main>
      <RouterView />
    </main>

    <footer class="py-8 bg-green-800 text-white">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 class="text-lg font-semibold mb-4">About CAIRDE</h3>
            <p>Dedicated to preserving and celebrating Ireland's video game heritage.</p>
          </div>
          <div>
            <h3 class="text-lg font-semibold mb-4">Contact</h3>
            <p>Email: cairde@tutamail.com</p>
          </div>
          <div>
            <h3 class="text-lg font-semibold mb-4">Follow Us</h3>
            <div class="flex space-x-4">
              <a href="#" class="text-green-100 hover:text-white">Twitter</a>
              <a href="#" class="text-green-100 hover:text-white">Discord</a>
              <a href="#" class="text-green-100 hover:text-white">GitHub</a>
            </div>
          </div>
        </div>
        <div class="mt-8 pt-8 border-t border-green-700 text-center text-green-100">
          <p>&copy; {{ new Date().getFullYear() }} CAIRDE. All rights reserved.</p>
        </div>
      </div>
    </footer>
    <!-- Hidden Netlify forms so static build detects them -->
    <div class="hidden">
      <form name="contact" data-netlify="true" netlify-honeypot="bot-field">
        <input type="text" name="name" />
        <input type="email" name="email" />
        <input type="text" name="subject" />
        <textarea name="message"></textarea>
      </form>
      <form name="get-involved" data-netlify="true" netlify-honeypot="bot-field">
        <input type="text" name="name" />
        <input type="email" name="email" />
        <input type="text" name="interest" />
        <textarea name="message"></textarea>
      </form>
      <form name="contact-legacy" data-netlify="true" netlify-honeypot="bot-field">
        <input type="text" name="name" />
        <input type="email" name="email" />
        <input type="text" name="subject" />
        <textarea name="message"></textarea>
      </form>
    </div>
  </div>
</template>

<style scoped></style>
