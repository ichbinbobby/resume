<template>
  <UContainer>
    <h1 class="text-primary text-4xl mt-4">Name</h1>
    <h2 class="text-default text-2xl">Frontend Developer</h2>

    <UCard class="mt-4">
      <template #header>
        <span class="text-lg">Summary</span>
      </template>

      <p>
        Application Developer with five years of experience in building web applications and 
        skilled in replacing legacy code with modern framework and UI libraries.
      </p>
    </UCard>

    <UCard class="mt-4">
      <template #header>
        <span class="text-lg">Experience</span>
      </template>

      <h3 class="text-xl">Frontend Developer <UBadge label="current" /></h3>

      <ul class="mt-2 list-disc list-inside">
        <li>Developed and maintained web applications using modern frameworks.</li>
        <li>Collaborated with cross-functional teams to define and implement new features.</li>
        <li>Replaced legacy code with modern frameworks and UI libraries.</li>
      </ul>
    </UCard>
  </UContainer>
</template>
