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
      <div ref="heroTagline" class="hero-container hero">
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

      <div class="container-index">
        <div class=" text-justify grid col-start-1 col-end-5 row-start-1 row-end-1 h-full items-center">
          <h2 class="font-thin">
            <span class="text-blue-700">{{ t('about_web.highlight') }}</span> {{
              t('about_web.text')
            }}
          </h2>
        </div>

        <div class="col-start-1 col-end-3 row-start-2 row-end-4">
          <div class="flex flex-col h-full justify-center">
            <div class="flex flex-col gap-6 ml-12 max-w-xl">
              <h2>{{ t('profile.big_text') }}</h2>
              <p>
                {{ t('profile.description') }}
              </p>
            </div>
          </div>
        </div>

        <div
            class="col-start-3 col-end-5 row-start-2 row-end-4 grid grid-cols-1 grid-rows-3 items-center justify-self-center">
          <div v-for="{title, description} in taglines" class="flex flex-col gap-3 p-3 max-w-xl h-full justify-between">
            <div class="flex flex-col gap-3">
              <h2>{{ title }}</h2>
              <p>{{ description }}</p>
            </div>
            <hr>
          </div>
        </div>

        <div class="col-start-1 col-end-5 row-start-4 row-end-5 grid grid-cols-4 grid-rows-1">
          <div class="col-start-1 col-end-3 h-full w-full items-center p-3 flex ml-12">
            <h2>{{ t('profile.experience') }}</h2>
          </div>
          <ul class="col-start-3 col-end-5 grid gap-3 grid-cols-3">
            <li class="flex justify-center items-center">
              <img src="/public/company-logo/Sena.svg" alt="sena" class="w-36">
            </li>
            <li class="flex justify-center items-center">
              <img src="/public/company-logo/Samsung.svg" alt="samsung" class="w-36">
            </li>
            <li class="flex justify-center items-center">
              <img src="/public/company-logo/H&M.svg" alt="h&m" class="w-36">
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
.hero {
  @apply flex justify-center items-center ;

}

.tagline-box {
  @apply flex flex-col gap-4;

  .head-tagline {
    @apply flex flex-row gap-6 items-center ;

    p {
      @apply text-lg font-medium;
    }
  }
}

.container-index {
  @apply min-h-screen px-16 grid grid-cols-4 grid-rows-4;
}
</style>