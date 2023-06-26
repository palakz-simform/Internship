import { createI18n } from "vue-i18n"
import en from "@/locales/en.json"
import fr from "@/locales/fr.json"
import mr from "@/locales/mr.json"
export default createI18n({
    locale: "en",
    fallbackLocale: "en",
    messages: {
        en,
        fr,
        mr
    },
    numberFormats: {
        en: {
            currency: {
                style: "currency",
                currency: "USD"
            },
        },
        ja: {
            currency: {
                style: "currency",
                currency: "JPY"
            }
        }
    }
})