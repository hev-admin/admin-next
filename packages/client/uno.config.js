import { defineConfig, presetAttributify, presetIcons, presetUno, presetWind } from 'unocss'
import presetRemToPx from '@unocss/preset-rem-to-px'

export default defineConfig({
  presets: [
    presetUno(),
    presetIcons(),
    presetAttributify(),
    presetWind(),
    presetRemToPx({ baseFontSize: 4 }),
  ],
})
