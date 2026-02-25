<script setup lang="ts">
import heroImg from '~/assets/images/team-image.jpg'
import listLogoLight from '~/assets/images/list-logo.svg'
import listLogoDark from '~/assets/images/list-logo-dark.svg'
import BaseBadge from '~/components/app/BaseBadge.vue'

const colorMode = useColorMode()
const isDark = computed({
  get() {
    return colorMode.value === 'dark'
  },
  set(_isDark) {
    colorMode.preference = _isDark ? 'dark' : 'light'
  }
})

const listLogo = computed(() => isDark.value ? listLogoDark : listLogoLight)

const missions = [
  'Advocating for inclusive policies and practices guided by the Disability Act of 2018',
  'Partnering with stakeholders, founders, communities, and event organizers to make accessibility non-negotiable',
  'Driving accessibility in open-source projects, digital products, and tech events through audits, education, and collaboration',
  'Empowering people with disabilities to contribute to, lead, and thrive in technology and design'
];

const visionArray = [
  'We envision a Nigeria where the Disability Act of 2018 is fully upheld and accessibility becomes the standard across every sector—technology, design, open-source, and events.',
  'in this future, digital products, community projects, and open-source innovations are built with inclusion at their core, ensuring that people with disabilities can actively shape and benefit from Nigeria’s digital transformation.'
]

const theTeam = [
  {name: 'Victoria Ottah', position: 'Co-Founder', image: ''},
  {name: 'Abdulqudus Abubakre', position: 'Co-Founder', image: ''},
  {name: 'Yiga L. Samuel', position: 'Marketing Lead', image: ''},
  {name: 'Ejiro Ogenekome', position: 'UX designer', image: ''},
  {name: 'Khadija Ladan', position: 'Social Media', image: ''},
  {name: 'Fauziya Mohammed', position: 'Design Lead', image: ''}
]
</script>

<template>
  <div>
    <UContainer>
      <section class="my-16">
        <BaseBadge>Accessibility Nigeria</BaseBadge>
        <div class="flex flex-col lg:flex-row items-start lg:items-end justify-between w-full">
          <h1 class="text-black dark:text-white uppercase font-bold text-3xl lg:text-5xl">
            <span class="block">Building a Digital</span>
            <span class="block">Future for Everyone</span>
          </h1>
          <p class="text-base w-full lg:w-2/5">
            We are a nonprofit organization driving inclusion and accessibility in the digital World.
          </p>
        </div>
        <img :src="heroImg" class="rounded-[3xl] lg:rounded-[50px] mx-auto mt-8 lg:mt-16 border border-[#E2E1E1]">
      </section>

      <section class="my-16">
        <div class="mx-auto mb-16 max-w-[720px] text-center">
          <BaseBadge>Our Mission & Vision</BaseBadge>
          <h1 class="text-black dark:text-white uppercase font-bold mb-6 text-3xl lg:text-6xl">Our Commitment to Accessibility and Inclusion</h1>
          <p class="text-base lg:text-lg">
            At Accessibility Nigeria, our commitment begins with a simple belief: technology should empower, not exclude.
          </p>
        </div>

        <div class="flex flex-col lg:flex-row items-center gap-4 lg:gap-8 mb-6 lg:mb-0">
          <div class="block w-full lg:w-1/2">
            <h1 class="text-black dark:text-white uppercase font-bold mb-6 text-2xl lg:text-6xl">Our Mission</h1>
            <p class="text-base lg:text-lg">
              Accessibility Nigeria’s mission is to embed accessibility into the heart of Nigeria&apos;s tech ecosystem. We achieve this by:
            </p>

            <div class="lg:my-8">
              <UCard v-for="(mission, index) in missions" :key="index" class="my-6 bg-[#EEF1F8] dark:bg-body ring-transparent rounded-2xl" :ui="{ body: 'flex gap-4'}">
                <img :src="listLogo">
                <p class="text-sm lg:text-base dark:text-white">{{ mission }}</p>
              </UCard>
            </div>
          </div>
          <div class="rounded-3xl lg:rounded-[50px] h-[396px] lg:h-[688px] w-full lg:w-1/2 my-4 lg:my-16 bg-gray-200 dark:bg-gray-700" />
          <!-- <img :src="heroImg" class="rounded-[50px] w-1/2 my-16 border border-[#E2E1E1]"> -->
        </div>

        <div class="flex flex-col-reverse lg:flex-row items-center gap-8">
          <div class="rounded-3xl lg:rounded-[50px] h-[278px] lg:h-[530px] w-full lg:w-1/2 lg:my-16 bg-gray-200 dark:bg-gray-700" />
          <!-- <img :src="heroImg" class="rounded-[50px] w-1/2 my-16 border border-[#E2E1E1]"> -->
          <div class="block lg:w-1/2">
            <h1 class="text-black dark:text-white uppercase font-bold mb-6 text-2xl lg:text-6xl">Our Vision</h1>
            
            <div class="my-8">
              <UCard v-for="(vision, index) in visionArray" :key="index" class="my-6 bg-[#EEF1F8] dark:bg-body ring-transparent rounded-2xl" :ui="{ body: 'flex gap-4'}">
                <img :src="listLogo">
                <p class="text-sm lg:text-base dark:text-white">{{ vision }}</p>
              </UCard>
            </div>
          </div>
        </div>
      </section>

      <section class="my-16">
        <div class="mx-auto max-w-[720px] mb-14 text-center">
          <BaseBadge>The Core Team</BaseBadge>
          <h1 class="text-black dark:text-white uppercase font-bold mb-6 text-3xl lg:text-6xl">meet the team</h1>
          <p class="text-base lg:text-lg">
            Accessibility Nigeria is powered by a diverse team of experts and advocates who believe in the power of inclusion. Each member brings unique skills to ensure that people with disabilities are at the centre of Nigeria&apos;s digital future.
          </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full ">
          <div v-for="(team, index) in theTeam" :key="index" class="space-4">
            <div class="rounded-3xl h-67 w-full bg-gray-200 dark:bg-gray-700 mb-4" />
            <h1 class="text-black dark:text-white uppercase font-bold text-2xl">{{ team.name }}</h1>
            <p class="text-base">{{ team.position }}</p>
          </div>
        </div>
      </section>

      <section :class="['partnerSection px-5 py-10 lg:p-16 border border-[#CCCCCC] dark:border-stroke rounded-[25px] lg:rounded-[50px] mb-20 flex flex-col-reverse lg:flex-row items-center gap-10', { 'partnerSection--dark': isDark }]">
        <div class="rounded-3xl h-[334px] lg:h-[573px] w-full lg:w-1/2 bg-gray-200 dark:bg-gray-700 mb-4" />
        <div class="lg:w-1/2">
          <BaseBadge>Partner with us</BaseBadge>
          <h1 class="text-black dark:text-white uppercase font-bold mb-6 text-[32px]/10 lg:text-[56px]/14">Breaking Barriers Through Collaboration</h1>
          <p class="text-base mb-10">
            At Accessibility Nigeria, we work with partners who believe technology should serve everyone—especially people with disabilities.
          </p>
          <UButton to="/partner" label="Partner With Us" :ui="{base: 'bg-dark dark:bg-white dark:text-body'}" />
        </div>
      </section>
    </UContainer>
  </div>
</template>

<style lang="scss" scoped>
.partnerSection {
  background: linear-gradient(to right, #DCFBF0 -2.22%, #FBDAE1 50.15%, #FFF3F5 100%);

  &--dark {
    background: linear-gradient(to right, #00462E -2.22%, #60112C 50.15%, #560B24 100%);
  }
}
</style>