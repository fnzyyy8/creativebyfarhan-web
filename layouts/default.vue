<script lang="ts" setup>

import Header from "~/layouts/header.vue";
import Footer from "~/layouts/footer.vue";
import HeaderUpdate from "~/layouts/headerUpdate.vue";
import {useContacts} from "~/stores/contactsStore";

const {t} = useI18n()

const navLists = computed(() => t('navLists'))
provide('navLists', navLists)


</script>

<template>
  <div>
    <contacts-dialog />
    <HeaderUpdate/>
    <slot/>
    <Footer/>
  </div>
</template>

<style>

</style>