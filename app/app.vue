<script setup lang="ts">
useHead({
  titleTemplate: '%s %separator %siteName',
  templateParams: {
    separator: '|',
  },
})

defineOgImage('A11yDefault', {
  title: 'Accessibility Nigeria',
  description:
    'Breaking barriers and building access — advocating for inclusion across Nigeria.',
})
</script>

<template>
  <UApp>
    <AppNavbar />
    <UMain>
      <NuxtPage />
    </UMain>
    <AppFooter />
  </UApp>
</template>
