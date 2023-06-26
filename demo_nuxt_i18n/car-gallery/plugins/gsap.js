import { gsap } from 'gsap'
import { CSSPlugin } from 'gsap/CSSPlugin'

gsap.registerPlugin(CSSPlugin)

export default {
    install: (app) => {
        app.config.globalProperties.$gsap = gsap
    }
}
