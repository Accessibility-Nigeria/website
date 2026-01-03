<script setup lang="ts">
const { y: scrollY } = useWindowScroll()
const colorMode = useColorMode()

const isScrolled = computed(() => scrollY.value > 150)

const isDark = computed({
  get() {
    return colorMode.value === 'dark'
  },
  set(_isDark) {
    colorMode.preference = _isDark ? 'dark' : 'light'
  }
})

import logoDark from '~/assets/images/logo-dark.svg'
import logoLight from '~/assets/images/logo.svg'
const logoImg = computed(() => isDark.value ? logoDark : logoLight)

const items = [
  {
    label: 'About Us',
    to: '/about'
  },
  {
    label: 'Make Donations',
    to: '/donations'
  },
  {
    label: 'Get Involved',
    children: [
      {
        label: 'Volunteer',
        to: '/volunteer',
        description: 'Join our team of volunteers'
      },
      {
        label: 'Mentorship',
        to: '/mentorship',
        description: 'Provide guidance and support'
      }
    ]
  },
  {
    label: 'Contact & Support',
    to: '/contact'
  }
]
</script>

<template>
  <UHeader :ui="{ root: isScrolled ? 'bg-white/90 dark:bg-black/90 backdrop-blur-md border-b border-gray-200 transition-all duration-300' : 'bg-transparent backdrop-blur-none border-none transition-all duration-300' }">
    <template #title>
      <NuxtLink to="/" class="flex items-center gap-2">
        <img :src="logoImg" alt="a11yng" class="h-8 md:h-10" />
      </NuxtLink>
    </template>

    <UNavigationMenu :items="items" variant="link" :ui="{ link: 'text-body font-normal hover:text-dark dark:text-white hover:dark:text-gray-300 data-[state=open]:text-dark' }" />

    <template #right>
      <div class="hidden md:flex items-center">
        <ClientOnly v-if="!colorMode?.forced">
          <UButton
            :icon="isDark ? 'i-lucide-moon' : 'i-lucide-sun'"
            color="secondary"
            variant="ghost"
            :aria-label="`Switch to ${isDark ? 'light' : 'dark'} mode`"
            @click="isDark = !isDark"
            class="mr-3"
          />
        </ClientOnly>
        <UButton to="/partner" color="secondary" variant="solid" label="Partner With Us!!" />
      </div>
    </template>
  </UHeader>
</template>
