<script setup lang="ts">
import logoImg from '~/assets/images/logo-white.svg'

const items = [
  {
    label: 'Privacy Policy',
    to: '/privacy-policy',
    target: '_blank'
  },
  {
    label: 'Terms of Service',
    to: '/terms-of-service',
    target: '_blank'
  },
  {
    label: 'Cookies Settings',
    to: '/cookies',
    target: '_blank'
  }
]

const columns = [
  {
    label: 'Quick links',
    children: [
      {
        label: 'About Us',
        to: '/about',
        target: '_blank'
      },
      {
        label: 'Make a Donation',
        to: '/donation',
        target: '_blank'
      },
      {
        label: 'Get Involved',
        to: '/get-involved',
        target: '_blank'
      },
      {
        label: 'Contact & Support',
        to: '/contact',
        target: '_blank'
      },
    ]
  },
  {
    label: 'Quick links',
    children: [
      {
        label: 'Github',
        icon: 'i-simple-icons-github',
        to: '/',
        target: '_blank'
      },
      {
        label: 'X',
        icon: 'i-simple-icons-x',
        to: '/',
        target: '_blank'
      },
      {
        label: 'LinkedIn',
        icon: 'i-simple-icons-linkedin',
        to: '/',
        target: '_blank'
      },
      {
        label: 'Youtube',
        icon: 'i-simple-icons-youtube',
        to: '/',
        target: '_blank'
      },
    ]
  }
]
</script>

<template>
  <UFooter :ui="{ root: 'bg-dark text-white' }">
    <template #top>
      <div class="w-full max-w-(--ui-container) mx-auto px-4 sm:px-6 lg:px-8">
        <div class="border border-body rounded-4xl p-8 flex justify-between items-center">
          <img :src="logoImg" alt="a11yng" />
          <UFooterColumns 
            :columns="columns"
            :ui="{ 
              root: 'xl:grid-cols-2',
              center: 'gap-20',
              link: 'text-white font-normal text-base',
              label: 'text-lg',
              linkLeadingIcon: 'size-6',
              list: 'space-y-6',
            }"
          />
        </div>
      </div>
    </template>

    <template #left>
      <p class="text-base">© {{ new Date().getFullYear() }} AccessibilityNigeria. All rights reserved.</p>
    </template>
    

    <template #right>
      <UNavigationMenu :items="items" variant="link" :ui="{ link: 'text-white underline font-normal' }" />
    </template>
  </UFooter>
</template>