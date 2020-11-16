import { Language } from '../../typings/course'

const emojiLangs = {
  'pt': '🇧🇷',
  'en': '🇬🇧',
  'es': '🇨🇴'
} 

export const logLanguage = (lang: Language) => `: Language - ${emojiLangs[lang]}`