<script setup lang="ts">
import {contacts} from '~/data/contacts.json'
import {useContacts} from "~/stores/contactsStore";
import {useLenis, VueLenis} from "lenis/vue";
import gsap from "gsap";

const contactStore = useContacts()

const lenis = useLenis()


const {isContactModalOpen, modalRef} = storeToRefs(contactStore)

watch(isContactModalOpen, (newVal) => {

  if (newVal) {
    gsap.fromTo(modalRef.value, {
          duration: 0.3,
          opacity: 0,
          y: 100
        },
        {
          duration: 0.3,
          opacity: 1,
          y: 0,
          ease: "power3.out"
        })
    lenis.value?.stop()
  } else {
    gsap.to(modalRef.value, {
      opacity: 0,
      duration: 0.4,
      ease: 'power2.in',
    })
    lenis.value?.start()
  }
})

const closeContactModal = async () => {
  if (modalRef.value) {
    await gsap.to(modalRef.value, {
      opacity: 0,
      y: -30,
      duration: 0.4,
      ease: 'power2.in',
    })
  }
  isContactModalOpen.value = false
}

</script>


<template>
  <VueLenis>
    <div class="outer-container-contact" v-show="isContactModalOpen" ref="modalRef">
      <div class="contact">
        <div class="button-close mt-3 ml-3">
          <button @click="closeContactModal" type="button">
            close
          </button>
        </div>
        <div class="container-contact">
          <h1>Contact</h1>
        </div>
        <div class="socialMedia">
          <ul class="grid grid-rows-3 gap-x-12">
            <li v-for="{title,link} in contacts">
              <a :href="link" target="_blank">{{ title }}</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </VueLenis>
</template>

<style scoped>
.outer-container-contact {
  @apply fixed w-full z-50 backdrop-blur;
  height: 100vh;
}

.contact {
  @apply absolute text-black bg-white opacity-100 z-50 rounded-xl grid grid-cols-12 grid-rows-4 shadow-sm shadow-white;
  width: 40%;
  height: 60%;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

}

.container-contact {
  @apply grid items-center justify-center col-start-2 col-end-12 row-start-2 row-end-2 border-gray-600;
}

.socialMedia {
  @apply col-start-2 col-end-12 row-start-3 row-end-4 grid grid-cols-1 grid-rows-1;
}

.resume {
  @apply col-start-7 col-end-12 row-start-3 row-end-4 grid grid-cols-1 grid-rows-1;
}

li a {
  @apply block text-2xl self-stretch  w-full h-full text-center ;
}

li a:hover {
  @apply underline;
}

.button-close {
  @apply col-start-11 col-end-13;

  button {
    @apply px-4 py-2 border rounded-full border-black transition-colors duration-500;
  }

  button:hover {
    @apply bg-black text-white border-white transition-colors duration-500;
  }
}


</style>