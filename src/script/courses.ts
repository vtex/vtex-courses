import { getCourseSlug } from '../utils/slugs'
import { Course, Language } from '../../typings/course'
import Readmeio from '../clients/readmeio'
import courseOverview from '../templates/course-overview'

export const handleCourses = (courses: Course[], inLanguages: Language[]) =>
  Promise.all(
    inLanguages.map(lang => courses.map(async (course) => intlCourse(course, lang)))
  )

const intlCourse = async (course: Course, lang: Language) => {
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
    slug: getCourseSlug(course.name),
    title: course.metadata.title[lang],
    category: await ReadMe.getCategory('courses').then(({ _id }) => _id),
    body: template,
  })

  console.log(`Course ${getCourseSlug(course.name)} was updated 🏫`)
}