import { createI18n } from 'vue-i18n'
import en from '@/locales/en.json'
import ur from '@/locales/ur.json'

export default createI18n({
  locale: 'en',
  fallbackLocale: 'en',
  messages: {
    en,
    ur
  },
  numberFormats: {
    en: {
      currency: {
        style: 'currency',
        currency: 'USD'
      }
    },
    ur: {
      currency: {
        style: 'currency',
        currency: 'PKR'
      }
    }
  }
})
