<script setup lang="ts">
import logoImg from '~/assets/images/logo-white.svg'

// Legal pages (privacy, terms, cookies) are not published yet — omit until they exist
// so crawlers and users are not sent to 404s.
const items: { label: string, to: string, target?: string }[] = []

const columns = [
  {
    label: 'Quick links',
    children: [
      {
        label: 'About Us',
        to: '/about',
      },
      {
        label: 'Partner With Us',
        to: '/partner',
      },
      {
        label: 'Contact & Support',
        to: '/contact',
      },
    ]
  },
  {
    label: 'Connect',
    children: [
      {
        label: 'Github',
        icon: 'i-simple-icons-github',
        to: 'https://github.com/Accessibility-Nigeria',
        target: '_blank'
      },
      {
        label: 'X',
        icon: 'i-simple-icons-x',
        to: 'https://x.com/A11yNGN',
        target: '_blank'
      },
      {
        label: 'LinkedIn',
        icon: 'i-simple-icons-linkedin',
        to: 'https://www.linkedin.com/in/accessibility-nigeria-939681297/',
        target: '_blank'
      },
    ]
  }
]
</script>

<template>
  <UFooter :ui="{ root: 'bg-dark dark:bg-body text-white' }">
    <template #top>
      <div class="w-full max-w-(--ui-container) mx-auto px-4 sm:px-6 lg:px-8">
        <div class="border border-body dark:border-stroke rounded-4xl p-8 flex flex-col lg:flex-row justify-between lg:items-center">
          <img :src="logoImg" alt="Accessibility Nigeria" class="mb-16 w-7/10 lg:w-[unset]" />
          <UFooterColumns 
            :columns="columns"
            :ui="{ 
              root: 'grid-cols-2 xl:grid-cols-2',
              center: 'gap-20 md:grid',
              link: 'text-[#FFF] hover:text-white font-light text-base',
              label: 'text-lg',
              linkLeadingIcon: 'size-6 mr-2',
              linkLabelExternalIcon: 'hidden',
              list: 'space-y-6'
            }"
          />
        </div>
      </div>
    </template>

    <template #left>
      <p class="text-base">© {{ new Date().getFullYear() }} Accessibility Nigeria. All rights reserved.</p>
    </template>

    <template #right>
      <UNavigationMenu
        v-if="items.length"
        :items="items"
        variant="link"
        :ui="{ 
          link: 'text-white underline font-normal',
          linkLabelExternalIcon: 'hidden',
        }"
      />
    </template>
  </UFooter>
</template>
