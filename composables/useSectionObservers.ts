import {useSectionStore} from "~/stores/sectionStore";

export function useSectionObservers() {
    const pageSection = ref()

    const sectionStore = useSectionStore()

    function pageObserver() {
        if (!pageSection.value) return null
        const pageAreaSection = pageSection.value.querySelectorAll("section.black-area")

        const observer = new IntersectionObserver((entries) => {
            let blackArea = false
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    if (entry.target.classList.contains("black-area")) {
                        blackArea = true
                    }
                }
            })

            if (blackArea) {
                sectionStore.pageCurrentSection = "black-area"
                // console.log(sectionStore.pageCurrentSection)
            } else if (!blackArea) {
                sectionStore.pageCurrentSection = "default-area"
                // console.log(sectionStore.pageCurrentSection)
            }
        }, {
            rootMargin: "-5% 0px 0px 0px",
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