import { handleSteps } from './src/script/steps'
import { handleCourses } from './src/script/courses'
import { handleLanding } from './src/script/landing'
import configs from './src/utils/configs'

const courses = configs()

Promise.all([
  handleLanding(courses),
  handleCourses(courses),
  handleSteps(courses),
])