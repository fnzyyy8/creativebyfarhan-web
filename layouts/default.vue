<script lang="ts" setup>

import HeaderOld from "~/layouts/header-old.vue";
import Footer from "~/layouts/footer.vue";
import Header from "~/layouts/header.vue";
import {useContacts} from "~/stores/contactsStore";

const {t} = useI18n()

const navLists = computed(() => t('navLists'))
provide('navLists', navLists)


</script>

<template>
  <div>
    <contacts-dialog />
    <Header/>
    <language-button/>
    <slot/>
    <Footer/>
  </div>
</template>

<style>

</style>