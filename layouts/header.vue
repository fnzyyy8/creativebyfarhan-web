<script setup lang="ts">
const scrolled = ref(false)
const langContainer = ref(false)
const navListContainer = ref(false)
const {y} = useWindowScroll()

watch(y, (val) => {
  scrolled.value = val > 0
})

const toggleLang = () => {
  langContainer.value = !langContainer.value
}

const toggleNav = () => {
  navListContainer.value = !navListContainer.value
}
const {getLocale, getLocales, switchLocale, localeRoute} = useI18n()

const navLists = inject('navLists')


</script>

<template>
  <nav :class="scrolled? ' bg-white shadow-lg' : 'sm:bg-transparent! text-white '">
    <div class="navbar">
      <div>
        <button class="flex items-center" @click="toggleLang">
          {{ getLocale().toUpperCase() }}
          <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24">
            <path fill="currentColor" :d="langContainer ?  'm7 14l5-5l5 5z' : 'm12 15l-5-5h10z'"/>
          </svg>
        </button>
      </div>
      <div>
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
      <div>
        <button @click="toggleNav" class="cursor-pointer">
          <Transition mode="out-in" name="icon-fade">
            <svg xmlns="http://www.w3.org/2000/svg" width="32px" height="32px" viewBox="0 0 24 24"
                 v-if="navListContainer">
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
    <Transition mode="in-out" name="menu-slide">
      <div v-if="langContainer" class="navList-container">
        <ul :class="scrolled ? 'nav-scroll sm:flex-row flex flex-col' : 'nav-unScroll  sm:flex-row flex flex-col'">
          <template v-for="locale in getLocales()">
            <li>
              <button @click="switchLocale(locale.code)">
                {{ locale.code.toUpperCase() }}
              </button>
            </li>
          </template>
        </ul>
      </div>
    </Transition>
    <Transition mode="in-out" name="menu-slide">
      <div v-if="navListContainer" class="navList-container">
        <ul :class="scrolled ? 'nav-scroll sm:flex-row flex flex-col' : 'nav-unScroll  sm:flex-row flex flex-col'">
          <template v-for="navList in navLists">
            <li>
              <NuxtLink :to="localeRoute(navList.page)">
                {{ navList.title }}
              </NuxtLink>
            </li>
          </template>
        </ul>
      </div>
    </Transition>
  </nav>
</template>

<style scoped>
nav {
  @apply fixed top-0 flex w-full flex-col z-50 ;

  .navbar {
    @apply sm:h-12 flex justify-between items-center sm:px-10 px-3 my-3
  }
}

.navList-container {
  @apply sm:border-t sm:h-fit h-screen flex flex-col;

  li button {
    @apply sm:px-12 sm:py-6 block border-t sm:border-0 pl-3 py-6;
  }

  .nav-unScroll li button:hover {
    background: #161616;
    transition: background 0.3s ease;
  }

  .nav-scroll li button:hover {
    background: #DDDDDD;
    transition: background 0.3s ease;
  }

  li a {
    @apply sm:px-12 sm:py-6 block border-t sm:border-0 pl-3 py-6;
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