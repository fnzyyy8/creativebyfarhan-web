<script setup lang="ts">

const {getLocale, getLocales, switchLocale} = useI18n()

</script>

<template>
  <div>
    <h3>{{ getLocale().toUpperCase() }}</h3>
  </div>
</template>

<style scoped>
.container-sticky {
  @apply p-3 left-24;
  position: fixed;
  bottom: 24px;
  z-index: 20;
}

.black-floating {
  @apply border border-white text-white ;
}

.white-floating {
  @apply border border-black text-black;
}

</style>