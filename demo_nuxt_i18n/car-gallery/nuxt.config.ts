// https://nuxt.com/docs/api/configuration/nuxt-config
import { NuxtConfig } from '@nuxt/types'

const config: NuxtConfig = {
    // Other Nuxt.js configuration...
    app:{
      pageTransition:{name:'route',mode:'out-in'},
     },
    modules: [
             '@pinia/nuxt',
             '@nuxtjs/i18n',
               
      ],
        i18n: {
          lazy:true,
          langDir: "locales",
          strategy: "prefix_except_default",
          locales:[
            {
              code: "en-US",
              iso:"en-US",
              name:"English(US)",
              file:"en-US.json"
            },
            {
              code: "in-HI",
              iso:"in-HI",
              name:"हिंदी",
              file:"in-HI.json"
            }
          ],
          defaultLocale:"en-US",
          vuei18n:{
            fallbackLOcale:"en-US"
          }

    /* module options */
  },
    plugins: [
      // Other plugins...
      // { src: '~/plugins/gsap.js', ssr: false },
      // { src:   '~/plugins/axios-plugin.js',},
      // { src:  '~/plugins/globalMixin.js'}
      // { src: '~/plugins/globalMixins.js', mode: 'client' }
       ],
    // Other Nuxt.js configuration...
  }
  
  export default config