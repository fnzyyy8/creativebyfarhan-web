<script lang="ts" setup>
const {t, localeRoute} = useI18n()
import {vGsapVue} from "v-gsap-nuxt/vue";

const taglines = computed(() => t('profile.taglines'))
const {y} = useWindowScroll()

</script>


<template>

  <section id="heroIndex">
    <hero-section class="hero-section">
      <div class="grid grid-rows-2 min-h-screen">
        <div class="tagline-box">
          <h1 v-gsap.delay-100.fromTo="[{opacity:0,x:-20},{opacity:1,x:0}]">Creative By Farhan</h1>
          <div class="head-tagline">
            <p v-gsap.delay-200.fromTo="[{opacity:0,x:-20},{opacity:1,x:0}]">Design</p>
            <p v-gsap.delay-300.fromTo="[{opacity:0,x:-20},{opacity:1,x:0}]">Define</p>
            <p v-gsap.delay-400.fromTo="[{opacity:0,x:-20},{opacity:1,x:0}]">Develop</p>
          </div>
        </div>
        <div class="overflow-hidden flex flex-col items-center justify-end">
          <div class="resume-and-down">
            <a :href="($t('resume.link') as string)"
               target="_blank">
              <span class="mr-3">{{ $t('resume.title') }}</span>
              <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24">
                <!-- Icon from Material Symbols by Google - https://github.com/google/material-design-icons/blob/master/LICENSE -->
                <path fill="currentColor" d="m14 18l-1.4-1.45L16.15 13H4v-2h12.15L12.6 7.45L14 6l6 6z"/>
              </svg>
            </a>
            <a href="#aboutIndex">
              <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24">
                <!-- Icon from Material Symbols by Google - https://github.com/google/material-design-icons/blob/master/LICENSE -->
                <path fill="currentColor" d="M11 4v12.175l-5.6-5.6L4 12l8 8l8-8l-1.4-1.425l-5.6 5.6V4z"/>
              </svg>
            </a>
          </div>
          <div class="running-text">
            <NuxtMarquee :speed="40" class="relative z-10 whitespace-nowrap">
              <div class="flex gap-8 items-center">
                <template v-for="i in 20" :key="i">
                  <p class="uppercase">Portfolio by Farhan</p>
                  <span>
                    <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <circle cx="6" cy="6" r="5.5" stroke="white"/>
                              <path
                                  d="M9 7C9 7.79565 8.68393 8.55871 8.12132 9.12132C7.55871 9.68393 6.79565 10 6 10C5.20435 10 4.44129 9.68393 3.87868 9.12132C3.31607 8.55871 3 7.79565 3 7L6 7H9Z"
                                  stroke="white" stroke-linecap="round" stroke-linejoin="round"/>
                              <circle cx="4" cy="4" r="1" fill="white"/>
                              <circle cx="8" cy="4" r="1" fill="white"/>
                    </svg>
                  </span>
                </template>
              </div>
            </NuxtMarquee>
          </div>
        </div>
      </div>
    </hero-section>
  </section>
  <section id="aboutIndex">
    <div class="main-grid">
      <div class="title-box">
        <h2>{{ $t('profile.title') }}</h2>
      </div>
      <div class="border grid justify-center items-center col-span-2">
        <h1>
          {{ $t('profile.big_text') }}
        </h1>
      </div>
      <div class=" grid col-span-2 border justify-center items-center sm:px-12 px-2">
        <p>
          {{ $t('profile.description') }}
        </p>
      </div>
      <div class="flex flex-col col-span-2 row-span-2 max-w-full">
        <div class="box-tagline group" v-for="{title,description} in taglines">
          <h3 class="opacity-100 group-hover:opacity-0">{{ title }}</h3>
          <div
              class="bg-yellow-100 absolute w-full h-full opacity-0 group-hover:opacity-100 flex flex-col items-start gap-2 p-3 transition duration-1000">
            <h3>{{ title }}</h3>
            <p class=" max-w-xl">{{ description }}</p>
          </div>
        </div>
      </div>
      <NuxtLink :to="localeRoute({name : 'about'})"
                class=" cta-about">
        <div class="cta-textArea">
          <h3 class="">{{ $t('profile.about_cta') }}</h3>
          <svg width="70" height="16" viewBox="0 0 70 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M62.3431 13.6569L68 8.00001" stroke="currentColor" stroke-width="3" stroke-linecap="round"/>
            <path d="M2 8H68" stroke="currentColor" stroke-width="4" stroke-linecap="round"/>
            <path d="M62.3431 2.34314L68 7.99999" stroke="currentColor" stroke-width="3" stroke-linecap="round"/>
          </svg>
        </div>
      </NuxtLink>
      <div class="title-box">
        <h2>{{ $t('profile.experience') }}</h2>
      </div>
      <div class="grid grid-cols-3 col-span-4 h-full">
        <div class="grid col-span-1 justify-center items-center border relative group">
          <img src="/public/company-logo/Sena.svg" alt="sena">
        </div>
        <div class="grid col-span-1 p-3 justify-center items-center border">
          <img src="/public/company-logo/Samsung.svg" alt="samsung">
        </div>
        <div class="grid col-span-1 justify-center items-center border">
          <img src="/public/company-logo/H&M.svg" alt="h&m">
        </div>
      </div>
    </div>
  </section>
</template>


<style>
.hero-section {
  @apply sm:px-10 px-6 flex flex-col justify-center;

  h1 {
    @apply sm:text-8xl text-3xl font-bold;
    transform-origin: center;
  }

  .head-tagline {
    @apply flex sm:gap-6 font-medium sm:text-xl text-xs gap-3 mt-3;
  }

  .resume-and-down {
    @apply flex ;
    animation: float 2s ease-in-out infinite;

    a {
      @apply flex items-center justify-center border sm:text-2xl px-2 sm:px-6 py-1 sm:py-3 text-xs font-thin;
    }

    a:hover {
      @apply transition-colors duration-200 ease-in-out;
      background: #161616;
    }

    a:hover {
      color: #f7ec13;
      border-color: #f7ec13;
    }

    svg {
      @apply w-3 sm:w-8
    }
  }

  @keyframes float {
    0% {
      transform: translateY(0);
    }
    50% {
      transform: translateY(10px);
    }
    100% {
      transform: translateY(0);
    }
  }


  .tagline-box {
    @apply flex flex-col items-center justify-center row-span-3 cursor-pointer;
  }

  .running-text {
    @apply flex items-end justify-end pb-6 overflow-hidden text-white mt-12 w-full;

    p {
      @apply text-xs sm:text-sm;
    }
  }

}


#aboutIndex {

  .main-grid {
    @apply grid grid-cols-4 min-h-screen max-w-full ;

    .title-box {
      @apply border grid col-span-4 justify-center items-center;
    }

    h1 {
      @apply sm:text-6xl text-xl sm:font-semibold font-medium;
    }

    h2 {
      @apply sm:text-2xl text-xl sm:font-semibold font-medium;
    }

    h3 {
      @apply sm:text-xl text-sm sm:font-semibold font-medium;
    }

    p {
      @apply sm:text-2xl text-xs font-light;
    }

    img {
      @apply w-16 sm:w-32;
    }

    .box-tagline {
      @apply relative sm:p-3 p-1 border flex justify-center items-center col-span-2 cursor-pointer h-full;

      p {
        @apply text-sm;
      }
    }

    .cta-about {
      @apply border grid row-span-2 col-span-2 justify-center items-center w-full;

      .cta-textArea {
        @apply flex flex-col justify-center items-center gap-3;
        animation: ease-in-out float-text 4s infinite;
      }


      @keyframes float-text {
        0% {
          transform: translateX(-10px);
        }
        50% {
          transform: translateX(10px);
        }
        100% {
          transform: translateX(-10px);
        }
      }
    }

    .cta-about:hover {
      @apply transition duration-200 ease-in-out;
      background: #317ABE;
      color: #DDDDDD;
    }

  }

}


</style>