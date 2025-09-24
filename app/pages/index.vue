<template>
  <div class="min-h-screen bg-background">
    <UContainer class="py-8 px-6">
      <div class="flex justify-between items-center">
        <div>
          <h1 class="text-primary text-4xl mt-4">Resume</h1>
          <h2 class="text-default text-2xl">ichbinbobby</h2>
        </div>

        <div class="flex items-center gap-2">
          <UTooltip text="Download PDF">
            <UButton 
              icon="i-lucide-download"
              color="primary" 
              variant="subtle"
              :loading="isGeneratingPdf"
              @click="downloadPdf"
            />
          </UTooltip>
          
          <UTooltip text="Toggle Dark Mode">
            <UButton 
              :icon="$colorMode.value === 'dark' ? 'i-lucide-sun' : 'i-lucide-moon'"
              color="neutral" 
              variant="subtle"
              @click="$colorMode.preference = $colorMode.value === 'dark' ? 'light' : 'dark'"
            />
          </UTooltip>
        </div>
      </div>

      <UCard class="mt-6">
        <template #header>
          <div class="flex justify-between items-center">
            <span class="text-secondary text-lg">Summary</span>
            
            <div class="flex items-center gap-2">
              <UTooltip text="GitHub Profile">
                <UButton icon="i-simple-icons-github" color="neutral" target="_blank" to="https://github.com/ichbinbobby" variant="subtle" />
              </UTooltip>
              <UTooltip text="LinkedIn Profile">
                <UButton icon="i-simple-icons-linkedin" color="neutral" target="_blank" to="https://www.linkedin.com/in/ichbinbobby/" variant="subtle" />
              </UTooltip>
            </div>
          </div>
        </template>

        <p>
          Application Developer with five years of experience in building web applications and 
          skilled in replacing legacy code with modern framework and UI libraries.
        </p>
      </UCard>

      <UCard class="mt-6">
        <template #header>
          <div class="flex justify-between items-center">
            <span class="text-secondary text-lg">Experience</span>

            <div class="flex items-center gap-2">
              <UTooltip text="HTML5">
                <UIcon name="i-simple-icons-html5" class="size-5 text-orange-500" />
              </UTooltip>
              <UTooltip text="CSS3">
                <UIcon name="i-simple-icons-css3" class="size-5 text-blue-500" />
              </UTooltip>
              <UTooltip text="JavaScript">
                <UIcon name="i-simple-icons-javascript" class="size-5 text-yellow-500" />
              </UTooltip>
              <UTooltip text="Vue.js">
                <UIcon name="i-simple-icons-vuedotjs" class="size-5 text-green-500" />
              </UTooltip>
              <UTooltip text="Vuetify">
                <UIcon name="i-simple-icons-vuetify" class="size-5 text-blue-600" />
              </UTooltip>
              <UTooltip text="Nuxt.js">
                <UIcon name="i-simple-icons-nuxtdotjs" class="size-5 text-green-400" />
              </UTooltip>
            </div>
          </div>
        </template>

        <div class="flex justify-between items-center">
          <h3 class="text-xl">Frontend Developer <UBadge label="current" /></h3>

          <UBadge color="neutral" variant="outline">5+ years</UBadge>
        </div>

        <h4 class="text-muted text-base mt-1">STRATO</h4>

        <ul class="mt-2 list-disc list-inside">
          <li>Developed and maintained company's customer care application</li>
          <li>Replaced AngularJS legacy code with Vue 2</li>
          <li>Build components with the Vuetify UI library</li>
          <li>Introduced state management with Vuex and Pinia</li>
          <li>Rewrote components from Options API to Composition API in order to upgrade to Vue 3</li>
          <li>Unit testing with Vue Test Utils and Vitest</li>
        </ul>

        <USeparator class="my-4" />

        <div class="flex justify-between items-center">
          <h3 class="text-xl">Application Developer Apprenticeship</h3>

          <UBadge color="neutral" variant="outline">3 years</UBadge>
        </div>

        <h4 class="text-muted text-base mt-1">STRATO</h4>

        <p class="mt-2">
          Completed a three year apprenticeship in a dual education system. Switched between different departments at the company 
          in order to learn various topics and technologies, including Webdesign, Backend Development, Frontend Development and IT Support.
        </p>

        <USeparator class="my-4" />

        <div class="flex justify-between items-center">
          <h3 class="text-xl">IT Service Desk Internship</h3>

          <UBadge color="neutral" variant="outline">3 months</UBadge>
        </div>

        <h4 class="text-muted text-base mt-1">Health Service Executive</h4>

        <p class="mt-2">
          Completed a three month internship abroad in the IT Service Desk as part of the Erasmus+ program. Gained hands-on experience in 
          giving technical and telephonic assistance to employees, mainly exchanging hardware, installing network printers, connecting ports 
          on the patch panel, troubleshooting and setting up new monitors. Improved foreign language and communication skills.
        </p>

        <USeparator class="my-4" />

        <div class="flex justify-between items-center">
          <h3 class="text-xl">Restaurant Employee</h3>

          <UBadge color="neutral" variant="outline">2.5 years</UBadge>
        </div>

        <h4 class="text-muted text-base mt-1">McDonald's</h4>

        <p class="mt-2">
          Gained experience in customer service, teamwork and working under pressure.
          Duties were taking orders, restocking and cleaning.
        </p>
      </UCard>

      <UCard class="mt-6">
        <template #header>
          <span class="text-secondary text-lg">Education</span>
        </template>

        <div class="flex justify-between items-center">
          <h3 class="text-xl">Application Developer Apprenticeship</h3>

          <UBadge color="neutral" variant="outline">3 years</UBadge>
        </div>

        <h4 class="text-muted text-base mt-1">OSZ Informations- und Medizintechnik</h4>

        <USeparator class="my-4" />

        <div class="flex justify-between items-center">
          <h3 class="text-xl">Bachelor of Science in Biology</h3>

          <UBadge color="neutral" variant="outline">4 years</UBadge>
        </div>

        <h4 class="text-muted text-base mt-1">Humboldt-Universität zu Berlin</h4>

        <USeparator class="my-4" />

        <div class="flex justify-between items-center">
          <h3 class="text-xl">Abitur</h3>

          <UBadge color="neutral" variant="outline">2012</UBadge>
        </div>

        <h4 class="text-muted text-base mt-1">Max-Planck-Gymnasium Berlin</h4>
      </UCard>

      <UCard class="mt-6">
        <div class="flex justify-between items-center">
          <h3 class="text-xl">German</h3>
        </div>

        <h4 class="text-muted text-base mt-1">Mother Tongue</h4>

        <USeparator class="my-4" />

        <template #header>
          <span class="text-secondary text-lg">Language Experience</span>
        </template>

        <div class="flex justify-between items-center">
          <h3 class="text-xl">English</h3>
        </div>

        <h4 class="text-muted text-base mt-1">C1 Level</h4>

        <ul class="mt-2 list-disc list-inside">
          <li>IT Service Desk Internship in Dublin ( 2019 - 3 months )</li>
          <li>International House Belfast ( 2019 - 2 weeks )</li>
          <li>Glasgow School of English ( 2018 - 2 weeks )</li>
          <li>High School Year in Kentucky ( 2009/2010 - 1 year )</li>
        </ul>

        <USeparator class="my-4" />

        <div class="flex justify-between items-center">
          <h3 class="text-xl">Japanese</h3>
        </div>

        <h4 class="text-muted text-base mt-1">A1 Level</h4>

        <ul class="mt-2 list-disc list-inside">
          <li>GLS Sprachschule Berlin ( 2023 - 2025 )</li>
          <li>GenkiJACS Tokyo ( 2024 - 6 weeks )</li>
          <li>GenkiJACS Kyoto ( 2023 - 4 weeks )</li>
          <li>EF Tokyo ( 2022 - 4 weeks )</li>
        </ul>
      </UCard>

      <UCard class="my-6">
        <template #header>
          <span class="text-secondary text-lg">Volunteer Experience</span>
        </template>

        <div class="flex justify-between items-center">
          <h3 class="text-xl">Pokemon GO Community Ambassador</h3>
        </div>

        <h4 class="text-muted text-base mt-1">Alexanderplatz</h4>

        <ul class="mt-2 list-disc list-inside">
          <li>Event planning and coordination</li>
          <li>Crowd management with up to 400 players</li>
          <li>Public speaking</li>
          <li>Online platform moderation</li>
          <li>Communicating with game representatives about event details</li>
        </ul>

        <USeparator class="my-4" />

        <div class="flex justify-between items-center">
          <h3 class="text-xl">Cleanup Organizer</h3>

          <UTooltip text="Instagram page of Cleanupkollektiv">
            <UButton icon="i-simple-icons-instagram" color="neutral" target="_blank" to="https://www.instagram.com/cleanupkollektiv/" variant="subtle" />
          </UTooltip>
        </div>

        <h4 class="text-muted text-base mt-1">Cleanupkollektiv</h4>

        <ul class="mt-2 list-disc list-inside">
          <li>Social media management</li>
          <li>Organizing regular cleanup events in public spaces to promote environmental awareness</li>
          <li>Promoting garbage separation and recycling at work</li>
          <li>Collecting and donating bottle caps to be sent for recycling</li>
        </ul>
      </UCard>
    </UContainer>
  </div>
</template>

<script setup>
const isGeneratingPdf = ref(false)

const downloadPdf = async () => {
  isGeneratingPdf.value = true
  
  try {
    // Get the actual card background color from a real card element
    const sampleCard = document.querySelector('[class*="bg-card"]') || document.querySelector('div[class*="UCard"]') || document.querySelector('.mt-6')
    const cardBgColor = sampleCard ? getComputedStyle(sampleCard).backgroundColor : (document.documentElement.classList.contains('dark') ? 'rgb(39, 39, 42)' : 'rgb(255, 255, 255)')
    
    // Add print-specific styles temporarily
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
          padding: 5mm 15mm !important;
          margin: 0 !important;
          background-color: ${cardBgColor} !important;
        }
        
        /* Reduce title spacing */
        h1 {
          margin-top: 0 !important;
          padding-top: 0 !important;
        }
        
        /* Ensure cards blend with background */
        [class*="card"], .bg-card, [class*="UCard"] {
          background-color: ${cardBgColor} !important;
        }
        
        /* Override any conflicting backgrounds */
        .bg-background {
          background-color: ${cardBgColor} !important;
        }
      }
    `
    
    document.head.appendChild(printStyles)
    
    // Add print-area class to the resume container
    const resumeContainer = document.querySelector('.min-h-screen')
    resumeContainer.classList.add('print-area')
    
    // Trigger print
    window.print()
    
    // Clean up after print dialog
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
/* Ensure full page background color for PDF generation and remove browser headers */
@media print {
  @page {
    size: A4;
    margin: 0;
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
  
  /* Hide browser print headers and footers */
  @page {
    margin: 0;
    @top-left { content: ""; }
    @top-center { content: ""; }
    @top-right { content: ""; }
    @bottom-left { content: ""; }
    @bottom-center { content: ""; }
    @bottom-right { content: ""; }
  }
  
  /* Full bleed background with internal padding */
  .min-h-screen {
    min-height: 100vh !important;
    padding: 5mm 15mm 20mm 15mm !important;
    margin: 0 !important;
    box-shadow: none !important;
  }
  
  /* Reduce title spacing */
  h1 {
    margin-top: 0 !important;
    padding-top: 0 !important;
  }
}
</style>