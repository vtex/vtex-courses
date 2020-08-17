import { getCourseSlug } from './../utils/slugs'
import { Course } from '../../typings/course'
import Readmeio from '../clients/readmeio'
import courseSteps from '../templates/course-overview'

export const handleCourses = (courses: Course[]) =>
  Promise.all(
    courses.map(async (course) => {
      console.log(`Updating course ${course.name}...`)
      console.log(getCourseSlug(course.name))
      const ReadMe = new Readmeio()
      const template = courseSteps(
        course.summary.map((step) => ({
          link: step.folder,
          description: step.title.en,
        })),
        course.metadata.image,
        course.overview,
        course.name
      )

      await ReadMe.upsertDoc({
        slug: getCourseSlug(course.name),
        title: course.metadata.title,
        category: await ReadMe.getCategory('courses').then(({ _id }) => _id),
        body: template,
      })

      console.log(`...updated course ${course.name}`)
    })
  )
