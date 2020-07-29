import slugify from 'slugify'

export const getCourseSlug = (name: string, course = '') =>
  `course-${slugify(course + name, {
    remove: /_/g,
  })}`
