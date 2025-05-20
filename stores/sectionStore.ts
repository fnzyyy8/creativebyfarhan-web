export const useSectionStore = defineStore('section', () => {
    const pageCurrentSection = ref('')

    return {
        pageCurrentSection,
    }
})