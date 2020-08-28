import { getFileName, getCourseFileContents, getCourses } from './files'
import { Course } from '../../typings/course'

const COURSE_STRUCTURE_FILES = ['metadata.json', 'overview.md', 'summary.json']

export default () =>
  getCourses().map(({ folder, isActive }) =>
    COURSE_STRUCTURE_FILES.reduce(
      (acc, file) => ({
        ...acc,
        [getFileName(file)]: getCourseFileContents(
          folder,
          file,
          undefined,
          file.includes('json')
        ),
      }),
      { name: folder, isActive } as Course
    )
  )
