export const useScroll = defineStore('scrollStore', () => {
    const scrollY = ref(0)
    const scrollX = ref(0)
    const {y, x} = useWindowScroll()

    watch(y, (newY) => {
        scrollY.value = newY
    })

    watch(x, (newX) => {
        scrollX.value = newX
    })


    return {
        scrollX,
        scrollY
    }
})