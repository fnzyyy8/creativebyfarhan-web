export const useCounter = defineStore('counterStore', () => {
    const value = ref(0)


    return {
        value
    }
})