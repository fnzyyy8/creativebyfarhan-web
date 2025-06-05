<script setup lang="ts">
import {useSectionObservers} from "~/composables/useSectionObservers";
import {useAnimate} from "~/composables/useAnimateHero";
import RunningExperience from "~/components/index-component/running-experience.vue";
import {Swiper,SwiperSlide} from "swiper/vue";
import TaglinesComponent from "~/components/index-component/taglines-component.vue";

const {timeJkt} = useTimeJkt()
const {heroTagline,taglineRef} = useAnimate()
const {pageSection} = useSectionObservers()
const {t} = useI18n()


</script>

<template>
  <section ref="pageSection">
    <section class="dark-area">
      <div ref="heroTagline" class="grid-container section-area hero-container">
        <div class="tagline-box">
          <h1>Creative By Farhan</h1>
          <ul class="head-tagline">
            <li>Design</li>
            <li>Define</li>
            <li>Develop</li>
          </ul>
        </div>
        <div class="text-white col-start-1 row-start-4 row-end-5 flex justify-items-center flex-col">
          <p>Jakarta, Indonesia</p>
          <p class="font-bold">( {{ timeJkt }} )</p>
        </div>
      </div>
    </section>
    <section ref="taglineRef">
      <div class="grid-container section-area about-web">
        <div class=" text-justify grid col-start-1 col-end-5 row-start-1 row-end-1 h-full items-center">
          <h2 class="font-thin">
            <span class="text-blue-700">{{ t('about_web.highlight') }}</span> {{
              t('about_web.text')
            }}
          </h2>
        </div>

        <div class="about-me">
          <div class="flex flex-col gap-3 ml-12 max-w-xl">
            <h2>{{ t('profile.big_text') }}</h2>
            <p>
              {{ t('profile.description') }}
            </p>
          </div>
        </div>

        <taglines-component/>

        <div class="col-start-1 col-end-5 row-start-4 row-end-4 flex flex-col justify-center gap-6">
          <h2 class="ml-12">PAST EXPERIENCE</h2>
          <RunningExperience/>
        </div>
      </div>
    </section>
<!--    <section>-->
<!--      <div class="grid-container section-area">-->
<!--        <div class="col-start-1 col-end-5 row-start-1 row-end-3 bg-gray-500 flex flex-col items-center gap-6">-->
<!--          <h2>CERTIFICATE</h2>-->
<!--          <swiper  :slides-per-view="3"-->
<!--                   :space-between="50">-->
<!--            <swiper-slide>-->
<!--              <h1>Hello</h1>-->
<!--            </swiper-slide>-->
<!--            <swiper-slide>-->
<!--              <h1>Hello</h1>-->
<!--            </swiper-slide>-->
<!--            <swiper-slide>-->
<!--              <h1>Hello</h1>-->
<!--            </swiper-slide>-->
<!--            <swiper-slide>-->
<!--              <h1>Hello</h1>-->
<!--            </swiper-slide>-->
<!--          </swiper>-->
<!--        </div>-->
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

.tagline-detail-about{
  @apply flex flex-row gap-6 items-center bg-gray-100 shadow-md p-3 rounded-2xl cursor-pointer;
}

.about-me{
  @apply col-start-1 col-end-3 row-start-2 row-end-4 flex items-center;
}


</style>