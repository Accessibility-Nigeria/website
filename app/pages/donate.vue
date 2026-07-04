<script setup lang="ts">
import heroImg from '~/assets/images/community-group-photo.jpg'
import listLogoLight from '~/assets/images/list-logo.svg'
import listLogoDark from '~/assets/images/list-logo-dark.svg'
import BaseBadge from '~/components/app/BaseBadge.vue'

useSeoMeta({
  title: 'Donate | Accessibility Nigeria',
  description: 'Support Accessibility Nigeria in building an accessible future for everyone.'
})

const features = [
  {
    title: 'Advocacy & Awareness',
    description: 'We advocate for people with disabilities and create awareness across Nigeria, bringing accessibility enthusiasts together to drive change in technology and society.'
  },
  {
    title: 'Accessible Events & Communities',
    description: 'From Breaking Barriers Together to partnerships with CHAOSS Africa and Untitled Design Conference, we build inclusive spaces where everyone can participate.'
  },
  {
    title: 'Accessible Resources & Policy',
    description: 'We create accessible digital resources—like our version of the Nigeria Disability Act—and work to make the Act a practical standard across every sector.'
  }
]

const socialLinks = [
  { icon: 'i-simple-icons-github', label: 'GitHub', to: 'https://github.com' },
  { icon: 'i-simple-icons-x', label: 'X', to: 'https://x.com' },
  { icon: 'i-simple-icons-linkedin', label: 'LinkedIn', to: 'https://linkedin.com' }
]
</script>

<template>
  <div>
    <UContainer>
      <!-- Hero -->
      <section class="my-16">
        <BaseBadge>Make a Donation!!</BaseBadge>
        <div class="flex flex-col lg:flex-row items-start lg:items-end justify-between gap-8 w-full">
          <h1 class="text-black dark:text-white uppercase font-bold text-3xl lg:text-5xl lg:max-w-xl">
            <span class="block">Our Support Builds</span>
            <span class="block">an Accessible Future</span>
          </h1>
          <div class="w-full lg:w-2/5 space-y-6">
            <p class="text-base">
              Accessibility Nigeria is a nonprofit community bridging the gap between people with disabilities and society—advocating for inclusion and building an accessible web and environment across Nigeria.
            </p>
            <UButton
              to="#donate-form"
              color="secondary"
              variant="solid"
              label="Make a Donation!!"
              :ui="{ base: 'bg-dark dark:bg-white dark:text-body' }"
            />
          </div>
        </div>
      </section>

      <!-- Features -->
      <section class="my-16">
        <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
          <UCard
            v-for="(feature, index) in features"
            :key="index"
            class="bg-[#EEF1F8] dark:bg-body ring-transparent rounded-2xl"
            :ui="{ body: 'space-y-4' }"
          >
            <img :src="listLogoLight" alt="" class="w-8 h-8 dark:hidden">
            <img :src="listLogoDark" alt="" class="w-8 h-8 hidden dark:block">
            <h2 class="text-black dark:text-white uppercase font-bold text-lg lg:text-xl">
              {{ feature.title }}
            </h2>
            <p class="text-sm lg:text-base">
              {{ feature.description }}
            </p>
          </UCard>
        </div>
        <p class="text-center text-sm lg:text-base italic mt-10 max-w-3xl mx-auto">
          By donating, you're not just giving—you're helping create a future where technology truly works for everyone.
        </p>
      </section>

      <!-- Image & donation embed -->
      <section id="donate-form" class="my-16 lg:my-24">
        <div class="flex flex-col lg:flex-row gap-10 lg:gap-16">
          <div class="w-full lg:w-2/5 space-y-8">
            <img
              :src="heroImg"
              alt="Accessibility Nigeria community group at an event"
              class="rounded-3xl lg:rounded-[50px] w-full border border-[#E2E1E1]"
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

          <div class="w-full lg:w-3/5">
            <div class="bg-white dark:bg-[#2B2928] rounded-3xl lg:rounded-[40px] p-6 lg:p-10 shadow-[0_4px_24px_#083D2B1A] border border-[#E2E1E1] dark:border-stroke min-h-[480px]" />
          </div>
        </div>
      </section>
    </UContainer>
  </div>
</template>
