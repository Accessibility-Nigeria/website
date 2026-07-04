<script setup lang="ts">
import BaseBadge from '~/components/app/BaseBadge.vue'
import teamVolunteersImg from '~/assets/images/team-volunteers-outdoor.jpg'
</script>

<template>
  <section class="my-16 lg:my-24">
    <UContainer>
      <div class="flex flex-col lg:flex-row items-center gap-10 lg:gap-16">
        <div class="w-full lg:w-1/2">
          <BaseBadge>Who we are</BaseBadge>
          <h2 class="text-black dark:text-white uppercase font-bold mb-6 text-3xl lg:text-5xl">
            <span class="block">Building a Digital</span>
            <span class="block">Future for Everyone</span>
          </h2>
          <p class="text-base lg:text-lg mb-10">
            Accessibility Nigeria is a nonprofit community that bridges the gap between people with disabilities, those who support them directly, and wider society. We advocate for people with disabilities, raise awareness, and unite accessibility enthusiasts across Nigeria with the goal of creating an accessible web and environment for all.
          </p>
          <UButton
            to="/about"
            color="secondary"
            variant="outline"
            label="Learn More About Us"
          />
        </div>

        <div class="w-full lg:w-1/2">
          <img
            :src="teamVolunteersImg"
            alt="Accessibility Nigeria volunteers at a community event"
            class="w-full rounded-3xl lg:rounded-[50px] border border-[#E2E1E1] dark:border-stroke"
          >
        </div>
      </div>
    </UContainer>
  </section>
</template>
