<script setup lang="ts">
import {useSectionStore} from "~/stores/sectionStore";

const {localeRoute} = useI18n()
const sectionStore = useSectionStore()
</script>

<template>
  <NuxtLink :to="localeRoute('/')">
    <svg id="Layer_2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 262.34 250" width="24"
         height="24">
      <defs>
      </defs>
      <g id="Layer_1-2">
        <g>
          <path :fill="sectionStore.pageCurrentSection === 'black-area' ? '#FFFFFF':'#000000'"
                d="M50,125h0c0,41.42,33.58,75,75,75h70c13.81,0,25,11.19,25,25h0c0,13.81-11.19,25-25,25h-70c-69.04,0-125-55.96-125-125h0C0,55.96,55.96,0,125,0h70c13.81,0,25,11.19,25,25h0c0,13.81-11.19,25-25,25h-70c-41.42,0-75,33.58-75,75Z"/>
          <rect :fill="sectionStore.pageCurrentSection === 'black-area' ? '#FFFFFF':'#000000'" x="82.16" y="95"
                width="180.19" height="60" rx="30"
                ry="30"/>
        </g>
      </g>
    </svg>
  </NuxtLink>
</template>

<style scoped>
a{
  display: block;
}

</style>