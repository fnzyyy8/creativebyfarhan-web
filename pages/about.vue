<script setup lang="ts">

const {t} = useI18n()
const skills = computed(() => t('skills.detail'))
const careers = computed(() => t('careers.detail'))
const strengths = computed(() => t('strengths.detail'))
const futures = computed(() => t('futures.detail'))

</script>

<template>
  <section id="heroSection">
    <hero-section>
      <div class="flex justify-center items-center h-screen">
        <div class="max-w-xs">
          <h1 class="text-4xl font-medium" v-gsap.delay-100.fromTo="[{opacity:0,x:-20},{opacity:1,x:0}]">Technology
            Advances, Humanity Must Improve.</h1>
        </div>
      </div>
    </hero-section>
  </section>
  <section id="aboutSection">
    <div class="highlight-container" v-gsap.whenVisible.fromTo="[{autoAlpha: 0, y:100},{autoAlpha: 1,y:0}]">
      <div class="title-container">
        <h1>{{ $t('details.nickname') }}</h1>
        <p class="mini-text">{{ $t('details.name') }}</p>
      </div>
      <div class="text-justify mt-3">
        <p>{{ $t('details.about_me') }}</p>
      </div>
    </div>
    <div class="highlight-container" v-gsap.whenVisible.fromTo="[{autoAlpha: 0, y:100},{autoAlpha: 1,y:0}]">
      <div class="title-container">
        <h1>{{ $t('skills.title') }}</h1>
      </div>
      <div class="detail-container">
        <template v-for="{title,tools,description} in skills">
          <div>
            <h2 class="sub-title-3">{{ title }}</h2>
            <p class="mini-text">
              {{ tools }}
            </p>
            <p class="text-justify">
              {{ description }}
            </p>
          </div>
        </template>
      </div>
    </div>
    <div class="highlight-container" v-gsap.whenVisible.fromTo="[{autoAlpha: 0, y:100},{autoAlpha: 1,y:0}]">
      <div class="title-container">
        <h1>{{ $t('careers.title') }}</h1>
      </div>
      <div class="detail-container">
        <template v-for=" {title,year,description} in careers" :key="title">
          <div>
            <h2 class="sub-title-3">{{ title }}</h2>
            <p class="mini-text">
              {{ year }}
            </p>
            <p class="text-justify">
              {{ description }}
            </p>
          </div>
        </template>
      </div>
    </div>
    <div class="highlight-container" v-gsap.whenVisible.fromTo="[{autoAlpha: 0, y:100},{autoAlpha: 1,y:0}]">
      <div class="title-container">
        <h1>{{ $t('strengths.title') }}</h1>
      </div>
      <div class="detail-container">
        <template v-for="{title,description} in strengths">
          <div>
            <h2 class="sub-title-3">{{ title }}</h2>
            <p class="sm:mt-3 mt-2 text-justify">
              {{ description }}
            </p>
          </div>
        </template>
      </div>
    </div>
    <div class="highlight-container" v-gsap.whenVisible.fromTo="[{autoAlpha: 0, y:100},{autoAlpha: 1,y:0}]">
      <div class="title-container">
        <h1 class="detail-title">{{ $t('futures.title') }}</h1>
      </div>
      <div class="detail-container">
        <template v-for="{title,description} in futures">
          <div>
            <h2 class="sub-title-3"># {{ title }}</h2>
            <p class="sm:mt-3 mt-2 text-justify">
              {{ description }}
            </p>
          </div>
        </template>
      </div>
    </div>
  </section>
</template>

<style scoped>


.highlight-container {
  @apply sm:grid grid-cols-2 sm:my-12 my-6;

  .title-container {
    @apply flex flex-col mb-3 sm:mb-0 sm:ml-32 mb-6;

    p {
      @apply text-sm;
      color: gray;
    }

    h1 {
      @apply text-4xl italic;
    }
  }

  .detail-container {
    @apply sm:gap-8 gap-6 flex flex-col;


    .mini-text {
      @apply text-sm;
      color: gray;
    }

    h2 {
      @apply text-lg font-medium;
    }
  }

}

#aboutSection {
  @apply min-h-screen px-6 sm:px-32 sm:my-24 flex-col flex gap-6 my-12
}


h2 {
  @apply text-2xl font-medium;
}

.sub-title-3 {
  @apply font-semibold;
}

</style>