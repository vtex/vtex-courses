import { Course } from '../../typings/course'
import ReadMeServices from '../clients/readme-service'

export const handleCoursesOrder = (courses: Course[]) => {
  const ReadMe = new ReadMeServices()
  return Promise.all(
    courses.map(async (course) => {
      console.log(`Getting steps order from ${course.name}...`)
      const courseOrder = {
        course: course.name,
        steps: course.summary.map((step) => step.folder),
      }

      await ReadMe.postStepsOrder(courseOrder)

      console.log(`...updated steps order of ${course.name}`)
    })
  )
}
