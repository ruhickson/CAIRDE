<template>
  <section id="database" class="py-16 bg-white">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="grid gap-10 lg:grid-cols-2">
        <div>
          <p class="text-sm uppercase tracking-widest text-green-600">Irish Gaming Database</p>
          <h2 class="text-4xl md:text-5xl font-extrabold text-green-900 mt-3">
            40 years of Irish creativity in one searchable archive
          </h2>
          <p class="text-lg text-gray-700 mt-4 leading-relaxed">
            The database contains titles released on home micros, consoles, PC, VR, and mobile by creators born in, based in, or collaborating with Irish studios. Every entry is manually verified and linked to preservation resources, interviews, and playable builds when available.
          </p>

          <div class="mt-8 grid gap-5 sm:grid-cols-2">
            <div class="bg-green-50 rounded-2xl border border-green-100 p-6 shadow-sm">
              <p class="text-3xl font-extrabold text-green-900">100+</p>
              <p class="text-sm uppercase tracking-wide text-green-700 mt-1">Titles catalogued</p>
              <p class="text-sm text-gray-600 mt-3">Growing weekly via community submissions and research partnerships.</p>
            </div>
            <div class="bg-green-50 rounded-2xl border border-green-100 p-6 shadow-sm">
              <p class="text-3xl font-extrabold text-green-900">45</p>
              <p class="text-sm uppercase tracking-wide text-green-700 mt-1">Studios & teams</p>
              <p class="text-sm text-gray-600 mt-3">From solo indies to AAA support studios and middleware pioneers.</p>
            </div>
          </div>

          <div class="mt-8 text-sm text-gray-600 leading-relaxed">
            <p>Data points include: release date, platforms, genres, developers, publishers, review sentiment, availability, and preservation status.</p>
          </div>

          <div class="mt-6">
            <a href="#games" class="inline-flex items-center px-5 py-3 rounded-xl bg-green-700 text-white font-semibold hover:bg-green-600 transition">
              Browse the live database →
            </a>
          </div>
        </div>

        <div class="bg-black rounded-2xl text-white p-8 shadow-2xl border border-white/10">
          <h3 class="text-2xl font-bold mb-4">Submit or update an entry</h3>
          <p class="text-gray-100 leading-relaxed">
            Help keep the archive accurate by sharing release info, developer credits, download links, or personal stories from production.
          </p>
          <ul class="mt-5 space-y-3 text-gray-100">
            <li>• Email <a href="mailto:cairde@tutamail.com" class="underline font-semibold">cairde@tutamail.com</a> with new titles or corrections.</li>
            <li>• Attach press kits, screenshots, or gameplay videos.</li>
            <li>• Include preservation-friendly builds where licensing allows.</li>
          </ul>

          <div class="mt-8">
            <p class="text-sm uppercase tracking-widest text-green-300">Coming Soon</p>
            <ul class="mt-3 space-y-2 text-gray-100">
              <li>• Public API for research projects.</li>
              <li>• CSV/JSON export for academic use.</li>
              <li>• Metadata tags for accessibility & localization.</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

