<script setup lang="ts">
const colorMode = useColorMode()

const isDark = computed({
  get() {
    return colorMode.value === 'dark'
  },
  set(_isDark) {
    colorMode.preference = _isDark ? 'dark' : 'light'
  }
})

import carouselImg1 from '~/assets/images/homepage-hero-image.jpg'

const items = [
  carouselImg1,
  'https://picsum.photos/1210/810/?random=2',
  'https://picsum.photos/1210/810/?random=3',
  'https://picsum.photos/1210/810/?random=4',
  'https://picsum.photos/1210/810/?random=5',
  'https://picsum.photos/1210/810/?random=6'
]
</script>

<template>
  <div :class="['HomepageHero relative', { 'HomepageHero--dark': isDark }]">
    <div class="z-1 relative text-center py-10 md:py-20">
      <UContainer>
        <div class="mx-auto max-w-[720px]">
          <h1 class="text-black dark:text-white uppercase font-bold mb-6">Breaking Barriers Building Access</h1>
          <p class="text-lg">
            Accessibility Nigeria is reimagining the Digital Space and technology,  where people with disabilities are Co-creators and not an afterthought.
          </p>
          <div class="flex gap-6 justify-center align-center mt-12">
            <UButton to="/partner" color="secondary" variant="solid" label="Join Our Community" />
            <UButton to="/partner" color="secondary" variant="outline" label="Make A Donation" />
          </div>
        </div>

        <UCarousel v-slot="{ item }" dots :items="items" class="w-full mx-auto my-16" :ui="{ dots: '-bottom-16', dot: 'size-4' }">
          <img :src="item" class="rounded-[50px] mx-auto">
        </UCarousel>
      </UContainer>
    </div>
  </div>
</template>


<style lang="scss" scoped>
.HomepageHero {
  &::after {
    content: "";
    position: absolute;
    top: calc(-1 * var(--ui-header-height));;
    left: 0;
    bottom: 0;
    width: 100%;
    background: linear-gradient(180deg, #DCFBF0 -2.22%, #FBDAE1 50.15%, #FFF3F5 100%);
  }

  &--dark {
    &::after {
      background: linear-gradient(180deg, #00462E -2.22%, #60112C 50.15%, #560B24 100%);
    }
  }
}
</style>

