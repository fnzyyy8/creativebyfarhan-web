<script setup lang="ts">
import {useSectionStore} from "~/stores/sectionStore";
import {useContacts} from "~/stores/contactsStore";


const {localeRoute} = useI18n()

const sectionStore = useSectionStore()
const darkArea = computed(() => sectionStore.pageCurrentSection === 'dark-area')
const navLists = inject('navLists')
const contactStore = useContacts()
const {openContactModal} = contactStore


</script>

<template>
  <header>
    <div class="glass-area col-start-1 justify-self-start">
      <icon-cbf/>
    </div>
    <nav class="glass-area gap-16 col-end-7 justify-self-end">
      <ul>
        <li v-for="{title, page} in navLists" :key="title">
          <NuxtLink
              :class="[darkArea ? 'text-white' : 'text-black']"
              :to="localeRoute(page)"><span class="box"/>{{ title }}
          </NuxtLink>
        </li>
      </ul>
      <div class="flex items-center">
        <button @click="openContactModal()" type="button"
                :class="['px-6 py-1 rounded-xl',darkArea ? 'button-black' : 'button-white']">
          Contact
        </button>
      </div>
    </nav>
  </header>
</template>

<style scoped>

header {
  @apply w-full fixed top-16 z-30 bg-transparent grid grid-cols-6 px-16;
}

.glass-area {
  @apply p-3 rounded-full flex backdrop-blur items-center justify-center;
}

ul {
  @apply flex gap-12 items-center;
}

li a {
  @apply h-full block underline;
}

li a:hover {
  text-decoration: none;
  animation: float-button 2.5s infinite;
}

.box {
  width: 12px;
  height: 12px;
  background-color: #317ABE;
}

.button-black {
  @apply border text-white transition-colors duration-500;
}

.button-black:hover {
  @apply border border-black text-black bg-white transition-colors duration-500;
}

.button-white {
  @apply border border-black transition-colors duration-500;
}

.button-white:hover {
  @apply border border-black bg-black text-white transition-colors duration-500;
}

@keyframes float-button {
  0% {
    transform: translateY(0px);
  }
  50% {
    transform: translateY(6px);
  }
  100% {
    transform: translateY(0px);
  }

}

</style>