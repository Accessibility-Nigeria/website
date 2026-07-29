<script setup lang="ts">
import faqImg from '~/assets/images/event-workshop-presentation.jpg'
import contactImg from '~/assets/images/team-volunteers-outdoor.jpg'
import BaseBadge from '~/components/app/BaseBadge.vue'

useSeoMeta({
  title: 'Contact & Support',
  description:
    'Get in touch with Accessibility Nigeria. Browse FAQs about our programmes, partnerships, and accessibility work—or reach out to our team.',
  ogTitle: 'Contact & Support | Accessibility Nigeria',
  ogDescription:
    'Questions about our mission, programmes, or partnerships? Browse FAQs or contact the Accessibility Nigeria team.',
  twitterCard: 'summary_large_image',
  twitterTitle: 'Contact & Support | Accessibility Nigeria',
  twitterDescription:
    'Questions about our mission, programmes, or partnerships? Browse FAQs or contact the Accessibility Nigeria team.',
})

defineOgImage('A11yDefault', {
  title: 'Contact & Support',
  description: 'FAQs and contact for Accessibility Nigeria.',
})

const contactFormUrl = 'https://docs.google.com/forms/d/e/1FAIpQLSeg0otcmvPFUG_lkk1QEqY0PRI0bBixuFm9S2K8-RSCDgEbJA/viewform'
const contactFormEmbedUrl = `${contactFormUrl}?embedded=true`

const socialLinks = [
  { icon: 'i-simple-icons-github', label: 'GitHub', to: 'https://github.com/Accessibility-Nigeria' },
  { icon: 'i-simple-icons-x', label: 'X', to: 'https://x.com/A11yNGN' },
  { icon: 'i-simple-icons-linkedin', label: 'LinkedIn', to: 'https://www.linkedin.com/in/accessibility-nigeria-939681297/' }
]

const faqItems = [
  {
    value: 'founded',
    label: 'Why was Accessibility Nigeria founded?',
    content: 'Accessibility Nigeria was founded to bridge the gap between people with disabilities, those who support them directly, and wider society. Co-founders Abdulqudus Abubakre and Victoria Ottah recognised a significant gap in accessibility awareness in Nigeria and built a community dedicated to promoting inclusion across the country.'
  },
  {
    value: 'work',
    label: 'What kind of work do you do?',
    content: 'We advocate for people with disabilities, create awareness, and unite accessibility enthusiasts across Nigeria. Our work includes partnering on accessible events (like CHAOSS Africa and Untitled Design Conference), publishing accessible formats of key documents such as the Nigeria Disability Act, and hosting our Breaking Barriers Together virtual series.'
  },
  {
    value: 'partner',
    label: 'Who can partner with Accessibility Nigeria?',
    content: 'Stakeholders, founders, communities, organizations, and event organisers can partner with us. We help partners make tech events and digital products accessible—providing sign language interpreters, venue audits, sensitivity training, slide reviews, and on-the-ground support to ensure inclusive experiences.'
  },
  {
    value: 'support-pwd',
    label: 'How does Accessibility Nigeria support people with disabilities directly?',
    content: 'We introduce people with disabilities to open-source contributions and tech communities, create accessible versions of important public documents, and organise events designed with inclusion at the core. There is no building for people with disabilities without people with disabilities.'
  },
  {
    value: 'disability-act',
    label: 'What did you do for the Nigeria Disability Act?',
    content: 'The Disability Act was enacted in 2019, but the publicly available copy was a scanned document—inaccessible to screen reader users. Accessibility Nigeria created an accessible digital copy in Word and PDF formats so people with visual disabilities can access these laws. View the document at https://drive.google.com/file/d/1XOS2lrs3mL4V7NdG9vuPqppCyK1kpKKQ/view'
  },
  {
    value: 'breaking-barriers',
    label: 'What is Breaking Barriers Together?',
    content: 'Breaking Barriers Together is a virtual event series founded on 30 November 2023. Professionals from various fields are invited to discuss how to integrate accessibility while answering questions from attendees. The series has hosted five episodes so far, with more on the way.'
  },
  {
    value: 'nigeria-only',
    label: 'Do you only work in Nigeria?',
    content: 'Our primary focus is Nigeria\'s tech ecosystem and making the Disability Act of 2018 a practical standard across sectors. We also collaborate with international open-source communities and partners like CHAOSS Africa to advance accessibility more broadly.'
  }
]

useSchemaOrg(
  faqItems.map(item =>
    defineQuestion({
      name: item.label,
      acceptedAnswer: item.content,
    }),
  ),
)
</script>

<template>
  <div>
    <UContainer>
      <!-- FAQ intro -->
      <section class="my-16 text-center">
        <div class="mx-auto max-w-[720px]">
          <BaseBadge>Frequently Asked Questions</BaseBadge>
          <h1 class="text-black dark:text-white uppercase font-bold mb-6 text-3xl lg:text-6xl">
            All You Need to Know About Our Organisation
          </h1>
          <p class="text-base lg:text-lg">
            Have questions about our mission, programmes, or how to get involved? Browse our FAQs below or reach out — we're always happy to help.
          </p>
        </div>
      </section>

      <!-- FAQ -->
      <section class="my-16 lg:my-24">
        <div class="flex flex-col lg:flex-row gap-10 lg:gap-16">
          <div class="w-full lg:w-2/5 space-y-8">
            <img
              :src="faqImg"
              alt="Accessibility workshop presentation"
              class="rounded-3xl lg:rounded-[50px] w-full border border-[#E2E1E1]"
            >
            <div class="flex flex-wrap items-center gap-4">
              <p class="text-black dark:text-white uppercase font-bold text-sm lg:text-base">
                Follow us on socials
              </p>
              <div class="flex gap-3">
                <a
                  v-for="social in socialLinks"
                  :key="social.label"
                  :href="social.to"
                  target="_blank"
                  rel="noopener noreferrer"
                  :aria-label="social.label"
                  class="flex items-center justify-center size-10 rounded-full bg-primary-light text-primary hover:bg-primary hover:text-white transition-colors"
                >
                  <UIcon :name="social.icon" class="size-5" />
                </a>
              </div>
            </div>
          </div>

          <div class="w-full lg:w-3/5">
            <div class="bg-white dark:bg-[#2B2928] rounded-3xl lg:rounded-[40px] p-5 lg:p-8 shadow-[0_4px_24px_#083D2B1A] border border-[#E2E1E1] dark:border-stroke">
              <UAccordion
                :items="faqItems"
                type="multiple"
                :unmount-on-hide="false"
                :ui="{
                  item: 'border-0 mb-3 last:mb-0',
                  trigger: 'bg-[#EEF1F8] dark:bg-body rounded-2xl px-5 py-4 lg:px-6 lg:py-5 gap-4 justify-between',
                  label: 'font-bold text-sm lg:text-base text-black dark:text-white text-left',
                  content: 'px-5 lg:px-6',
                  body: 'text-sm lg:text-base pb-3'
                }"
              >
                <template #trailing="{ open }">
                  <span class="flex shrink-0 items-center justify-center size-8 rounded-full bg-primary-light text-primary">
                    <UIcon :name="open ? 'i-lucide-minus' : 'i-lucide-plus'" class="size-4" />
                  </span>
                </template>
              </UAccordion>
            </div>
          </div>
        </div>
      </section>

      <!-- Support CTA -->
      <section
        class="supportSection px-5 py-12 lg:p-16 border border-[#CCCCCC] dark:border-stroke rounded-[25px] lg:rounded-[50px] my-16 text-center bg-gradient-to-r from-[#DCFBF0] via-[#FBDAE1] to-[#FFF3F5] dark:from-[#00462E] dark:via-[#60112C] dark:to-[#560B24]"
      >
        <h2 class="text-black dark:text-white uppercase font-bold mb-6 text-2xl lg:text-4xl max-w-2xl mx-auto">
          Got More Questions? We're Here to Help
        </h2>
        <p class="text-base lg:text-lg mb-10 max-w-xl mx-auto">
          Join our growing community of advocates, designers, and developers building a more accessible Nigeria — one product, event, and conversation at a time.
        </p>
        <UButton
          to="/partner"
          color="secondary"
          variant="solid"
          label="Join Our Community"
          :ui="{ base: 'bg-dark dark:bg-white dark:text-body' }"
        />
      </section>

      <!-- Contact -->
      <section id="contact-form" class="my-16 lg:my-24 mb-20">
        <div class="flex flex-col lg:flex-row gap-10 lg:gap-16">
          <div class="w-full lg:w-2/5 space-y-8">
            <div>
              <BaseBadge>Contact Us</BaseBadge>
              <h2 class="text-black dark:text-white uppercase font-bold text-3xl lg:text-5xl">
                Let's Build Accessibility Together
              </h2>
            </div>
            <img
              :src="contactImg"
              alt="Accessibility Nigeria volunteers"
              class="rounded-3xl lg:rounded-[50px] w-full border border-[#E2E1E1]"
            >
          </div>

          <div class="w-full lg:w-3/5 space-y-8">
            <p class="text-base lg:text-lg">
              Whether you have a question, want to collaborate, or need support with accessibility — we'd love to hear from you. Fill out the form and a member of our team will get back to you shortly.
            </p>
            <p class="text-sm lg:text-base">
              Prefer not to use the embedded form?
              <a
                :href="contactFormUrl"
                target="_blank"
                rel="noopener noreferrer"
                class="underline font-medium text-primary dark:text-primary-light"
              >
                Open the contact form in a new tab
              </a>.
            </p>
            <div class="bg-white dark:bg-[#2B2928] rounded-3xl lg:rounded-[40px] p-2 sm:p-4 shadow-[0_4px_24px_#083D2B1A] border border-[#E2E1E1] dark:border-stroke overflow-hidden">
              <iframe
                :src="contactFormEmbedUrl"
                title="a11yNG Contact Us form"
                class="w-full min-h-[720px] sm:min-h-[800px] rounded-2xl lg:rounded-[32px] border-0"
                loading="lazy"
              >
                Loading contact form…
              </iframe>
            </div>
          </div>
        </div>
      </section>
    </UContainer>
  </div>
</template>
