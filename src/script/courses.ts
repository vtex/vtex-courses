import { getCourseSlug } from '../utils/slugs'
import { Course, Language } from '../../typings/course'
import Readmeio from '../clients/readmeio'
import courseOverview from '../templates/course-overview'
import { logProgress } from '../utils/log'

const intlCourse = async (course: Course, lang: Language) => {
  const logFinished = logProgress('course', getCourseSlug(course.name), lang)

  const ReadMe = new Readmeio()
  const template = courseOverview(
    course.summary.map((step) => ({
      link: step.folder,
      description: step.title,
    })),
    course.metadata.image,
    course.overview,
    course.name,
    lang
  )

  await ReadMe.upsertDoc({
    hidden: !course.isActive,
    slug: getCourseSlug(course.name, '', lang),
    title: course.metadata.title[lang],
    category: await ReadMe.getCategory('courses').then(({ _id }) => _id),
    body: template,
  })

  logFinished()
}

export const handleCourses = (courses: Course[], inLanguages: Language[]) =>
  Promise.all(
    inLanguages.map((lang) =>
      courses.map(async (course) => intlCourse(course, lang))
    )
  )
