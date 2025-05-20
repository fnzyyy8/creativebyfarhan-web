<script setup lang="ts">

const root = ref()
const currentSelection = ref("")


onMounted(() => {

  if (!root.value) return;

  const observeElement = root.value.querySelectorAll('.black,.white')

  const observer = new IntersectionObserver((entries) => {
    let visibleBlack = false
    let visibleWhite = false
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        if (entry.target.classList.contains("black")) {
          visibleBlack = true
        }
        if (entry.target.classList.contains("white")) {
          visibleWhite = true
        }
      }
    })

    if (visibleBlack) {
      currentSelection.value = "Black"
    }
    if (visibleWhite) {
      currentSelection.value = "White"
    }
  }, {
    threshold: 0,
    rootMargin: '0px 0px -100% 0px'
  })
  observeElement.forEach((el: any) => observer.observe(el))

})


</script>

<template>

  <div ref="root" class="relative root">

    <div class="black">

    </div>

    <div class="white">

    </div>
    <div class="black">

    </div>
    <div class="white">

    </div>
    <div class="sticky-info">
      <p>{{ currentSelection }}</p>
    </div>
    <div class="box">
    </div>
  </div>
</template>

<style scoped>
.root {
  @apply w-full;
}

.box {
  background: #317ABE;
  width: 120px;
  height: 20px;
  position: sticky;
  bottom: 120px;
  right: 50%;
}

.black {
  @apply min-h-screen;
  background: black;
}

.white {
  @apply min-h-screen;
  background: white;
}

.sticky-info {
  color: red;
  position: sticky;
  bottom: 24px;
  width: 200px;
  display: flex;
  justify-content: center;
  left: 50%;
}

</style>