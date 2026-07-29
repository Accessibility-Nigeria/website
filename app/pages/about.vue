<script setup lang="ts">
import heroImg from '~/assets/images/breaking-barriers-together-banner.jpg'
import missionImg from '~/assets/images/event-workshop-presentation.jpg'
import visionImg from '~/assets/images/accessible-restroom-sign.jpg'
import partnerImg from '~/assets/images/event-partner-presentation.jpg'
import listLogoLight from '~/assets/images/list-logo.svg'
import listLogoDark from '~/assets/images/list-logo-dark.svg'
import teamEjiro from '~/assets/images/team-ejiro-ogenekome.jpg'
import teamKhadija from '~/assets/images/team-khadija-ladan.jpg'
import teamFauziya from '~/assets/images/team-fauziya-mohammed.jpg'
import teamVictoria from '~/assets/images/team-victoria-ottah.jpg'
import teamAbdulqudus from '~/assets/images/team-abdulqudus-abubakre.jpg'
import teamYiga from '~/assets/images/team-yigakpoa-ikpae.jpg'
import BaseBadge from '~/components/app/BaseBadge.vue'

useSeoMeta({
  title: 'About Us',
  description:
    'Learn about Accessibility Nigeria\'s mission, vision, and team—building a digital future where people with disabilities can fully participate in Nigeria\'s tech ecosystem.',
  ogTitle: 'About Accessibility Nigeria',
  ogDescription:
    'Our mission, vision, and the team advocating for accessible digital products and events across Nigeria.',
  twitterCard: 'summary_large_image',
  twitterTitle: 'About Accessibility Nigeria',
  twitterDescription:
    'Our mission, vision, and the team advocating for accessible digital products and events across Nigeria.',
})

defineOgImage('A11yDefault', {
  title: 'About Accessibility Nigeria',
  description: 'Building a digital future for everyone across Nigeria.',
})

const missions = [
  'Partnering with stakeholders, founders, communities, organizations, and events to ensure accessibility is built in—not bolted on',
  'Creating awareness and bringing accessibility enthusiasts across Nigeria together',
  'Driving accessibility in open-source projects, digital products, and tech events through audits, education, and collaboration',
  'Advocating for people with disabilities and enforcing more accessible digital products and events across Nigeria'
];

const visionArray = [
  'We envision a Nigeria where the Disability Act of 2018 is upheld and applied as a standard across every national sector.',
  'In this future, digital products, community projects, and events are built with inclusion at their core—so people with disabilities can actively shape and benefit from Nigeria\'s digital transformation.'
]

const theTeam = [
  {
    name: 'Victoria Ottah (Toria)',
    position: 'Frontline Safety and Accessibility Professional',
    bio: 'Victoria Ottah is a multidisciplinary technologist, pioneering author, open-source maintainer, and frontline safety professional driving Equity, Diversity, Inclusion, and Accessibility (EDIA) across digital and industrial ecosystems. She is the co-founder and lead of Accessibility Nigeria, bridging the digital divide for people with disabilities, and co-author of the first book on digital ethical accessibility, establishing foundational frameworks that unite ethical responsibility, human rights, and inclusive design.\n\nVictoria serves as a Board Member and Accessibility Lead at CHAOSS, embedding W3C/WCAG standards into open-source governance. As a Women Techmakers Ambassador and member of the Sub-Advisory Council, she champions pathways for women in STEM through mentorship, policy advocacy, and community building.\n\nAdding a rare operational dimension to her technical profile, Victoria serves as a Fireman in natural gas and energy operations, strictly adhering to ISO safety and risk management standards. Her frontline work in hazard containment, emergency response, and risk mitigation brings a deep understanding of human factors, crisis management, and system resilience under pressure. Coupled with her background in User Experience (UX) design, she seamlessly connects physical industrial safety with intuitive, accessible software architecture.',
    image: teamVictoria
  },
  {
    name: 'Abdulqudus Abubakre',
    position: 'Co-Founder & Front-end Developer',
    bio: 'Abdulqudus Abubakre is a Senior Frontend Developer and the co-founder of Accessibility Nigeria. He is passionate about building inclusive digital experiences and advocates for accessibility as a fundamental part of creating quality products.\n\nHe leads initiatives that promote accessibility awareness through community events, workshops, mentorship, and collaborations with the wider tech ecosystem. His goal is to help make accessibility knowledge more accessible and inspire individuals and organizations to build technology that works for everyone.',
    image: teamAbdulqudus
  },
  {
    name: 'Yigakpoa L. Ikpae',
    position: 'Marketing Lead',
    bio: 'Yigakpoa L. Ikpae is a Technologist, Researcher, Mentor, and Open-Source Advocate driving social good at the intersection of open data, accessibility, civic tech, and climate justice. Driven by a mission to build digital equity, strengthen community resilience, and foster government transparency, Yiga actively shapes inclusive technology solutions that center marginalized voices.\n\nRecognized as an honorary Global Leader and honored by Google for her contributions to open source, Yiga has brought her expertise to prominent global stages; including speaking at the United Nations Headquarters and participating as a delegate in high-level international convenings across the African Union (AU), UN Geneva, and beyond.\n\nBeyond her advocacy and research, Yiga is committed to cultivating the next generation of tech talent and has served as a mentor with programs like Outreachy, passionately opening doors for underrepresented communities in technology. When she isn’t building or advocating, she unwinds through painting and embracing the good life.',
    image: teamYiga
  },
  {
    name: 'Ejiro Ogenekome',
    position: 'UX Designer',
    bio: 'Ejiro is a cybersecurity professional and open-source advocate passionate about open-source security, cloud technologies, and digital resilience with experience in UI/UX design. She is interested in inclusive technologies, cybersecurity research, open-source security, and advancing security awareness across the African tech ecosystem while building practical expertise in real-world security solutions.',
    image: teamEjiro
  },
  {
    name: 'Khadija Ladan',
    position: 'Social Media',
    bio: 'Khadija is a frontend developer dedicated to building impactful web applications with a focus on accessibility. She is passionate about empowering others in tech and has actively contributed to the community, including serving as a former chapter lead for SCA Minna. Khadija balances her technical side with creative outlets like reading, writing, and crocheting.',
    image: teamKhadija
  },
  {
    name: 'Fauziya Mohammed (Ziya)',
    position: 'Design Lead',
    bio: 'Fauziya Mohammed (Ziya) is the Experience Design Manager at Ashoka Changemakers, leading design initiatives that advance social innovation and empower changemakers worldwide.\n\nWith over eight years of experience, she has crafted impactful user experiences for organizations such as She Code Africa and WriteTech Hub, where she served as Lead Designer, championing women in tech across Africa. A mentor and community leader, Ziya has contributed to initiatives like Women Techmakers, Accessibility Nigeria, Outreachy, GDG Lokoja, and 3MTT, fostering inclusivity and shaping the next generation of designers within Africa\'s tech ecosystem.',
    image: teamFauziya
  }
]

type TeamMember = typeof theTeam[number]

const selectedMember = ref<TeamMember | null>(null)
const isProfileOpen = computed({
  get: () => !!selectedMember.value,
  set: (open) => {
    if (!open) selectedMember.value = null
  }
})

function openProfile(member: TeamMember) {
  selectedMember.value = member
}
</script>

<template>
  <div>
    <UContainer>
      <section class="my-16">
        <BaseBadge>Accessibility Nigeria</BaseBadge>
        <div class="flex flex-col lg:flex-row items-start lg:items-end justify-between w-full">
          <h1 class="text-black dark:text-white uppercase font-bold text-3xl lg:text-5xl">
            <span class="block">Building a Digital</span>
            <span class="block">Future for Everyone</span>
          </h1>
          <p class="text-base w-full lg:w-2/5">
            A nonprofit community bridging the gap between people with disabilities, those who support them, and society—working toward an accessible web and environment across Nigeria.
          </p>
        </div>
        <img :src="heroImg" alt="Accessibility Nigeria community at Breaking Barriers Together" class="rounded-[3xl] lg:rounded-[50px] mx-auto mt-8 lg:mt-16 border border-[#E2E1E1]">
      </section>

      <section class="my-16">
        <div class="mx-auto mb-16 max-w-[720px] text-center">
          <BaseBadge>Our Mission & Vision</BaseBadge>
          <h2 class="text-black dark:text-white uppercase font-bold mb-6 text-3xl lg:text-6xl">Our Commitment to Accessibility and Inclusion</h2>
          <p class="text-base lg:text-lg">
            At Accessibility Nigeria, our commitment begins with a simple belief: technology should empower, not exclude.
          </p>
        </div>

        <div class="flex flex-col lg:flex-row items-center gap-4 lg:gap-8 mb-6 lg:mb-0">
          <div class="block w-full lg:w-1/2">
            <h2 class="text-black dark:text-white uppercase font-bold mb-6 text-2xl lg:text-6xl">Our Mission</h2>
            <p class="text-base lg:text-lg">
              Our mission is to embed accessibility into Nigeria&apos;s tech ecosystem and make inclusive digital products and events the norm. We achieve this by:
            </p>

            <div class="lg:my-8">
              <UCard v-for="(mission, index) in missions" :key="index" class="my-6 bg-[#EEF1F8] dark:bg-body ring-transparent rounded-2xl" :ui="{ body: 'flex gap-4'}">
                <img :src="listLogoLight" alt="" class="dark:hidden shrink-0">
                <img :src="listLogoDark" alt="" class="hidden dark:block shrink-0">
                <p class="text-sm lg:text-base dark:text-white">{{ mission }}</p>
              </UCard>
            </div>
          </div>
          <img :src="missionImg" alt="Accessibility workshop with audience" class="rounded-3xl lg:rounded-[50px] h-[396px] lg:h-[688px] w-full lg:w-1/2 my-4 lg:my-16 object-cover border border-[#E2E1E1]">
        </div>

        <div class="flex flex-col-reverse lg:flex-row items-center gap-8">
          <img :src="visionImg" alt="Accessible restroom signage with Braille and universal access symbols" class="rounded-3xl lg:rounded-[50px] h-[278px] lg:h-[530px] w-full lg:w-1/2 lg:my-16 object-cover border border-[#E2E1E1]">
          <div class="block lg:w-1/2">
            <h2 class="text-black dark:text-white uppercase font-bold mb-6 text-2xl lg:text-6xl">Our Vision</h2>
            
            <div class="my-8">
              <UCard v-for="(vision, index) in visionArray" :key="index" class="my-6 bg-[#EEF1F8] dark:bg-body ring-transparent rounded-2xl" :ui="{ body: 'flex gap-4'}">
                <img :src="listLogoLight" alt="" class="dark:hidden shrink-0">
                <img :src="listLogoDark" alt="" class="hidden dark:block shrink-0">
                <p class="text-sm lg:text-base dark:text-white">{{ vision }}</p>
              </UCard>
            </div>
          </div>
        </div>
      </section>

      <section class="my-16">
        <div class="mx-auto max-w-[720px] mb-14 text-center">
          <BaseBadge>The Core Team</BaseBadge>
          <h2 class="text-black dark:text-white uppercase font-bold mb-6 text-3xl lg:text-6xl">Meet the Team</h2>
          <p class="text-base lg:text-lg">
            Accessibility Nigeria is setting a standard for inclusion that we believe will spread throughout the country—powered by advocates, designers, developers, and community members who share this vision.
          </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full ">
          <div v-for="(team, index) in theTeam" :key="index" class="space-y-2">
            <button
              type="button"
              class="group relative block w-full aspect-4/5 rounded-3xl overflow-hidden mb-4 border border-[#E2E1E1] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary cursor-pointer"
              :aria-label="`View profile for ${team.name}`"
              @click="openProfile(team)"
            >
              <img
                :src="team.image"
                :alt="`Portrait of ${team.name}`"
                class="size-full object-cover object-center transition-transform duration-300 group-hover:scale-105"
              >
              <span class="pointer-events-none absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/50 to-transparent px-4 py-3 text-left text-sm text-white opacity-0 transition-opacity group-hover:opacity-100 group-focus-visible:opacity-100">
                View profile
              </span>
            </button>
            <h2 class="text-black dark:text-white uppercase font-bold text-2xl">{{ team.name }}</h2>
            <p class="text-base font-medium">{{ team.position }}</p>
          </div>
        </div>

        <UModal
          v-model:open="isProfileOpen"
          :close="false"
          :ui="{
            content: 'sm:max-w-lg bg-white dark:bg-[#2B2928] ring-1 ring-[#E2E1E1] dark:ring-stroke',
            header: 'bg-white dark:bg-[#2B2928]',
            body: 'bg-white dark:bg-[#2B2928]'
          }"
        >
          <template v-if="selectedMember" #header="{ close }">
            <div class="flex items-start gap-3 w-full min-w-0">
              <div class="min-w-0 flex-1 space-y-1">
                <h2 class="text-lg sm:text-xl leading-snug text-black dark:text-white uppercase font-bold break-words">
                  {{ selectedMember.name }}
                </h2>
                <p class="text-sm text-body dark:text-gray">
                  {{ selectedMember.position }}
                </p>
              </div>
              <UButton
                icon="i-lucide-x"
                color="neutral"
                variant="ghost"
                size="sm"
                class="shrink-0"
                aria-label="Close profile"
                @click="close"
              />
            </div>
          </template>
          <template v-if="selectedMember" #body>
            <div class="space-y-5">
              <img
                :src="selectedMember.image"
                :alt="`Portrait of ${selectedMember.name}`"
                class="w-full rounded-2xl object-cover object-center max-h-[420px] border border-[#E2E1E1] dark:border-stroke"
              >
              <div class="space-y-3">
                <p
                  v-for="(paragraph, pIndex) in selectedMember.bio.split('\n\n')"
                  :key="pIndex"
                  class="text-sm lg:text-base text-body dark:text-gray"
                >
                  {{ paragraph }}
                </p>
              </div>
            </div>
          </template>
        </UModal>
      </section>

      <section class="partnerSection px-5 py-10 lg:p-16 border border-[#CCCCCC] dark:border-stroke rounded-[25px] lg:rounded-[50px] mb-20 flex flex-col-reverse lg:flex-row items-center gap-10 bg-gradient-to-r from-[#DCFBF0] via-[#FBDAE1] to-[#FFF3F5] dark:from-[#00462E] dark:via-[#60112C] dark:to-[#560B24]">
        <img :src="partnerImg" alt="Accessibility Nigeria partner presentation" class="rounded-3xl h-[334px] lg:h-[573px] w-full lg:w-1/2 mb-4 object-cover border border-[#E2E1E1]">
        <div class="lg:w-1/2">
          <BaseBadge>Partner with us</BaseBadge>
          <h2 class="text-black dark:text-white uppercase font-bold mb-6 text-[32px]/10 lg:text-[56px]/14">Breaking Barriers Through Collaboration</h2>
          <p class="text-base mb-10">
            Partner with us to make your tech events and digital products accessible. From sign language provision and venue audits to sensitivity training and slide reviews—we help partners deliver truly inclusive experiences.
          </p>
          <UButton to="/partner" label="Partner With Us" :ui="{base: 'bg-dark dark:bg-white dark:text-body'}" />
        </div>
      </section>
    </UContainer>
  </div>
</template>