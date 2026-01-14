<template>
  <section id="database" class="py-16 bg-white dark:bg-gray-900">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="grid gap-10 lg:grid-cols-2">
        <div>
          <p class="text-sm uppercase tracking-widest text-green-600 dark:text-green-300">Irish Gaming Database</p>
          <h2 class="text-4xl md:text-5xl font-extrabold text-green-900 dark:text-green-300 mt-3">
            40 years of Irish creativity in one searchable archive
          </h2>
          <p class="text-lg text-gray-700 dark:text-white mt-4 leading-relaxed">
            The database contains titles released on home micros, consoles, PC, VR, and mobile by creators born in, based in, or collaborating with Irish studios. Every entry is manually verified and linked to preservation resources, interviews, and playable builds when available.
          </p>
          <div class="mt-6 p-4 bg-amber-50 dark:bg-amber-900/30 border-l-4 border-amber-400 dark:border-amber-600 rounded-r-lg">
            <p class="text-base text-gray-800 dark:text-white leading-relaxed">
              <strong class="text-amber-900 dark:text-amber-300">Note:</strong> This database is currently incomplete and represents a constantly evolving source of data. We're actively working to expand our coverage of Ireland's gaming heritage, and <strong>contributions are always welcome</strong>. If you have information about Irish-developed games, corrections to existing entries, or additional context to share, please reach out.
            </p>
          </div>

          <div class="mt-8 grid gap-5 sm:grid-cols-2">
            <div class="bg-green-50 dark:bg-gray-800 rounded-2xl border border-green-100 dark:border-gray-700 p-6 shadow-sm">
              <p class="text-3xl font-extrabold text-green-900 dark:text-green-300">100+</p>
              <p class="text-sm uppercase tracking-wide text-green-700 dark:text-green-300 mt-1">Titles catalogued</p>
              <p class="text-sm text-gray-600 dark:text-white mt-3">Growing weekly via community submissions and research partnerships.</p>
            </div>
            <div class="bg-green-50 dark:bg-gray-800 rounded-2xl border border-green-100 dark:border-gray-700 p-6 shadow-sm">
              <p class="text-3xl font-extrabold text-green-900 dark:text-green-300">45</p>
              <p class="text-sm uppercase tracking-wide text-green-700 dark:text-green-300 mt-1">Studios & teams</p>
              <p class="text-sm text-gray-600 dark:text-white mt-3">From solo indies to AAA support studios and middleware pioneers.</p>
            </div>
          </div>

          <div class="mt-8 text-sm text-gray-600 dark:text-white leading-relaxed">
            <p>Data points include: release date, platforms, genres, developers, publishers, review sentiment, availability, and preservation status.</p>
          </div>

          <div class="mt-6">
            <a href="#games" class="inline-flex items-center px-5 py-3 rounded-xl bg-green-700 dark:bg-green-600 text-white font-semibold hover:bg-green-600 dark:hover:bg-green-500 transition">
              Browse the live database →
            </a>
          </div>
        </div>

        <div class="bg-black dark:bg-gray-800 rounded-2xl text-white dark:text-white p-8 shadow-2xl border border-white/10 dark:border-gray-700">
          <h3 class="text-2xl font-bold mb-4">Submit or update an entry</h3>
          <p class="text-gray-100 dark:text-white leading-relaxed">
            Help keep the archive accurate by sharing release info, developer credits, download links, or personal stories from production.
          </p>
          <ul class="mt-5 space-y-3 text-gray-100 dark:text-white">
            <li>• Email <a href="mailto:cairde@tutamail.com" class="underline font-semibold">cairde@tutamail.com</a> with new titles or corrections.</li>
            <li>• Attach press kits, screenshots, or gameplay videos.</li>
            <li>• Include preservation-friendly builds where licensing allows.</li>
          </ul>

          <div class="mt-8">
            <p class="text-sm uppercase tracking-widest text-green-300">Coming Soon</p>
            <ul class="mt-3 space-y-2 text-gray-100 dark:text-white">
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

