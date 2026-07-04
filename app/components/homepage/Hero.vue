<script setup lang="ts">
import breakingBarriersBanner from '~/assets/images/breaking-barriers-together-banner.jpg'
import eventWorkshop from '~/assets/images/event-workshop-presentation.jpg'
import communityGroup from '~/assets/images/community-group-photo.jpg'
import eventPartner from '~/assets/images/event-partner-presentation.jpg'
import communityWorkshop from '~/assets/images/community-silent-workshop.jpg'

const items = [
  { src: breakingBarriersBanner, alt: 'Accessibility Nigeria team member with community partner at Breaking Barriers Together event' },
  { src: eventWorkshop, alt: 'Accessibility workshop presentation with audience' },
  { src: communityGroup, alt: 'Accessibility Nigeria community group at an event' },
  { src: eventPartner, alt: 'Accessibility Nigeria partner presentation at CHAOSScon Africa' },
  { src: communityWorkshop, alt: 'Community workshop session with participants' },
]
</script>

<template>
  <div class="HomepageHero relative">
    <div
      class="pointer-events-none absolute inset-x-0 bottom-0 top-[calc(-1*var(--ui-header-height))] bg-gradient-to-b from-[#DCFBF0] via-[#FBDAE1] to-[#FFF3F5] dark:from-[#00462E] dark:via-[#60112C] dark:to-[#560B24]"
      aria-hidden="true"
    />
    <div class="z-1 relative text-center py-10 md:py-20">
      <UContainer>
        <div class="mx-auto max-w-[720px]">
          <h1 class="text-black dark:text-white uppercase font-bold mb-6 text-3xl sm:text-4xl lg:text-5xl">
            Breaking Barriers Building Access
          </h1>
          <p class="text-base sm:text-lg">
            Accessibility Nigeria is a nonprofit community bridging the gap between people with disabilities, those who support them, and society—advocating for inclusion and building an accessible web and environment across Nigeria.
          </p>
          <div class="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-stretch sm:items-center mt-12 w-full">
            <UButton
              to="/partner"
              color="secondary"
              variant="solid"
              label="Join Our Community"
              class="w-full sm:w-auto justify-center"
            />
            <UButton
              to="/donate"
              color="secondary"
              variant="outline"
              label="Make A Donation"
              class="w-full sm:w-auto justify-center"
            />
          </div>
        </div>

        <UCarousel
          v-slot="{ item }"
          dots
          :items="items"
          class="heroCarousel w-full max-w-full mx-auto my-16"
          :ui="{ dots: '-bottom-16', dot: 'size-4', viewport: 'overflow-hidden' }"
        >
          <div class="heroCarousel__slide">
            <img :src="item.src" :alt="item.alt" class="heroCarousel__image">
          </div>
        </UCarousel>
      </UContainer>
    </div>
  </div>
</template>


<style lang="scss" scoped>
.heroCarousel {
  &__slide {
    aspect-ratio: 3 / 2;
    width: 100%;
    overflow: hidden;
    border-radius: 1.5rem;

    @media (min-width: 640px) {
      border-radius: 3.125rem;
    }
  }

  &__image {
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center;
  }
}
</style>

