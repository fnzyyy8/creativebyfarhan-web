<script setup lang="ts">

const {t} = useI18n()

const experiences = computed(() => {
  const base = t('profile.experiences') as unknown as any []
  const result = []

  for (let i = 0; i < 20; i++) {
    result.push(base[i % base.length])
  }
  return result
})

</script>

<template>
  <NuxtMarquee>
    <ul class="flex gap-32 overflow-hidden ml-32">
      <li v-for="({img,title},index) in experiences" class="flex justify-center items-center" :key="index">
        <img :src="img" :alt="title" class="w-32"/>
      </li>
    </ul>
  </NuxtMarquee>
</template>

<style scoped>

</style>