<script setup lang="ts">
const title = 'Breaking Barriers, Building Access'
const description =
  'Accessibility Nigeria is a nonprofit community bridging the gap between people with disabilities, supporters, and society—advocating for an accessible web and environment across Nigeria.'
const ogDescription =
  'A nonprofit community advocating for digital and environmental accessibility across Nigeria.'

useSeoMeta({
  title,
  description,
  ogTitle: `${title} | Accessibility Nigeria`,
  ogDescription,
  twitterCard: 'summary_large_image',
  twitterTitle: `${title} | Accessibility Nigeria`,
  twitterDescription: ogDescription,
})

defineOgImage('A11yDefault', {
  title,
  description: 'Accessibility Nigeria — inclusion across digital products, events, and communities.',
})
</script>

<template>
  <div>
    <HomepageHero />
    <HomepageImpact />
    <HomepageWhoWeAre />
    <HomepagePartner />
  </div>
</template>
