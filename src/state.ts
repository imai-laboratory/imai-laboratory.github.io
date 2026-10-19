import { computed, ref } from 'vue'
import { GetGeneralTexts } from './texts_general.js'

export const lang = ref<'ja' | 'en'>((localStorage.getItem('imai-lang') as 'ja' | 'en') || 'ja')
export const texts = computed(() => GetGeneralTexts(lang.value) as Record<string, string>)
export function changeLang(value: string) {
  lang.value = value === 'en' ? 'en' : 'ja'
  localStorage.setItem('imai-lang', lang.value)
}
