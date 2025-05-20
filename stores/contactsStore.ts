export const useContacts = defineStore('contactStore', () => {

    const isContactModalOpen = ref(false)
    const modalRef = ref()

    const toggleContactModal = () => {
        isContactModalOpen.value = !isContactModalOpen.value
    }

    const openContactModal = () => {
        isContactModalOpen.value = true
    }

    const closeContactModal = () => {
        isContactModalOpen.value = false
    }


    return {
        openContactModal,
        closeContactModal,
        toggleContactModal,
        isContactModalOpen,
        modalRef

    }

})