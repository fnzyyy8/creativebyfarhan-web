<script setup lang="ts">

const handleError = () => clearError({redirect: '/'})
</script>

<template>
  <hero-section>
    <div class="h-screen flex flex-col gap-6 items-center justify-center text-center p-6">
      <div>
        <h1 class="text-6xl font-semibold">404</h1>
        <p class="font-thin text-xs">This page could not be found</p>
      </div>
      <div>
        <button class="bg-white text-black px-6 py-2 rounded cursor-pointer font-medium button-color"
                @click="handleError">Home
        </button>
      </div>
    </div>
  </hero-section>
</template>

<style scoped>
.button-color {
  background: #317abe;
  color: #f7ec13;
}

.button-color:hover {
  background: #f7ec13;
  color: #317abe;
}

.button-color{
  transition: ease 0.3s;
}


</style>
