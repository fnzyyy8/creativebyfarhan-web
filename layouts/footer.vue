<script setup lang="ts">
import {contacts} from '~/data/contacts.json'

const year = new Date().getFullYear();

const navLists = inject('navLists')
const {localeRoute} = useI18n()
</script>

<template>
  <footer>
    <div>
      <h1 class="sm:text-6xl text-4xl font-semibold">LETS DO MORE ...</h1>
    </div>
    <div class="flex flex-col gap-4">
      <div class="grid gap-2">
        <p>Email :</p>
        <a href="mailto:farhanshidayat@gmail.com">farhanshidayat@gmail.com</a>
      </div>
      <p>Jakarta, Indonesia</p>
    </div>
    <div class="my-3">
      <ul class="flex flex-col gap-2">
        <li v-for="{title,link} in contacts" class="flex items-center gap-1">
          <a class="text-xs sm:text-sm" :href="link" target="_blank">{{ title }}</a>
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24">
            <!-- Icon from Material Symbols by Google - https://github.com/google/material-design-icons/blob/master/LICENSE -->
            <path fill="currentColor" d="M6.4 18L5 16.6L14.6 7H6V5h12v12h-2V8.4z"/>
          </svg>
        </li>
      </ul>
    </div>
    <div class="brand-nav">
      <div>
        <ul class="sm:flex justify-start hidden">
          <template v-for="{title,page} in navLists">
            <li>
              <NuxtLink :to="localeRoute(page)">
                {{ title }}
              </NuxtLink>
            </li>
          </template>
        </ul>
      </div>
      <div class="flex justify-end">
        <p>
          &copy; {{ year }} - Creative By Farhan
        </p>
      </div>

    </div>

  </footer>
</template>

<style scoped>
footer {
  @apply w-full text-white sm:px-32 px-2 py-3 grid grid-rows-4 gap-3  ;
  background: #317ABE;

  p {
    @apply text-xs sm:text-sm
  }
}

.brand-nav {
  @apply grid sm:grid-cols-2 justify-center sm:justify-start items-end sm:min-h-full;

  li a {
    @apply block pr-12 text-sm
  }

  li a:hover {
    color: #f7ec13;
    transition: ease 0.7s;
  }
}


</style>