import { es } from '@formkit/i18n'
import { defineFormKitConfig } from '@formkit/vue'
import { rootClasses } from './formkit.theme.ts'
export default defineFormKitConfig({
    config: {
        rootClasses
    },
    locales: { es },
    locale: 'es'
})