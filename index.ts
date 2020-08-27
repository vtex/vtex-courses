import { handleSteps } from './src/script/steps'
import { handleCourses } from './src/script/courses'
import { handleLanding } from './src/script/landing'
import { handleCoursesOrder } from './src/script/course-order'
import configs from './src/utils/configs'

const courses = configs()

const execute = async () => {
  await handleCoursesOrder(courses)
  await handleLanding(courses)
  await handleCourses(courses)
  await handleSteps(courses)
}

execute()
