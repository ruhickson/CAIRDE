<template>
  <div>
    <section class="py-16 bg-green-50 dark:bg-gray-900">
      <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-10">
          <p class="text-sm uppercase tracking-widest text-green-600 dark:text-green-300">Our Mission</p>
          <h1 class="text-4xl md:text-5xl font-extrabold text-green-900 dark:text-green-300 mt-3">Building Ireland's Living Games Archive</h1>
          <p class="text-lg text-gray-700 dark:text-white mt-4 leading-relaxed">
            CAIRDE's mission is to create a permanent, evolving archive that celebrates Ireland's cultural heritage in video games.
            We safeguard every playable artifact we can find, document the stories of the people who made them,
            and make the collection accessible so current and future generations can experience Ireland's contribution to interactive art.
          </p>
        </div>

        <div class="grid gap-10 lg:grid-cols-2 items-center">
          <div class="space-y-5 text-base text-gray-700 dark:text-white leading-relaxed">
            <p>
              The archive grows through collaboration with studios, collectors, and academia. Preservation work spans digitising source
              material, repairing classic hardware, and maintaining a trusted catalogue of metadata that historians, journalists, and fans can rely on.
            </p>
            <p>
              We aim to be both a repository and a launchpad: a place where games are stored safely, and a platform that champions new Irish voices
              eager to tell their own stories.
            </p>
            <ul class="space-y-2 text-green-800 dark:text-green-300 font-semibold list-none">
              <li>• Preserve every Irish-developed game in playable form.</li>
              <li>• Share research openly so creators and scholars can build on it.</li>
              <li>• Celebrate the people behind the games through interviews and events.</li>
            </ul>

            <div class="pt-4 space-y-4">
              <p>
                The roadmap graphic on the right visualises the sequence of work CAIRDE is pursuing through the end of 2026. Each milestone band aligns with
                the narrative below, showing how we move from digital infrastructure to public engagement and, ultimately, a playable museum space.
              </p>
              <p>
                We’re actively seeking new collaborators, donors, and volunteers. Whether you have an obscure build, archival experience, or simply a passion for Irish games,
                your contribution can accelerate the mission.
              </p>
              <RouterLink
                to="/get-involved"
                class="inline-flex items-center px-6 py-3 rounded-full bg-green-700 dark:bg-green-600 text-white font-semibold hover:bg-green-600 dark:hover:bg-green-500 transition"
              >
                Join the Mission
              </RouterLink>
            </div>
          </div>

          <div class="flex justify-center">
            <img
              src="https://i.imgur.com/sqSjtKR.jpg"
              alt="Roadmap showing CAIRDE milestones through 2026"
              class="max-w-full rounded-3xl shadow-xl border border-white dark:border-gray-800"
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </section>

    <section class="py-20 bg-white dark:bg-gray-900">
      <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        <div class="text-center">
          <p class="text-sm uppercase tracking-widest text-green-600 dark:text-green-300">Roadmap</p>
          <h2 class="text-3xl md:text-4xl font-extrabold text-green-900 dark:text-green-300 mt-3">Completed & Upcoming Milestones</h2>
          <p class="text-lg text-gray-700 dark:text-white mt-4">
            We separate completed achievements from works in progress so supporters can see the momentum behind CAIRDE's growing archive.
          </p>
        </div>

        <div>
          <h3 class="text-2xl font-bold text-green-900 dark:text-green-300 mb-6 text-center">Completed Milestones</h3>
          <div class="space-y-8">
            <article class="bg-emerald-50 dark:bg-emerald-900/30 border border-emerald-200 dark:border-emerald-800 rounded-2xl p-6 shadow-sm">
              <p class="text-xs uppercase tracking-[0.3em] text-emerald-700 dark:text-emerald-300 mb-2">Completed: Q3 2025</p>
              <h4 class="text-2xl font-semibold text-emerald-900 dark:text-emerald-300 mb-4">Launch Website</h4>
              <p class="text-gray-700 dark:text-white leading-relaxed mb-3">
                The public launch in Q3 2025 marked CAIRDE’s transition from research project to living archive. The site now showcases playable collections, preservation updates, and submission pathways, giving Irish developers a permanent home for their work.
              </p>
              <p class="text-gray-700 dark:text-white leading-relaxed mb-3">
                Launch week included outreach to every Irish studio we could track down, along with libraries and academic partners who can benefit from the data. We also published our metadata standards so others can align with CAIRDE's cataloguing practices.
              </p>
              <p class="text-gray-700 dark:text-white leading-relaxed">
                With the website live, we have a channel for newsletters, oral history highlights, and event registration. The launch milestone lays the foundation for future fundraising and collaborations.
              </p>
            </article>

            <article class="bg-emerald-50 dark:bg-emerald-900/30 border border-emerald-200 dark:border-emerald-800 rounded-2xl p-6 shadow-sm">
              <p class="text-xs uppercase tracking-[0.3em] text-emerald-700 dark:text-emerald-300 mb-2">Completed: Q3 2025</p>
              <h4 class="text-2xl font-semibold text-emerald-900 dark:text-emerald-300 mb-4">Build Digital Archive</h4>
              <p class="text-gray-700 dark:text-white leading-relaxed mb-3">
                Formerly called "Complete Playable Collection," this milestone represents the migration of every verified title into CAIRDE's digital repository. We standardised ingest workflows, set up redundant backups, and documented hardware requirements for each build.
              </p>
              <p class="text-gray-700 dark:text-white leading-relaxed mb-3">
                The digital archive now houses metadata, documentation scans, and checksums for preserved files. We also mapped relationships between titles, studios, and contributors, enabling richer discovery and research.
              </p>
              <p class="text-gray-700 dark:text-white leading-relaxed">
                Completion doesn't mean we stop collecting; it means the core infrastructure is ready, and new submissions flow into an established system rather than a prototype spreadsheet.
              </p>
            </article>
          </div>
        </div>

        <div>
          <h3 class="text-2xl font-bold text-green-900 dark:text-green-300 mb-6 text-center">Upcoming Milestones</h3>
          <div class="space-y-8">
            <article class="bg-green-50 dark:bg-green-900/30 border border-green-100 dark:border-green-800 rounded-2xl p-6 shadow-sm">
              <p class="text-xs uppercase tracking-[0.3em] text-green-600 dark:text-green-300 mb-2">Target: Q2 2026</p>
              <h4 class="text-2xl font-semibold text-green-900 dark:text-green-300 mb-4">Bi-Monthly Celebration Events</h4>
              <p class="text-gray-700 dark:text-white leading-relaxed mb-3">
                By the close of Q2 2026 we will pilot six events per year, rotating across Ireland and supported by online streaming. Each event pairs playable archives with developer talks, ensuring that preservation feels interactive rather than static.
              </p>
              <p class="text-gray-700 dark:text-white leading-relaxed mb-3">
                We are coordinating with venues in Dublin and Galway to test multimedia installations, while detailing volunteer playbooks so local hosts can replicate the format. Panel recordings and attendee submissions funnel back into the archive.
              </p>
              <p class="text-gray-700 dark:text-white leading-relaxed">
                These events double as intake sessions. Visitors can schedule time with conservators to digitise rare materials, creating a loop where celebration feeds preservation.
              </p>
            </article>

            <article class="bg-green-50 dark:bg-green-900/30 border border-green-100 dark:border-green-800 rounded-2xl p-6 shadow-sm">
              <p class="text-xs uppercase tracking-[0.3em] text-green-600 dark:text-green-300 mb-2">Target: Q2 2026</p>
              <h4 class="text-2xl font-semibold text-green-900 dark:text-green-300 mb-4">Developer Oral History Project</h4>
              <p class="text-gray-700 dark:text-white leading-relaxed mb-3">
                Now slated for Q2 2026, the oral history initiative will publish its first collection of interviews. We'll release a curated anthology featuring transcripts, audio excerpts, and contextual essays that situate each conversation within Ireland's wider game heritage.
              </p>
              <p class="text-gray-700 dark:text-white leading-relaxed mb-3">
                Data from these interviews will tag thematic elements—funding challenges, localisation practices, pipeline tools—so researchers can cross-reference quotes with specific games or time periods.
              </p>
              <p class="text-gray-700 dark:text-white leading-relaxed">
                By shifting the launch one quarter, we give ourselves time to complete ethics approvals, secure consent for public release, and build a search interface tailored to oral history content.
              </p>
            </article>

            <article class="bg-green-50 dark:bg-green-900/30 border border-green-100 dark:border-green-800 rounded-2xl p-6 shadow-sm">
              <p class="text-xs uppercase tracking-[0.3em] text-green-600 dark:text-green-300 mb-2">Target: Q3 2026</p>
              <h4 class="text-2xl font-semibold text-green-900 dark:text-green-300 mb-4">Sustainable Funding</h4>
              <p class="text-gray-700 dark:text-white leading-relaxed mb-3">
                Moving the funding milestone to Q3 2026 aligns it with upcoming grant cycles. We're preparing proposals for relevant government agencies, while developing sponsorship packages tailored to Irish tech companies invested in cultural heritage.
              </p>
              <p class="text-gray-700 dark:text-white leading-relaxed mb-3">
                The plan includes launching a membership programme with tiered benefits, giving individuals and alumni networks a way to support CAIRDE. Revenue projections are tied to specific outcomes such as hardware acquisitions and event underwriting.
              </p>
              <p class="text-gray-700 dark:text-white leading-relaxed">
                Formalising multi-year support in Q3 ensures we can hire dedicated roles before museum construction ramps up, preventing burnout and ensuring continuity for volunteers.
              </p>
            </article>

            <article class="bg-green-50 dark:bg-green-900/30 border border-green-100 dark:border-green-800 rounded-2xl p-6 shadow-sm">
              <p class="text-xs uppercase tracking-[0.3em] text-green-600 dark:text-green-300 mb-2">Target: Q4 2026</p>
              <h4 class="text-2xl font-semibold text-green-900 dark:text-green-300 mb-4">Playable Museum Premises</h4>
              <p class="text-gray-700 dark:text-white leading-relaxed mb-3">
                We have pushed the museum milestone to Q4 2026 to allow for thorough site assessments and funding alignment. This revised timeline gives us space to negotiate leases, secure planning permissions, and coordinate with accessibility consultants.
              </p>
              <p class="text-gray-700 dark:text-white leading-relaxed mb-3">
                Concept designs now include modular exhibits that can be refreshed quarterly, ensuring repeat visitors see new narratives. We're also planning a conservation lab and recording booth so oral histories can continue on-site.
              </p>
              <p class="text-gray-700 dark:text-white leading-relaxed">
                The extended schedule doesn't slow momentum; it simply recognises that a public museum demands rigorous preparation. By Q1 2027 we intend to open doors with confidence, backed by community input and sustainable operations.
              </p>
            </article>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

