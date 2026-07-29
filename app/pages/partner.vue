<script setup lang="ts">
import partnerImg from '~/assets/images/event-partner-presentation.jpg'
import BaseBadge from '~/components/app/BaseBadge.vue'

useSeoMeta({
  title: 'Partner With Us',
  description:
    'Partner with Accessibility Nigeria to make tech events and digital products accessible—sign language, venue audits, sensitivity training, and inclusive design support.',
  ogTitle: 'Partner With Us | Accessibility Nigeria',
  ogDescription:
    'Collaborate with Accessibility Nigeria to build accessible experiences and inclusive communities.',
  twitterCard: 'summary_large_image',
  twitterTitle: 'Partner With Us | Accessibility Nigeria',
  twitterDescription:
    'Collaborate with Accessibility Nigeria to build accessible experiences and inclusive communities.',
})

defineOgImage('A11yDefault', {
  title: 'Partner With Us',
  description: 'Build accessible experiences with Accessibility Nigeria.',
})

const partnerFormUrl = 'https://docs.google.com/forms/d/e/1FAIpQLSePkTjE8iF2_JuN1zt63U6--E-7yZ1m5MfpSjQeneqz4gO45A/viewform'
const partnerFormEmbedUrl = `${partnerFormUrl}?embedded=true`

const socialLinks = [
  { icon: 'i-simple-icons-github', label: 'GitHub', to: 'https://github.com/Accessibility-Nigeria' },
  { icon: 'i-simple-icons-x', label: 'X', to: 'https://x.com/A11yNGN' },
  { icon: 'i-simple-icons-linkedin', label: 'LinkedIn', to: 'https://www.linkedin.com/in/accessibility-nigeria-939681297/' }
]
</script>

<template>
  <div>
    <UContainer>
      <section class="my-16">
        <BaseBadge>Partner with us</BaseBadge>
        <div class="flex flex-col lg:flex-row items-start lg:items-end justify-between gap-8 w-full">
          <h1 class="text-black dark:text-white uppercase font-bold text-3xl lg:text-5xl lg:max-w-xl">
            Let's Build Inclusion Together
          </h1>
          <p class="text-base w-full lg:w-2/5">
            Join hands with us to build accessible experiences, empower communities, and create lasting impact through collaboration.
          </p>
        </div>
      </section>

      <section class="my-16 lg:my-24 mb-20">
        <div class="flex flex-col-reverse lg:flex-row gap-10 lg:gap-16">
          <div class="w-full lg:w-3/5 space-y-4">
            <p class="text-sm lg:text-base">
              Prefer not to use the embedded form?
              <a
                :href="partnerFormUrl"
                target="_blank"
                rel="noopener noreferrer"
                class="underline font-medium text-primary dark:text-primary-light"
              >
                Open the partner form in a new tab
              </a>.
            </p>
            <div class="bg-white dark:bg-[#2B2928] rounded-3xl lg:rounded-[40px] p-2 sm:p-4 shadow-[0_4px_24px_#083D2B1A] border border-[#E2E1E1] dark:border-stroke overflow-hidden">
              <iframe
                :src="partnerFormEmbedUrl"
                title="Partner with Accessibility Nigeria form"
                class="w-full min-h-[900px] sm:min-h-[1000px] rounded-2xl lg:rounded-[32px] border-0"
                loading="lazy"
              >
                Loading partner form…
              </iframe>
            </div>
          </div>

          <div class="w-full lg:w-2/5 space-y-8">
            <img
              :src="partnerImg"
              alt="Accessibility Nigeria partner presentation at CHAOSScon Africa"
              class="rounded-3xl lg:rounded-[50px] w-full border border-[#E2E1E1] object-cover aspect-4/5 lg:aspect-auto lg:min-h-[420px]"
            >
            <div class="flex flex-wrap items-center gap-4">
              <p class="text-black dark:text-white uppercase font-bold text-sm lg:text-base">
                Follow us on socials
              </p>
              <div class="flex gap-3">
                <a
                  v-for="social in socialLinks"
                  :key="social.label"
                  :href="social.to"
                  target="_blank"
                  rel="noopener noreferrer"
                  :aria-label="social.label"
                  class="flex items-center justify-center size-10 rounded-full bg-primary-light text-primary hover:bg-primary hover:text-white transition-colors"
                >
                  <UIcon :name="social.icon" class="size-5" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </UContainer>
  </div>
</template>
