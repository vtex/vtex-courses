import slugify from 'slugify'

import { Language } from '../../typings/course'
import { BASE_PATH } from './constants'

const createSlug = (text: string) =>
  slugify(`${text}`, {
    remove: /_/g,
  })

const getStep = (step: string) => (step ? `-step${createSlug(step)}` : '')

export const languageSlugFormatter = (lang: Language) => `-lang-${lang}`

export const getCourseSlug = (
  course: string,
  step = '',
  lang: Language = 'en'
) =>
  `course-${createSlug(course)}${getStep(step)}${languageSlugFormatter(lang)}`

export const getAnswersheetSlug = (stepSlug: string) =>
  `${BASE_PATH}/docs/${stepSlug}-answersheet`

export const getLearningPathSlug = (lang: Language = 'en') =>
  `learning-path${languageSlugFormatter(lang)}`
