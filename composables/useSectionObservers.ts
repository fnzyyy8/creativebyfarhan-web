import {useSectionStore} from "~/stores/sectionStore";

export function useSectionObservers() {
    const pageSection = ref()

    const sectionStore = useSectionStore()

    function pageObserver() {
        if (!pageSection.value) return null
        const pageAreaSection = pageSection.value.querySelectorAll("section.dark-area")

        const observer = new IntersectionObserver((entries) => {
            let darkArea = false
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    if (entry.target.classList.contains("dark-area")) {
                        darkArea = true
                    }
                }
            })

            if (darkArea) {
                sectionStore.pageCurrentSection = "dark-area"
            } else {
                sectionStore.pageCurrentSection = "default-area"
            }
        }, {
            rootMargin: "-10% 0px -100% 0px",
            threshold: 0,
        })

        pageAreaSection.forEach((el: any) => observer.observe(el))
    }

    onMounted(() => {
        pageObserver()
    })

    return {
        pageSection
    }
}