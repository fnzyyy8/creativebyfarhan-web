<script setup lang="ts">
import {contacts} from '~/data/contacts.json'

const year = new Date().getFullYear();

const navLists = inject('navLists')
const {localeRoute} = useI18n()
</script>

<template>
  <footer>
    <div class="footer-container">
      <div class="col-start-2 col-end-4 row-start-2 row-end-3 flex justify-center items-center cursor-default">
        <h1>LET'S DO MORE</h1>
      </div>
      <ul class="col-start-1 col-end-1 row-start-4 items-center row-end-4 flex flex-row gap-3">
        <li v-for="{title, link} in contacts">
          <a :href="link">{{ title.toUpperCase() }}</a>
        </li>
      </ul>
      <ul class="col-start-4 col-end-5 row-start-4 row-end-5 flex flex-row gap-3 justify-end items-center">
        <li v-for="{title, page} in navLists">
          <NuxtLink :to="localeRoute(page)">{{ title }}</NuxtLink>
        </li>
      </ul>
      <div class="row-start-4 row-end-5 col-start-2 col-end-4 flex justify-center items-center">
        <p>&copy; {{year}} - Creative by Farhan </p>
      </div>
    </div>
  </footer>
</template>

<style scoped>
footer {
  @apply w-full px-16 py-6;
  background: #317ABE;
}

.footer-container {
  @apply grid grid-cols-4 grid-rows-4 text-white;
}


li a {
  @apply block transition-colors duration-200;
}
li a:hover {
  @apply transition-colors duration-200 scale-95;
  color: #f7ec13;
}

</style>