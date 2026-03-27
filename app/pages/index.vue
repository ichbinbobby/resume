<template>
  <div class="min-h-screen bg-background">
    <UContainer class="py-8 px-6">
      <div class="flex justify-between items-center">
        <div>
          <h1 class="text-primary text-4xl mt-4">{{ $t('title') }}</h1>
        </div>

        <div class="flex items-center gap-2">
          <UTooltip :text="$t('tooltips.downloadPdf')">
            <UButton
              icon="i-lucide-download"
              color="primary"
              variant="subtle"
              :loading="isGeneratingPdf"
              @click="downloadPdf"
            />
          </UTooltip>

          <UTooltip :text="$t('tooltips.toggleDarkMode')">
            <UButton
              :icon="$colorMode.value === 'dark' ? 'i-lucide-sun' : 'i-lucide-moon'"
              color="neutral"
              variant="subtle"
              @click="$colorMode.preference = $colorMode.value === 'dark' ? 'light' : 'dark'"
            />
          </UTooltip>

          <UButton
            color="neutral"
            variant="subtle"
            :label="locale === 'en' ? 'DE' : 'EN'"
            @click="setLocale(locale === 'en' ? 'de' : 'en')"
          />
        </div>
      </div>

      <UBreadcrumb class="mt-2" :items="contactData">
        <template #separator>
          <span class="mx-2 text-muted" />
        </template>
      </UBreadcrumb>

      <UCard class="mt-6 resume-card">
        <template #header>
          <div class="flex justify-between items-center">
            <span class="text-secondary text-lg">{{ $t('sections.summary') }}</span>

            <div class="flex items-center gap-2">
              <UTooltip :text="$t('tooltips.githubProfile')">
                <UButton icon="i-simple-icons-github" color="neutral" target="_blank" to="https://github.com/ichbinbobby" variant="subtle" />
              </UTooltip>
              <UTooltip :text="$t('tooltips.linkedinProfile')">
                <UButton icon="i-simple-icons-linkedin" color="neutral" target="_blank" to="https://www.linkedin.com/in/ichbinbobby/" variant="subtle" />
              </UTooltip>
            </div>
          </div>
        </template>

        <p>{{ $t('summary') }}</p>
      </UCard>

      <UCard class="mt-6 resume-card">
        <template #header>
          <span class="text-secondary text-lg">{{ $t('sections.skills') }}</span>
        </template>

        <div class="grid grid-cols-5 gap-3">
          <div class="flex items-center gap-2">
            <UIcon name="i-simple-icons-html5" class="size-5 text-orange-500 shrink-0" />
            <span class="text-muted">HTML5</span>
          </div>
          <div class="flex items-center gap-2">
            <UIcon name="i-simple-icons-css3" class="size-5 text-blue-500 shrink-0" />
            <span class="text-muted">CSS3</span>
          </div>
          <div class="flex items-center gap-2">
            <UIcon name="i-simple-icons-javascript" class="size-5 text-yellow-500 shrink-0" />
            <span class="text-muted">JavaScript</span>
          </div>
          <div class="flex items-center gap-2">
            <UIcon name="i-simple-icons-git" class="size-5 text-orange-600 shrink-0" />
            <span class="text-muted">Git</span>
          </div>
          <div class="flex items-center gap-2">
            <UIcon name="i-simple-icons-github" class="size-5 shrink-0" />
            <span class="text-muted">GitHub</span>
          </div>
          <div class="flex items-center gap-2">
            <UIcon name="i-simple-icons-vuedotjs" class="size-5 text-green-500 shrink-0" />
            <span class="text-muted">Vue.js</span>
          </div>
          <div class="flex items-center gap-2">
            <UIcon name="i-simple-icons-vuetify" class="size-5 text-blue-600 shrink-0" />
            <span class="text-muted">Vuetify</span>
          </div>
          <div class="flex items-center gap-2">
            <UIcon name="i-simple-icons-pinia" class="size-5 text-yellow-400 shrink-0" />
            <span class="text-muted">Pinia</span>
          </div>
          <div class="flex items-center gap-2">
            <UIcon name="i-simple-icons-vitest" class="size-5 text-green-400 shrink-0" />
            <span class="text-muted">Vitest</span>
          </div>
          <div class="flex items-center gap-2">
            <UIcon name="i-simple-icons-anthropic" class="size-5 shrink-0" />
            <span class="text-muted whitespace-nowrap">Claude Code</span>
          </div>
        </div>
      </UCard>

      <UCard class="mt-6 resume-card print-page-break">
        <template #header>
          <span class="text-secondary text-lg">{{ $t('sections.experience') }}</span>
        </template>

        <div class="flex justify-between items-center">
          <h3 class="text-xl">{{ $t('experience.frontendDeveloper.title') }} <UBadge :label="$t('badges.current')" /></h3>
          <UBadge color="neutral" variant="outline">{{ $t('experience.frontendDeveloper.period') }}</UBadge>
        </div>

        <h4 class="text-muted text-base mt-1">STRATO</h4>

        <ul class="mt-2 list-disc list-inside">
          <li>{{ $t('experience.frontendDeveloper.bullets.0') }}</li>
          <li>{{ $t('experience.frontendDeveloper.bullets.1') }}</li>
          <li>{{ $t('experience.frontendDeveloper.bullets.2') }}</li>
          <li>{{ $t('experience.frontendDeveloper.bullets.3') }}</li>
          <li>{{ $t('experience.frontendDeveloper.bullets.4') }}</li>
          <li>{{ $t('experience.frontendDeveloper.bullets.5') }}</li>
          <li>{{ $t('experience.frontendDeveloper.bullets.6') }}</li>
        </ul>

        <USeparator class="my-4" />

        <div class="flex justify-between items-center">
          <h3 class="text-xl">{{ $t('experience.apprenticeship.title') }}</h3>
          <UBadge color="neutral" variant="outline">{{ $t('experience.apprenticeship.period') }}</UBadge>
        </div>

        <h4 class="text-muted text-base mt-1">STRATO</h4>

        <p class="mt-2">{{ $t('experience.apprenticeship.description') }}</p>

        <USeparator class="my-4" />

        <div class="flex justify-between items-center">
          <h3 class="text-xl">{{ $t('experience.itInternship.title') }}</h3>
          <UBadge color="neutral" variant="outline">{{ $t('experience.itInternship.period') }}</UBadge>
        </div>

        <h4 class="text-muted text-base mt-1">Health Service Executive</h4>

        <p class="mt-2">{{ $t('experience.itInternship.description') }}</p>

        <USeparator class="my-4" />

        <div class="flex justify-between items-center">
          <h3 class="text-xl">{{ $t('experience.mcdonalds.title') }}</h3>
          <UBadge color="neutral" variant="outline">{{ $t('experience.mcdonalds.period') }}</UBadge>
        </div>

        <h4 class="text-muted text-base mt-1">McDonald's</h4>

        <p class="mt-2">{{ $t('experience.mcdonalds.description') }}</p>
      </UCard>

      <UCard class="mt-6 resume-card print-page-break">
        <template #header>
          <span class="text-secondary text-lg">{{ $t('sections.education') }}</span>
        </template>

        <div class="flex justify-between items-center">
          <h3 class="text-xl">{{ $t('education.apprenticeship') }}</h3>
          <UBadge color="neutral" variant="outline">2020</UBadge>
        </div>

        <h4 class="text-muted text-base mt-1">OSZ Informations- und Medizintechnik</h4>

        <USeparator class="my-4" />

        <div class="flex justify-between items-center">
          <h3 class="text-xl">{{ $t('education.bachelor') }}</h3>
          <UBadge color="neutral" variant="outline">2016</UBadge>
        </div>

        <h4 class="text-muted text-base mt-1">Humboldt-Universität zu Berlin</h4>

        <USeparator class="my-4" />

        <div class="flex justify-between items-center">
          <h3 class="text-xl">{{ $t('education.abitur') }}</h3>
          <UBadge color="neutral" variant="outline">2012</UBadge>
        </div>

        <h4 class="text-muted text-base mt-1">Max-Planck-Gymnasium Berlin</h4>
      </UCard>

      <UCard class="mt-6 resume-card">
        <template #header>
          <span class="text-secondary text-lg">{{ $t('sections.languageExperience') }}</span>
        </template>

        <div class="flex justify-between items-center">
          <h3 class="text-xl">{{ $t('languages.german') }}</h3>
          <UIcon name="i-twemoji-flag-germany" class="size-6" />
        </div>

        <h4 class="text-muted text-base mt-1">{{ $t('languages.motherTongue') }}</h4>

        <USeparator class="my-4" />

        <div class="flex justify-between items-center">
          <h3 class="text-xl">{{ $t('languages.english') }}</h3>
          <UIcon name="i-twemoji-flag-united-kingdom" class="size-6" />
        </div>

        <h4 class="text-muted text-base mt-1">{{ $t('languages.c1Level') }}</h4>

        <ul class="mt-2 list-disc list-inside">
          <li>{{ $t('languages.englishExperience.dublin') }} <UBadge color="neutral" :label="$t('languages.durations.dublin')" variant="soft" /></li>
          <li>{{ $t('languages.englishExperience.belfast') }} <UBadge color="neutral" :label="$t('languages.durations.belfast')" variant="soft" /></li>
          <li>{{ $t('languages.englishExperience.glasgow') }} <UBadge color="neutral" :label="$t('languages.durations.glasgow')" variant="soft" /></li>
          <li>{{ $t('languages.englishExperience.kentucky') }} <UBadge color="neutral" :label="$t('languages.durations.kentucky')" variant="soft" /></li>
        </ul>

        <USeparator class="my-4" />

        <div class="flex justify-between items-center">
          <h3 class="text-xl">{{ $t('languages.japanese') }}</h3>
          <UIcon name="i-twemoji-flag-japan" class="size-6" />
        </div>

        <h4 class="text-muted text-base mt-1">{{ $t('languages.a1Level') }}</h4>

        <ul class="mt-2 list-disc list-inside">
          <li>{{ $t('languages.japaneseExperience.glsBerlin') }} <UBadge color="neutral" :label="$t('languages.durations.glsBerlin')" variant="soft" /></li>
          <li>{{ $t('languages.japaneseExperience.genkiTokyo2025') }} <UBadge color="neutral" :label="$t('languages.durations.genkiTokyo2025')" variant="soft" /></li>
          <li>{{ $t('languages.japaneseExperience.genkiTokyo2024') }} <UBadge color="neutral" :label="$t('languages.durations.genkiTokyo2024')" variant="soft" /></li>
          <li>{{ $t('languages.japaneseExperience.genkiKyoto') }} <UBadge color="neutral" :label="$t('languages.durations.genkiKyoto')" variant="soft" /></li>
          <li>{{ $t('languages.japaneseExperience.efTokyo') }} <UBadge color="neutral" :label="$t('languages.durations.efTokyo')" variant="soft" /></li>
        </ul>
      </UCard>

      <UCard class="mt-6 resume-card print-page-break">
        <template #header>
          <span class="text-secondary text-lg">{{ $t('sections.volunteerExperience') }}</span>
        </template>

        <div class="flex justify-between items-center">
          <h3 class="text-xl">{{ $t('volunteer.ambassador.title') }}</h3>
        </div>

        <h4 class="text-muted text-base mt-1">Alexanderplatz</h4>

        <ul class="mt-2 list-disc list-inside">
          <li>{{ $t('volunteer.ambassador.bullets.0') }}</li>
          <li>{{ $t('volunteer.ambassador.bullets.1') }}</li>
          <li>{{ $t('volunteer.ambassador.bullets.2') }}</li>
          <li>{{ $t('volunteer.ambassador.bullets.3') }}</li>
          <li>{{ $t('volunteer.ambassador.bullets.4') }}</li>
        </ul>

        <USeparator class="my-4" />

        <div class="flex justify-between items-center">
          <h3 class="text-xl">{{ $t('volunteer.cleanup.title') }}</h3>
          <UTooltip :text="$t('tooltips.cleanupInstagram')">
            <UButton icon="i-simple-icons-instagram" color="neutral" target="_blank" to="https://www.instagram.com/cleanupkollektiv/" variant="subtle" />
          </UTooltip>
        </div>

        <h4 class="text-muted text-base mt-1">Cleanupkollektiv</h4>

        <ul class="mt-2 list-disc list-inside">
          <li>{{ $t('volunteer.cleanup.bullets.0') }}</li>
          <li>{{ $t('volunteer.cleanup.bullets.1') }}</li>
          <li>{{ $t('volunteer.cleanup.bullets.2') }}</li>
          <li>{{ $t('volunteer.cleanup.bullets.3') }}</li>
        </ul>
      </UCard>

      <UCard class="mt-6 resume-card">
        <template #header>
          <div class="flex justify-between items-center">
            <span class="text-secondary text-lg">{{ $t('sections.projects') }}</span>
            <UButton icon="i-simple-icons-github" color="neutral" target="_blank" to="https://github.com/ichbinbobby/wurzelheim.de" variant="subtle" />
          </div>
        </template>

        <div class="flex justify-between items-center">
          <h3 class="text-xl">{{ $t('projects.codeCardGenerator.title') }}</h3>
          <UButton color="neutral" variant="subtle" size="sm" target="_blank" to="https://wurzelheim.de/code-card-generator" label="wurzelheim.de" trailing-icon="i-lucide-external-link" />
        </div>

        <p class="mt-2">{{ $t('projects.codeCardGenerator.description') }}</p>

        <div class="flex gap-2 mt-3">
          <UBadge color="neutral" variant="soft" label="Vue 3" />
          <UBadge color="neutral" variant="soft" label="Nuxt 3" />
          <UBadge color="neutral" variant="soft" label="Vuetify" />
          <UBadge color="neutral" variant="soft" label="TypeScript" />
        </div>
      </UCard>
    </UContainer>
  </div>
</template>

<script setup>
const { locale, setLocale } = useI18n()
const { t } = useI18n()

const contactData = computed(() => [
  {
    label: t('contact.location'),
    icon: 'i-lucide-map-pin',
  },
  {
    label: 'n********@gmail.com',
    icon: 'i-lucide-mail',
    slot: 'email',
  },
  {
    label: '0176 *****284',
    icon: 'i-lucide-smartphone',
  },
  {
    label: 'resume.ichbinbobby.de',
    icon: 'i-lucide-link',
    to: 'https://resume.ichbinbobby.de',
    target: '_blank',
  }
])

const isGeneratingPdf = ref(false)

const downloadPdf = async () => {
  isGeneratingPdf.value = true

  try {
    const sampleCard = document.querySelector('[class*="bg-card"]') || document.querySelector('div[class*="UCard"]') || document.querySelector('.mt-6')
    const cardBgColor = sampleCard ? getComputedStyle(sampleCard).backgroundColor : (document.documentElement.classList.contains('dark') ? 'rgb(39, 39, 42)' : 'rgb(255, 255, 255)')

    const printStyles = document.createElement('style')
    printStyles.textContent = `
      @media print {
        @page {
          margin: 0;
          size: A4;
        }

        body * {
          visibility: hidden;
        }

        .print-area, .print-area * {
          visibility: visible;
        }

        .print-area {
          position: absolute;
          left: 0;
          top: 0;
          width: 100%;
          background-color: ${cardBgColor} !important;
        }

        .min-h-screen {
          min-height: auto !important;
          padding: 5mm 5mm !important;
          margin: 0 !important;
          background-color: ${cardBgColor} !important;
        }

        h1 {
          margin-top: 0 !important;
          padding-top: 0 !important;
        }

        [class*="card"], .bg-card, [class*="UCard"] {
          background-color: ${cardBgColor} !important;
        }

        .bg-background {
          background-color: ${cardBgColor} !important;
        }
      }
    `

    document.head.appendChild(printStyles)

    const resumeContainer = document.querySelector('.min-h-screen')
    resumeContainer.classList.add('print-area')

    window.print()

    setTimeout(() => {
      document.head.removeChild(printStyles)
      resumeContainer.classList.remove('print-area')
    }, 1000)

  } catch (error) {
    alert('Error: ' + error.message)
  } finally {
    isGeneratingPdf.value = false
  }
}
</script>

<style>
@media print {
  @page {
    size: A4;
    margin: 8mm 0;
  }

  html, body {
    -webkit-print-color-adjust: exact;
    print-color-adjust: exact;
    margin: 0;
    padding: 0;
  }

  *, *::before, *::after {
    -webkit-print-color-adjust: exact;
    print-color-adjust: exact;
  }

  .min-h-screen {
    min-height: 100vh !important;
    padding: 5mm 5mm 20mm 5mm !important;
    margin: 0 !important;
    box-shadow: none !important;
  }

  h1 {
    margin-top: 0 !important;
    padding-top: 0 !important;
  }

  .page-break-spacer {
    page-break-before: always !important;
    height: 15mm !important;
    margin: 0 !important;
    padding: 0 !important;
  }

  [class*="UCard"], .bg-card {
    page-break-inside: avoid;
  }

  .print-page-break {
    break-before: page;
  }
}
</style>
