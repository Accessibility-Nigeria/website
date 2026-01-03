<script setup lang="ts">
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
  <UHeader :ui="{root: 'bg-transparent border-none'}">
    <template #title>
      <NuxtLink to="/" class="flex items-center gap-2">
        <img src="~/assets/images/logo.svg" alt="a11yng" class="h-8 md:h-10" />
      </NuxtLink>
    </template>

    <UNavigationMenu :items="items" variant="link" :ui="{ link: 'text-body font-normal hover:text-dark data-[state=open]:text-dark' }" />

    <template #right>
      <div class="hidden md:flex items-center">
        <UButton to="/partner" color="secondary" variant="solid" label="Partner With Us!!" />
      </div>
    </template>
  </UHeader>
</template>
