<script setup lang="ts">
import gsap from 'gsap'
import {useSectionStore} from "~/stores/sectionStore";
import {useContacts} from "~/stores/contactsStore";


const {getLocale, localeRoute, getLocales, switchLocale} = useI18n()
const route = useRoute()

const sectionStore = useSectionStore()
const blackArea = computed(() => sectionStore.pageCurrentSection === 'black-area')
const navLists = inject('navLists')
const contactStore = useContacts()
const {openContactModal} = contactStore





</script>

<template>
  <header>
    <div class="flex mx-24 items-center h-full justify-between">
      <div class="button-box">
        <icon-cbf/>
      </div>
      <nav ref="list" :class="['flex gap-32 h-full rounded-full px-4 backdrop-blur']">
        <ul>
          <li v-for="{title, page} in navLists" :key="title">
            <NuxtLink
                :class="[blackArea ? 'text-white' : 'text-black']"
                :to="localeRoute(page)"><span class="box"/>{{ title }}
            </NuxtLink>
          </li>
        </ul>
        <div class="flex items-center">
          <button @click="openContactModal()" type="button"
                  :class="['px-6 py-1 rounded-xl',blackArea ? 'button-black' : 'button-white']">
            Contact
          </button>
        </div>
      </nav>
    </div>
  </header>
</template>

<style scoped>

header {
  @apply h-16 w-full fixed top-6 z-30 bg-transparent;
}

.button-box {
  @apply relative min-w-14 h-full grid justify-center items-center text-white backdrop-blur rounded-full;
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