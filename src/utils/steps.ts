import { getCourseFileContents } from './files'
import { CourseStep } from '../../typings/course'

export default (course: string, summary: CourseStep[]) =>
  summary.map((step) => ({
    ...step,
    content: getCourseFileContents(course, 'en.md', step.folder),
    answersheet: getCourseFileContents(course, 'answersheet.md', step.folder),
  }))