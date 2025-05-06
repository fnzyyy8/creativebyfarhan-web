<script lang="ts" setup>

const {t,localeRoute} = useI18n()

const taglines = computed(() => t("profile.taglines"))


</script>


<template>
  <section id="heroIndex">
    <hero-section class="hero-section">
      <div class="grid grid-rows-2 min-h-screen w-full">
        <div class="flex items-end justify-start">
          <div>
            <h1>Creative By Farhan</h1>
            <div class="head-tagline">
              <p>Design</p>
              <p>Define</p>
              <p>Develop</p>
            </div>
          </div>
        </div>
        <div class="running-text">
          <NuxtMarquee :speed="40" class="relative z-10" :pause-on-hover="true">
            <div class="flex gap-5">
              <template v-for="i in 15" :key="i">
                <p>FARHAN PORTFOLIO SITE</p>
                <p>•</p>
              </template>
            </div>
          </NuxtMarquee>
        </div>
      </div>
    </hero-section>
  </section>
  <section id="aboutIndex">
    <div class="grid flex-col p-6 min-h-screen">
      <div class="flex justify-center items-center flex-col">
        <h2>{{ $t('profile.title') }}</h2>
        <div class="text-center pt-6 flex justify-center items-center flex-col max-w-md">
          <h2 class="sm:text-5xl! text-4xl ">{{ $t('profile.big_text') }}</h2>
          <p class=" sm:mt-2 my-6">
            {{ $t('profile.description') }}
          </p>
        </div>
      </div>
      <div class="grid sm:grid-cols-2 sm:gap-2 my-6 sm:my-0 ">
        <div class="flex flex-col justify-center items-center">
          <div v-for="tagline in taglines" class=" tagline">
            <h3>{{ tagline.title }}</h3>
            <p>{{ tagline.description }}</p>
          </div>
        </div>
        <div class="flex justify-center items-center flex-col">
          <NuxtLink :to="localeRoute('/about')" class="cta-about px-6 py-3">
            <div class="flex flex-col justify-center sm:items-end items-center pb-3 sm:gap-6 gap-3">
              <h2 class=" sm:text-3xl text-xl font-semibold!">{{ $t('profile.about_cta') }}</h2>
              <span>
           <svg width="70" height="16" viewBox="0 0 70 16" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M62.3431 13.6569L68 8.00001" stroke="currentColor" stroke-width="3" stroke-linecap="round"/>
    <path d="M2 8H68" stroke="currentColor" stroke-width="4" stroke-linecap="round"/>
    <path d="M62.3431 2.34314L68 7.99999" stroke="currentColor" stroke-width="3" stroke-linecap="round"/>
  </svg>
      </span>
            </div>
          </NuxtLink>
        </div>
      </div>
      <div class="flex flex-col justify-center items-center pb-3 h-full">
        <h2>{{ $t('profile.experience') }}</h2>
        <div class="flex gap-12 justify-center items-center sm:mt-10 mt-3">
          <img width="120" src="/public/company-logo/Sena.svg" alt="sena">
          <img width="120" src="/public/company-logo/Samsung.svg" alt="samsung">
          <img width="120" src="/public/company-logo/H&M.svg" alt="h&m">
        </div>
      </div>
    </div>
  </section>
</template>


<style>
.hero-section {
  @apply px-10 flex flex-col justify-center;

  h1 {
    @apply sm:text-6xl text-3xl font-bold;
  }

  .head-tagline {
    @apply flex sm:gap-6 font-medium text-xl mt-3;
  }
}

.running-text {
  @apply flex items-end justify-end pb-6 overflow-hidden text-white;

  p {
    @apply text-sm sm:text-xs;
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
    @apply max-w-lg sm:mb-12 mb-6;

    p {
      @apply text-base sm:text-base text-justify;
    }
  }
  .cta-about {
    color: #317ABE;
  }

  .cta-about:hover {
    background: #F1F1F1;
    color: #161616;
    transition: ease 0.7s;
  }

  .icon-color {
    fill: #161616 !important;
  }
}


</style>