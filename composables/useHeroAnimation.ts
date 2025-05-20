import gsap from "gsap";
import {ScrollTrigger} from "gsap/ScrollTrigger";
import { ref, onMounted } from "vue";


export function useHeroAnimation() {
    const heroTagline = ref()

    gsap.registerPlugin(ScrollTrigger)

    function animateHero() {
        const tl = gsap.timeline()

        tl.from(heroTagline.value.querySelectorAll("h1"), {
            opacity: 0,
            x: -20,
            ease: "expo.in"
        })
            .from(heroTagline.value.querySelectorAll("li"), {
                opacity: 0,
                x: -20,
                ease: "expo.in",
                stagger: 0.5,
            })
    }


    function zoomTagline() {
        gsap.to(heroTagline.value.querySelector('.tagline-box'), {
            scale: 1.1,
            opacity: 0,
            scrollTrigger: {
                trigger: heroTagline.value,
                scrub: true,
                start: "0%"
            }
        })
    }


    onMounted(() => {
        animateHero()
        zoomTagline()
    })

    return {
        heroTagline,
    }
}