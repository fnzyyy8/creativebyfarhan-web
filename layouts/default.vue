<script lang="ts" setup>

import Header from "~/layouts/header.vue";
import Footer from "~/layouts/footer.vue";

const {t} = useI18n()

const navLists = computed(() => t('navLists'))
provide('navLists', navLists)


</script>

<template>
  <div>
    <Header/>
    <slot/>
    <Footer/>
  </div>
</template>

<style>

</style>