import antfu from '@antfu/eslint-config'
import NuxtEslintConfig from './.nuxt/eslint.config.mjs'

export default antfu(
  {
    stylistic: {
      indent: 2, // 4, or 'tab'
      quotes: 'single', // or 'double'
    }
  },
  // Add the Nuxt rules
  NuxtEslintConfig,
  // ...your other rules
)