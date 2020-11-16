import { getLearningPathSlug } from '../utils/slugs'
import Readmeio from '../clients/readmeio'
import { Course, Language } from '../../typings/course'
import { logProgress } from '../utils/log'
import landing from '../templates/landing'

const intlLanding = async (courses: Course[], lang: Language) => {
  const ReadMe = new Readmeio()
  const logFinished = logProgress('landing', '', lang)

  const template = landing(courses, lang)

  await ReadMe.upsertCustomPage({
    slug: getLearningPathSlug(lang),
    title: 'Learning Path',
    html: template,
    htmlmode: true,
  })

  logFinished()
}

export const handleLanding = async (
  courses: Course[],
  inLanguages: Language[]
) => Promise.all(inLanguages.map((lang) => intlLanding(courses, lang)))
