<script setup lang="ts">
const {getLocale, getLocales, switchLocale} = useI18n()

const langModalOpen = ref(false)

const lang = computed(() => getLocale().toUpperCase())

const langToggle = () => {
  langModalOpen.value = !langModalOpen.value
}
const filteredLocales = computed(() => {
  return getLocales().filter(locale => locale.code.toUpperCase() !== lang.value)
})
const switchLang = (code: string) => {
  switchLocale(code)
  langModalOpen.value = false
}

</script>

<template>
  <div
      :class="['absolute  bottom-4 right-28 rounded-full cursor-pointer h-fit flex gap-2 flex-col justify-between', langModalOpen ? ' bg-white':'text-white bg-transparent'
      ]">
    <ul :class="['flex-col gap-2', langModalOpen ? 'flex' : 'hidden']">
      <li
          v-for="{code} in filteredLocales" :key="code">
        <a @click="switchLang(code)">
          {{ code.toUpperCase() }}
        </a>
      </li>
    </ul>
    <button type="button" @click="langToggle">
      {{ lang }}
    </button>
  </div>
</template>

<style scoped>
.container-sticky {
  @apply p-3 left-24;
  position: fixed;
  bottom: 24px;
  z-index: 20;
}

li a {
  @apply text-black p-4 rounded-full flex justify-center items-center h-12 w-12;
}

button {
  @apply p-4 rounded-full border h-12 w-12 flex justify-center items-center transition-colors duration-200;
}

button:hover {
  @apply bg-white text-black transition-colors duration-200;
}

li a:hover {
  @apply italic transition-colors duration-200;
}


.black-floating {
  @apply absolute border border-white text-white ;
}

.white-floating {
  @apply border border-black text-black;
}

</style>