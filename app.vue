<script setup lang="ts">
const route = useRoute()

function titleCase({s}: { s: any }) {
  return s.toLowerCase()
      .split(' ')
      .map((word: string) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(' ');
}

useHead(() => ({
  title: route.name === "index" ? "Creative By Farhan" : `Creative By Farhan | ${titleCase({s: route.name})}`,
}))
</script>
<template>
  <div>
    <NuxtLayout>
      <NuxtPage/>
    </NuxtLayout>
  </div>
</template>
