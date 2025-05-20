<script setup lang="ts">

import {useCounter} from "~/stores/counterStore";
import {useScroll} from "~/stores/scrollStore";

const counter = useCounter()

const toggleIncrement = () => {
  counter.value++
}

const toggleDecrement = () => {
  counter.value--
}

const scroll = useScroll()

</script>

<template>

 <div class="h-screen flex flex-col items-center justify-center relative" v-gsap.parallax.slower>
   <h1 class="text-white font-semibold text-3xl" >{{ counter.value }}</h1>
   <h1>{{ scroll.scrollY }}</h1>
   <div class="button-box">
     <button @click="toggleIncrement" class="">+</button>
     <button @click="toggleDecrement" class="">-</button>
   </div>
 </div>

</template>

<style scoped>
.button-box {
  @apply flex gap-3;

  button {
    @apply px-12 py-3 border rounded-xl;
  }

  button:hover {
    background: #303030;
  }
}

</style>