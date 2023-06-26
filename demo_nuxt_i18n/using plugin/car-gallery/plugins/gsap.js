// import { gsap } from 'gsap'
// import { CSSPlugin } from 'gsap/CSSPlugin'

// gsap.registerPlugin(CSSPlugin)

// export default {
//     install: (app) => {
//         app.config.globalProperties.$gsap = gsap
//     }
// }

import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { ScrollToPlugin } from 'gsap/ScrollToPlugin'
import { Draggable } from 'gsap/Draggable'

export default defineNuxtPlugin((nuxtApp) => {
    if (process.client) {
        gsap.registerPlugin(ScrollTrigger, ScrollToPlugin, Draggable)
    }

    return {
        provide: {
            gsap,
            Draggable,
            ScrollTrigger,
        },
    }
})