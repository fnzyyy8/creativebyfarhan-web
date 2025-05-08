<script lang="ts" setup>

const {t, localeRoute} = useI18n()

const taglines = computed(() => t("profile.taglines"))


</script>


<template>
  <section id="heroIndex">
    <hero-section class="hero-section">
      <div class="grid grid-rows-2 min-h-screen">
        <div class="flex flex-col items-center justify-center row-span-3">
          <h1 v-gsap.delay-100.fromTo="[{opacity:0,x:-20},{opacity:1,x:0}]">Creative By Farhan</h1>
          <div class="head-tagline">
            <p v-gsap.delay-200.fromTo="[{opacity:0,x:-20},{opacity:1,x:0}]">Design</p>
            <p v-gsap.delay-300.fromTo="[{opacity:0,x:-20},{opacity:1,x:0}]">Define</p>
            <p v-gsap.delay-400.fromTo="[{opacity:0,x:-20},{opacity:1,x:0}]">Develop</p>
          </div>
        </div>
        <div class="overflow-hidden flex flex-col items-center justify-end">
          <div class="resume-and-down">
            <a href="https://drive.google.com/file/d/1zrWegQJ_cEavbePFF73dbhmyf3VcSZW7/view?usp=sharing" target="_blank">
              <span class="mr-3">{{$t('resume.title')}}</span>
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
            <NuxtMarquee :speed="40" class="relative z-10" :pause-on-hover="true">
              <div class="flex gap-5">
                <template v-for="i in 50" :key="i">
                  <p>FARHAN PORTFOLIO SITE</p>
                  <p>•</p>
                </template>
              </div>
            </NuxtMarquee>
          </div>
        </div>

      </div>
    </hero-section>
  </section>
  <section id="aboutIndex" class="min-h-screen sm:pt-16">
    <div class="grid flex-col p-6 min-h-screen">
      <div class="flex justify-center items-center flex-col"
           v-gsap.whenVisible.fromTo="[{autoAlpha: 0, y:100},{autoAlpha: 1,y:0}]">
        <h2>{{ $t('profile.title') }}</h2>
        <div class="text-center pt-6 flex justify-center items-center flex-col max-w-md"
        >
          <h2 class="sm:text-5xl! text-4xl ">{{ $t('profile.big_text') }}</h2>
          <p class=" sm:mt-2 my-6">
            {{ $t('profile.description') }}
          </p>
        </div>
      </div>
      <NuxtLink :to="localeRoute('/about')" class="cta-about"
                v-gsap.whenVisible.fromTo="[{autoAlpha: 0, y:100},{autoAlpha: 1,y:0}]">
        <div class="flex flex-col justify-center items-center">
          <div v-for="{title, description} in taglines" class=" tagline" :key="title">
            <h3>{{ title }}</h3>
            <p>{{ description }}</p>
          </div>
        </div>
        <div class="flex justify-center items-center flex-col my-3 sm:my-0 border sm:border-none py-6 sm:py-0">
          <h2 class=" sm:text-3xl text-xl font-semibold!">{{ $t('profile.about_cta') }}</h2>
          <svg width="70" height="16" viewBox="0 0 70 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M62.3431 13.6569L68 8.00001" stroke="currentColor" stroke-width="3" stroke-linecap="round"/>
            <path d="M2 8H68" stroke="currentColor" stroke-width="4" stroke-linecap="round"/>
            <path d="M62.3431 2.34314L68 7.99999" stroke="currentColor" stroke-width="3" stroke-linecap="round"/>
          </svg>
        </div>
      </NuxtLink>
      <div class="flex flex-col justify-center items-center pb-3 h-full">
        <h2>{{ $t('profile.experience') }}</h2>
        <div class="flex sm:gap-32 gap-16 justify-center items-center sm:mt-3 mt-3">
          <img v-gsap.whileVisible.to="{ scale : 0.5, duration : 1, repeat : 1,yoyo: true }" width="120"
               src="/public/company-logo/Sena.svg" alt="sena">
          <img v-gsap.whileVisible.to="{ scale : 0.5, duration : 1, repeat : 1,yoyo: true }" width="120"
               src="/public/company-logo/Samsung.svg" alt="samsung">
          <img v-gsap.whileVisible.to="{ scale : 0.5, duration : 1, repeat : 1,yoyo: true }" width="120"
               src="/public/company-logo/H&M.svg" alt="h&m">
        </div>
      </div>
    </div>
  </section>
</template>


<style>
.hero-section {
  @apply sm:px-10 px-6 flex flex-col justify-center;

  h1 {
    @apply sm:text-6xl text-3xl font-bold;
  }

  .head-tagline {
    @apply flex sm:gap-6 font-medium sm:text-xl text-xs gap-3 mt-3;
  }

  .resume-and-down {
    @apply flex ;

    a {
      @apply flex items-center justify-center border sm:text-2xl px-2 sm:px-6 py-1 sm:py-3 text-xs font-thin;
    }

    a:hover{
      background: #161616;
    }

    svg {
      @apply w-3 sm:w-8
    }
  }
}

.running-text {
  @apply flex items-end justify-end pb-6 overflow-hidden text-white mt-12;

  p {
    @apply text-xs sm:text-sm;
  }
}

#aboutIndex {
  h2 {
    @apply sm:text-2xl text-xl font-semibold
  }

  h3 {
    @apply sm:text-xl text-sm font-semibold
  }

  p {
    @apply text-sm sm:text-base;
  }

  .tagline {
    @apply max-w-lg sm:mb-12 mb-6 flex flex-col gap-2;

    p {
      @apply text-base sm:text-base text-justify;
    }
  }

  .cta-about {
    @apply grid sm:grid-cols-2 sm:gap-2 sm:my-0 lg:px-8 py-3;
    color: #317ABE;

    p {
      @apply text-black
    }
  }

  .cta-about:hover {
    background: #F1F1F1;
    color: #161616;
    transition: ease 0.7s;
  }

}


</style>