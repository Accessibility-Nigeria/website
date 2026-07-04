<script setup lang="ts">
import BaseBadge from '~/components/app/BaseBadge.vue'
import partnerEventImg from '~/assets/images/event-partner-presentation.jpg'
</script>

<template>
  <section class="my-16 lg:my-24">
    <UContainer>
      <div
        class="partnerSection flex flex-col-reverse lg:flex-row items-center gap-10 lg:gap-16 px-5 py-10 lg:p-16 border border-[#CCCCCC] dark:border-stroke rounded-[25px] lg:rounded-[50px] bg-gradient-to-r from-[#DCFBF0] via-[#FBDAE1] to-[#FFF3F5] dark:from-[#00462E] dark:via-[#60112C] dark:to-[#560B24]"
      >
        <div class="w-full lg:w-1/2">
          <img
            :src="partnerEventImg"
            alt="Accessibility Nigeria partner presentation at CHAOSScon Africa"
            class="w-full rounded-3xl lg:rounded-[50px] border border-[#E2E1E1] dark:border-stroke"
          >
        </div>

        <div class="w-full lg:w-1/2">
          <BaseBadge>Partner with us</BaseBadge>
          <h2 class="text-black dark:text-white uppercase font-bold mb-6 text-[32px]/10 lg:text-[56px]/14">
            Breaking Barriers Through Collaboration
          </h2>
          <p class="text-base lg:text-lg mb-10">
            Partner with us to make your tech events and digital products accessible. We work with stakeholders, founders, communities, organizations, and event organisers to embed accessibility from the ground up.
          </p>
          <UButton
            to="/partner"
            color="secondary"
            variant="solid"
            label="Partner With Us"
            :ui="{ base: 'bg-dark dark:bg-white dark:text-body' }"
          />
        </div>
      </div>
    </UContainer>
  </section>
</template>
