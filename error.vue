<script setup lang="ts">

const handleError = () => clearError({redirect: '/'})
</script>

<template>
  <hero-section>
    <div class="h-screen flex flex-col gap-6 items-center justify-center text-center p-6">
      <div>
        <h1 class="glitch text-8xl font-semibold">
          <span>404</span>
          404
          <span>404</span>
        </h1>
        <p class="font-thin text-xs">This page could not be found</p>
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

.glitch {
  @apply relative;
  text-shadow: 0.05em 0 0 #00fffc, -0.03em -0.04em 0 #fc00ff,
  0.025em 0.04em 0 #fffc00;
  animation: glitch 725ms infinite;
  h1 {
    @apply sm:text-6xl text-xl font-semibold italic
  }
}

.glitch span {
  position: absolute;
  top: 0;
  left: 0;
}
.glitch span:first-child {
  animation: glitch 500ms infinite;
  clip-path: polygon(0 0, 100% 0, 100% 35%, 0 35%);
  transform: translate(-0.04em, -0.03em);
  opacity: 0.75;
}

.glitch span:last-child {
  animation: glitch 375ms infinite;
  clip-path: polygon(0 65%, 100% 65%, 100% 100%, 0 100%);
  transform: translate(0.04em, 0.03em);
  opacity: 0.75;
}

@keyframes glitch {
  0% {
    text-shadow: 0.05em 0 0 #00fffc, -0.03em -0.04em 0 #fc00ff,
    0.025em 0.04em 0 #fffc00;
  }
  15% {
    text-shadow: 0.05em 0 0 #00fffc, -0.03em -0.04em 0 #fc00ff,
    0.025em 0.04em 0 #fffc00;
  }
  16% {
    text-shadow: -0.05em -0.025em 0 #00fffc, 0.025em 0.035em 0 #fc00ff,
    -0.05em -0.05em 0 #fffc00;
  }
  49% {
    text-shadow: -0.05em -0.025em 0 #00fffc, 0.025em 0.035em 0 #fc00ff,
    -0.05em -0.05em 0 #fffc00;
  }
  50% {
    text-shadow: 0.05em 0.035em 0 #00fffc, 0.03em 0 0 #fc00ff,
    0 -0.04em 0 #fffc00;
  }
  99% {
    text-shadow: 0.05em 0.035em 0 #00fffc, 0.03em 0 0 #fc00ff,
    0 -0.04em 0 #fffc00;
  }
  100% {
    text-shadow: -0.05em 0 0 #00fffc, -0.025em -0.04em 0 #fc00ff,
    -0.04em -0.025em 0 #fffc00;
  }
}


</style>
