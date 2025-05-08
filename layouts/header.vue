<script setup lang="ts">
import {vAutoAnimate} from "@formkit/auto-animate/vue";

const scrolled = ref(false)
const showNavList = ref(false)
const showLangList = ref(false)
const lastY = ref(0)
const route = useRoute()
const {y} = useWindowScroll()


watch(route, () => {
  showLangList.value = false
  showNavList.value = false
})
watch(y, (val) => {
  scrolled.value = val > 0
  if (lastY.value !== val) {
    showLangList.value = false
    showNavList.value = false
  }
  lastY.value = val
})

const toggleLang = () => {
  showLangList.value = !showLangList.value
  showNavList.value = false
}

const toggleNav = () => {
  showNavList.value = !showNavList.value
  showLangList.value = false
}
const {getLocale, getLocales, switchLocale, localeRoute} = useI18n()

const navLists = inject('navLists')

const switchLang = (code: string) => {
  switchLocale(code)
  showLangList.value = false
}

</script>

<template>
  <nav :class="scrolled? ' bg-white shadow-lg' : ' sm:bg-transparent text-white '">
    <div class="navbar">
      <div class="pr-3 py-3" v-gsap.once.fromTo="[{opacity:0,x:20},{opacity:1,x:0}]">
        <button class="flex items-center" @click="toggleLang">
        <span>
          {{ getLocale().toUpperCase() }}
        </span>
          <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24">
            <path fill="currentColor" :d="showLangList ?  'm7 14l5-5l5 5z' : 'm12 15l-5-5h10z'"/>
          </svg>
        </button>
      </div>
      <div class="flex items-center justify-center" v-gsap.once.fromTo="[{opacity:0},{opacity:1}]">
        <NuxtLink :to="localeRoute('/')">
          <svg id="Layer_2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 262.34 250" width="24"
               height="24">
            <defs>
            </defs>
            <g id="Layer_1-2">
              <g>
                <path :fill="scrolled ? '#000000' : '#ffffff'"
                      d="M50,125h0c0,41.42,33.58,75,75,75h70c13.81,0,25,11.19,25,25h0c0,13.81-11.19,25-25,25h-70c-69.04,0-125-55.96-125-125h0C0,55.96,55.96,0,125,0h70c13.81,0,25,11.19,25,25h0c0,13.81-11.19,25-25,25h-70c-41.42,0-75,33.58-75,75Z"/>
                <rect :fill="scrolled ? '#000000' : '#ffffff'" x="82.16" y="95" width="180.19" height="60" rx="30"
                      ry="30"/>
              </g>
            </g>
          </svg>
        </NuxtLink>
      </div>
      <div class="flex items-center justify-end" v-gsap.once.fromTo="[{opacity:0,x:-20},{opacity:1,x:0}]">
        <button @click="toggleNav" class="cursor-pointer">
          <Transition mode="out-in" name="icon-fade">
            <svg xmlns="http://www.w3.org/2000/svg" width="32px" height="32px" viewBox="0 0 24 24"
                 v-if="showNavList">
              <!-- Icon from Google Material Icons by Material Design Authors - https://github.com/material-icons/material-icons/blob/master/LICENSE -->
              <path fill='currentColor'
                    d="M19 6.41L17.59 5L12 10.59L6.41 5L5 6.41L10.59 12L5 17.59L6.41 19L12 13.41L17.59 19L19 17.59L13.41 12z"></path>
            </svg>
            <svg xmlns="http://www.w3.org/2000/svg" width="32px" height="32px" viewBox="0 0 24 24" v-else>
              <path fill="currentColor" d="M3 18h18v-2H3zm0-5h18v-2H3zm0-7v2h18V6z"></path>
            </svg>
          </Transition>
        </button>
      </div>
    </div>
    <div v-auto-animate class="nav-container"
         :class="showNavList || showLangList ? 'h-screen sm:bg-transparent bg-white border-t' : ' h-fit sm:text-white bg-transparent'">
      <ul v-if="showLangList || showNavList"
          :class="scrolled ? 'nav-scroll sm:flex-row flex flex-col' : 'nav-unScroll  sm:flex-row flex flex-col sm:text-white text-black'">
        <template v-if="showLangList">
          <li v-for="{code} in getLocales()" :key="code">
            <a @click="switchLang(code)">
              {{ code.toUpperCase() }}
            </a>
          </li>
        </template>
        <template v-if="showNavList">
          <li v-for="{title, page} in navLists" :key="title">
            <NuxtLink :to="localeRoute(page)">
              {{ title }}
            </NuxtLink>
          </li>
        </template>
      </ul>
    </div>
  </nav>
</template>

<style scoped>
nav {
  @apply fixed top-0 flex w-full flex-col z-50 ;

  .navbar {
    @apply sm:h-12 grid grid-cols-3 items-center sm:px-10 px-3 sm:my-3 my-0
  }
}

.nav-container {
  @apply sm:h-fit flex flex-col;


  li a {
    @apply sm:px-12 sm:py-6 block border-t sm:border-0 pl-3 py-6 cursor-pointer;
  }

  .nav-unScroll li a:hover {
    background: #161616;
    transition: background 0.3s ease;
  }

  .nav-scroll li a:hover {
    background: #DDDDDD;
    transition: background 0.3s ease;
  }
}

</style>