<script setup lang="ts">

const {t} = useI18n()
const taglines = t('profile.taglines')

</script>

<template>
  <div
      class="col-start-3 col-end-5 row-start-2 row-end-4 grid grid-cols-1 grid-rows-3 gap-3">
    <div v-for="({number,title, description},index) in taglines" :key="index"
         class="tagline-detail-about">
      <h1 class="text-blue-700">{{ number }}</h1>
      <div class="flex flex-col justify-center gap-3">
        <h2>{{ title }}</h2>
        <p class="max-w-full">{{ description }}</p>
      </div>
    </div>
  </div>
</template>

<style scoped>

.tagline-detail-about{
  @apply flex flex-row gap-6 items-center bg-gray-100 shadow-md p-3 rounded-2xl cursor-pointer;
}

</style>