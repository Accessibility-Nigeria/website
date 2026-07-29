<script setup lang="ts">
withDefaults(defineProps<{
  title?: string
  description?: string
}>(), {
  title: 'Accessibility Nigeria',
  description: 'Breaking barriers and building access across Nigeria.',
})
</script>

<template>
  <div class="w-full h-full flex flex-col justify-between p-16 bg-[#083D2B] text-white">
    <p class="text-3xl font-semibold tracking-wide text-[#DCFBF0]">
      a11yNG
    </p>
    <div class="flex flex-col gap-6">
      <h1 class="text-6xl font-bold leading-tight">
        {{ title }}
      </h1>
      <p class="text-2xl text-[#FBDAE1] leading-snug max-w-[90%]">
        {{ description }}
      </p>
    </div>
    <p class="text-xl text-[#DCFBF0]">
      a11yng.org
    </p>
  </div>
</template>
