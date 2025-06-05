import gsap from "gsap";
import {useLenis} from "lenis/vue";
import {ScrollTrigger} from "gsap/ScrollTrigger";

export function useAnimate() {
    const heroTagline = ref()
    const taglineRef = ref()


    const animateHero = () => {
        const tl = gsap.timeline()
        const items = heroTagline.value.querySelectorAll('li')
        const head = heroTagline.value.querySelectorAll('h1')


        tl.from(head, {
            duration: 0.3,
            x: -20,
            opacity: 0,
            ease: "expo.out"
        }).from(items, {
            duration: 0.3,
            ease: 'expo.out',
            x: -10,
            opacity: 0,
            stagger: 0.3
        })

    }

    const animateTagline = () => {
        gsap.registerPlugin(ScrollTrigger)


        const lenis = useLenis()
        lenis.value?.on('scroll', ScrollTrigger.update)

        gsap.ticker.add((time) => {
            lenis.value?.raf(time * 1000)
        })

        gsap.ticker.lagSmoothing(0)
        const tagline = taglineRef.value.querySelectorAll('.tagline-detail-about')
        const aboutMe = taglineRef.value.querySelectorAll('.about-me')
        const aboutWeb = taglineRef.value.querySelectorAll('.about-web')
        gsap.fromTo(aboutWeb, {
            opacity: 0,
            y: 30
        }, {
            duration: 0.3,
            ease: 'expo.out',
            opacity: 1,
            y: 0,
            scrollTrigger: {
                trigger: taglineRef.value,
                scrub: true,
                end: "top -60%",
            }
        })
        gsap.fromTo(tagline,
            {opacity: 0, y: -20},
            {
                opacity: 1,
                delay: 0.3,
                y: 0,
                stagger: 0.1,
                scrollTrigger: {
                    trigger: taglineRef.value,
                    scrub: true,
                    end: "top -30%"
                }
            }
        )
        gsap.fromTo(aboutMe, {
                opacity: 0,
                delay: 0.3,
                x: -100
            }, {
                opacity: 1,
                x: 0,
                scrollTrigger: {
                    trigger: taglineRef.value,
                    scrub: true,
                    end: "top -30%",
                }
            }
        )
    }

    onMounted(() => {
        animateHero()
        animateTagline()
    })


    return {
        heroTagline,
        taglineRef,
    }
}