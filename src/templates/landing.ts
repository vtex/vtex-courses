import coursesTemplate from './courses'
import { Course, Language } from '../../typings/course'

export default (courses: Course[], lang: Language = 'en') =>
  coursesTemplate(courses, lang)
