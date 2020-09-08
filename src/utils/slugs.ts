import slugify from 'slugify'

const createSlug = (text: string) =>
  slugify(`${text}`, {
    remove: /_/g,
  })

const getStep = (step: string) => (step ? `-step${createSlug(step)}` : '')

export const getCourseSlug = (course: string, step = '') =>
  `course-${createSlug(course)}${getStep(step)}`
