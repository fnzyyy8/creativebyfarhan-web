<script setup lang="ts">


const {pageSection} = useSectionObservers()

const {t} = useI18n()
const skills = computed(() => t('skills.detail'))
const careers = computed(() => t('careers.detail'))
const strengths = computed(() => t('strengths.detail'))
const futures = computed(() => t('futures.detail'))

</script>

<template>
  <section ref="pageSection">
    <section id="heroSection" class="dark-area">
      <hero-section>
        <div class="flex justify-center items-center h-screen">
          <div class="max-w-xs">
            <h1 class="" v-gsap.delay-100.fromTo="[{opacity:0,x:-20},{opacity:1,x:0}]">Technology
              Advances, Humanity Must Improve.</h1>
          </div>
        </div>
      </hero-section>
    </section>
    <section id="aboutSection">
      <div class="highlight-container" v-gsap.whenVisible.fromTo="[{autoAlpha: 0, y:100},{autoAlpha: 1,y:0}]">
        <div class="title-container">
          <h1>{{ t('details.nickname') }}</h1>
          <p class="mini-text">{{ t('details.name') }}</p>
        </div>
        <div class="text-justify mt-3">
          <p>{{ t('details.about_me') }}</p>
        </div>
      </div>
      <div class="highlight-container" v-gsap.whenVisible.fromTo="[{autoAlpha: 0, y:100},{autoAlpha: 1,y:0}]">
        <div class="title-container">
          <h1>{{ t('skills.title') }}</h1>
        </div>
        <div class="detail-container">
          <template v-for="{title,tools,description} in skills">
            <div>
              <h3>{{ title }}</h3>
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
          <h1>{{ t('careers.title') }}</h1>
        </div>
        <div class="detail-container">
          <div v-for=" {title,year,description} in careers" :key="title">
            <h3>{{ title }}</h3>
            <p class="mini-text">
              {{ year }}
            </p>
            <p class="text-justify">
              {{ description }}
            </p>
          </div>
        </div>
      </div>
      <div class="highlight-container" v-gsap.whenVisible.fromTo="[{autoAlpha: 0, y:100},{autoAlpha: 1,y:0}]">
        <div class="title-container">
          <h1>{{ t('strengths.title') }}</h1>
        </div>
        <div class="detail-container">
          <div v-for="{title,description} in strengths">
            <h3>{{ title }}</h3>
            <p class="sm:mt-3 mt-2 text-justify">
              {{ description }}
            </p>
          </div>
        </div>
      </div>
      <div class="highlight-container"
           v-gsap.whenVisible.fromTo="[{autoAlpha: 0, y:100},{autoAlpha: 1,y:0}]">
        <div class="title-container">
          <h1 class="detail-title">{{ t('futures.title') }}</h1>
        </div>
        <div class="detail-container">
          <div v-for="{title,description} in futures">
            <h3># {{ title }}</h3>
            <p class="sm:mt-3 mt-2 text-justify">
              {{ description }}
            </p>
          </div>
        </div>
      </div>
    </section>

  </section>

</template>

<style scoped>


.highlight-container {
  @apply sm:grid grid-cols-2 lg:my-12 my-6;

  .title-container {
    @apply flex flex-col sm:mb-0 lg:ml-32 mb-6;

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
  }

}

#aboutSection {
  @apply min-h-screen px-6 lg:px-32 lg:my-24 flex-col flex gap-6 my-12
}


</style>