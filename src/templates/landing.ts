import coursesTemplate from '../templates/courses'
import { Course } from '../../typings/course'

export default (courses: Course[]) => coursesTemplate(courses)
