<template>
  <UContainer>
    <div class="flex justify-between items-center">
      <div>
        <h1 class="text-primary text-4xl mt-4">Resume</h1>
        <h2 class="text-default text-2xl">ichbinbobby</h2>
      </div>

      <div class="flex items-center gap-2">
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
        <h3 class="text-xl">IT Service Desk Intern</h3>

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
        Worked as restaurant employee in a major fast food chain. Gained experience in customer service, teamwork and working under pressure.
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
</template>
