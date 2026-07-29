<script setup lang="ts">
import BaseBadge from '~/components/app/BaseBadge.vue'
import breakingBarriersBanner from '~/assets/images/breaking-barriers-together-banner.jpg'
import eventWorkshop from '~/assets/images/event-workshop-presentation.jpg'
import eventPanelSpeaker from '~/assets/images/event-panel-speaker.jpg'

const featuredStat = {
  label: 'Breaking Barriers Together',
  value: '5+',
  description: 'Virtual accessibility series since November 2023, bringing professionals together to discuss inclusive practices and answer community questions.'
}

const pinkStat = {
  value: '2024',
  description: 'We published an accessible digital copy of the Nigeria Disability Act—replacing scanned PDFs that screen reader users could not access.'
}

const greenStat = {
  value: '2024',
  description: 'Partnered with Untitled Design Conference to deliver one of Nigeria\'s first fully accessible design events, with sign language, audits, and inclusive venue arrangements.'
}
</script>

<template>
  <section class="my-16 lg:my-24">
    <UContainer>
      <div class="mx-auto mb-12 lg:mb-16 max-w-[720px] text-center">
        <BaseBadge>Organisational Impact</BaseBadge>
        <h2 class="text-black dark:text-white uppercase font-bold mb-6 text-3xl lg:text-6xl">
          Our Journey of Inclusive Impact
        </h2>
        <p class="text-base lg:text-lg">
          Accessibility Nigeria has been actively working to make an accessible environment and web a reality by collaborating with communities across technology, open source, and design.
        </p>
      </div>

      <div class="impactGrid">
        <!-- Tall image stat -->
        <article class="impactGrid__featured relative overflow-hidden rounded-3xl lg:rounded-[50px]">
          <img
            :src="breakingBarriersBanner"
            alt="Accessibility Nigeria team member with community partner at Breaking Barriers Together event"
            class="absolute inset-0 size-full object-cover"
          >
          <div class="absolute inset-0 bg-black/40" />
          <div class="relative flex h-full flex-col justify-between p-6 lg:p-8 text-white">
            <p class="uppercase font-bold text-xs lg:text-sm tracking-wide">
              {{ featuredStat.label }}
            </p>
            <div>
              <p class="impactGrid__stat text-white">
                {{ featuredStat.value }}
              </p>
              <hr class="my-4 border-white/50">
              <p class="text-sm lg:text-base max-w-xs">
                {{ featuredStat.description }}
              </p>
            </div>
          </div>
        </article>

        <!-- Pink stat -->
        <UCard
          class="impactGrid__pink bg-[#FBDAE1] dark:bg-[#60112C]/40 ring-0 rounded-3xl lg:rounded-[50px] h-full"
          :ui="{ body: 'flex h-full flex-col justify-end p-6 lg:p-8' }"
        >
          <p class="impactGrid__stat text-red dark:text-red-light">
            {{ pinkStat.value }}
          </p>
          <hr class="my-4 border-red/30 dark:border-red-light/30">
          <p class="text-sm lg:text-base text-red dark:text-red-light max-w-xs">
            {{ pinkStat.description }}
          </p>
        </UCard>

        <!-- Community image -->
        <article class="impactGrid__image impactGrid__community overflow-hidden rounded-3xl lg:rounded-[50px] border border-[#E2E1E1] dark:border-stroke">
          <img
            :src="eventWorkshop"
            alt="Accessibility workshop presentation with audience"
            class="size-full object-cover"
          >
        </article>

        <!-- Advocate image -->
        <article class="impactGrid__image impactGrid__advocate overflow-hidden rounded-3xl lg:rounded-[50px] border border-[#E2E1E1] dark:border-stroke">
          <img
            :src="eventPanelSpeaker"
            alt="Team member speaking on an accessibility panel"
            class="size-full object-cover"
          >
        </article>

        <!-- Green stat -->
        <UCard
          class="impactGrid__green bg-[#DCFBF0] dark:bg-primary-dark/40 ring-0 rounded-3xl lg:rounded-[50px] h-full"
          :ui="{ body: 'flex h-full flex-col justify-end p-6 lg:p-8' }"
        >
          <p class="impactGrid__stat text-primary dark:text-primary-light">
            {{ greenStat.value }}
          </p>
          <hr class="my-4 border-primary/30">
          <p class="text-sm lg:text-base text-primary dark:text-primary-light max-w-xs">
            {{ greenStat.description }}
          </p>
        </UCard>
      </div>

      <div class="flex justify-center mt-12 lg:mt-16">
        <UButton
          to="/partner"
          color="secondary"
          variant="outline"
          label="Help Us Do More"
        />
      </div>
    </UContainer>
  </section>
</template>

<style lang="scss" scoped>
.impactGrid {
  display: grid;
  grid-template-columns: 1fr;
  gap: 1.25rem;

  @media (min-width: 1024px) {
    grid-template-columns: repeat(3, minmax(0, 1fr));
    grid-template-rows: repeat(2, minmax(0, 1fr));
    gap: 1.5rem;
    height: 42rem;
  }

  &__featured {
    min-height: 28rem;

    @media (min-width: 1024px) {
      grid-row: span 2;
      min-height: 0;
    }
  }

  &__pink {
    min-height: 13rem;

    @media (min-width: 1024px) {
      grid-column: 2;
      grid-row: 1;
      min-height: 0;
    }
  }

  &__image {
    min-height: 13rem;

    @media (min-width: 1024px) {
      min-height: 0;
      height: 100%;
    }
  }

  &__community {
    @media (min-width: 1024px) {
      grid-column: 2;
      grid-row: 2;
    }
  }

  &__advocate {
    @media (min-width: 1024px) {
      grid-column: 3;
      grid-row: 1;
    }
  }

  &__green {
    min-height: 13rem;

    @media (min-width: 1024px) {
      grid-column: 3;
      grid-row: 2;
      min-height: 0;
    }
  }

  &__stat {
    font-family: var(--font-heading);
    font-weight: bold;
    font-size: clamp(3rem, 8vw, 4.5rem);
    line-height: 1;
  }
}
</style>
