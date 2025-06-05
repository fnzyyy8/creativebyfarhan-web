<script setup lang="ts">
import {VueLenis} from "lenis/vue";
import gsap from 'gsap'
import Lenis from 'lenis'
import {ScrollTrigger} from "gsap/ScrollTrigger";

const route = useRoute()

function titleCase({s}: { s: any }) {
  return s.toLowerCase()
      .split(' ')
      .map((word: string) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(' ');
}

onMounted(() => {
  gsap.install(ScrollTrigger)
  const lenis = new Lenis()

  lenis.on('scroll', ScrollTrigger.update)

  gsap.ticker.add((time) => {
    lenis.raf(time * 1000)
  })

  gsap.ticker.lagSmoothing(0)
})


useHead(() => ({
  title: route.name === "index" ? "Creative By Farhan" : `Creative By Farhan | ${titleCase({s: route.name})}`,
}))
</script>
<template>
  <div>
    <NuxtLayout>
      <VueLenis root>
        <NuxtPage/>
      </VueLenis>
    </NuxtLayout>
  </div>
</template>
