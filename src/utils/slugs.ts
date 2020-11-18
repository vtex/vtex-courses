import slugify from 'slugify'

import { Language } from '../../typings/course'

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

export const getAnswersheetSlug = (
  course: string,
  step: string,
  lang: Language = 'en'
) =>
  `course-${createSlug(course)}${getStep(
    step
  )}-answersheet${languageSlugFormatter(lang)}`

export const getChallengeSlug = (course: string, lang: Language = 'en') =>
  `course-${createSlug(course)}-challenge${languageSlugFormatter(lang)}`

export const getLearningPathSlug = (lang: Language = 'en') =>
  `learning-path${languageSlugFormatter(lang)}`
