<script setup lang="ts">
import gsap from 'gsap'
import {ScrollTrigger} from "gsap/ScrollTrigger";
const heroTagline = ref()

const {t} = useI18n()
import {useSectionObservers} from "~/composables/useSectionObservers";


const {pageSection} = useSectionObservers()

const taglines = computed(() => t('profile.taglines'))

const animateHero = () => {
  gsap.registerPlugin(ScrollTrigger)

  const tl = gsap.timeline()
  const items = heroTagline.value.querySelectorAll('li')
  const head = heroTagline.value.querySelectorAll('h1')


  tl.from(head, {
    duration: 0.3,
    x: -20,
    opacity: 0,
    ease: "expo.out"
  }).from(items, {
    duration: 0.3,
    ease: 'expo.out',
    x: -10,
    opacity: 0,
    stagger: 0.3
  })

}

onMounted(() => {
  animateHero()
})

</script>

<template>
  <section ref="pageSection">
    <section class="black-area">
      <div ref="heroTagline" class="grid-container section-area hero-container ">
        <div class="tagline-box">
          <h1>Creative By Farhan</h1>
          <ul class="head-tagline">
            <li>Design</li>
            <li>Define</li>
            <li>Develop</li>
          </ul>
        </div>
      </div>
    </section>
    <section>

      <div class="grid-container section-area">
        <div class=" text-justify grid col-start-1 col-end-5 row-start-1 row-end-1 h-full items-center">
          <h2 class="font-thin">
            <span class="text-blue-700">{{ t('about_web.highlight') }}</span> {{
              t('about_web.text')
            }}
          </h2>
        </div>

        <div class="col-start-1 col-end-3 row-start-2 row-end-4 flex items-center">
          <div class="flex flex-col gap-3 ml-12 max-w-xl">
            <h2>{{ t('profile.big_text') }}</h2>
            <p>
              {{ t('profile.description') }}
            </p>
          </div>
        </div>

        <div
            class="col-start-3 col-end-5 row-start-2 row-end-4 grid grid-cols-1 grid-rows-3 gap-3">
          <div v-for="{number,title, description} in taglines" class="flex flex-row gap-6 items-center bg-gray-100 shadow-md p-3 rounded-2xl">
            <h1 class="text-blue-700">{{ number }}</h1>
            <div class="flex flex-col justify-center gap-3">
              <h2>{{ title }}</h2>
              <p class="max-w-full">{{ description }}</p>
            </div>
          </div>
        </div>

        <div class="col-start-1 col-end-5 row-start-4 row-end-4 flex flex-col items-center justify-center gap-3">
          <ul class="flex gap-32">
            <li class="flex justify-center items-center">
              <img src="/public/company-logo/Sena.svg" alt="sena" class="w-32">
            </li>
            <li class="flex justify-center items-center">
              <img src="/public/company-logo/Samsung.svg" alt="samsung" class="w-32">
            </li>
            <li class="flex justify-center items-center">
              <img src="/public/company-logo/H&M.svg" alt="h&m" class="w-32">
            </li>
          </ul>
        </div>
      </div>

    </section>
    <!--    <section>-->

    <!--      <div class="container-index">-->


    <!--      </div>-->

    <!--    </section>-->
  </section>
</template>

<style scoped>

.tagline-box {
  @apply flex flex-col gap-4 col-start-2 col-end-4 row-start-2 row-end-4 justify-center justify-self-center;

  .head-tagline {
    @apply flex flex-row gap-6 items-center ;

    p {
      @apply text-lg font-medium;
    }
  }
}


</style>