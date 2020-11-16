import { getLearningPathSlug } from './../utils/slugs';
import Readmeio from '../clients/readmeio'
import { Course, Language } from '../../typings/course'
import { logLanguage } from '../utils/log'
import landing from '../templates/landing'

export const handleLanding = async (courses: Course[], inLanguages: Language[]) => 
  Promise.all(
    inLanguages.map(lang => intlLanding(courses, lang))
  )

const intlLanding = async (courses: Course[], lang: Language) => {
  const ReadMe = new Readmeio()

  const template = landing(courses, lang)

  await ReadMe.upsertCustomPage({
    slug: getLearningPathSlug(lang),
    title: 'Learning Path',
    html: template,
    htmlmode: true,
  })

  console.log(`Landing page updated 🚀${logLanguage(lang)}`)
}