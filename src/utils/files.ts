import fs from 'fs'

import { CourseInfo } from '../../typings/course'

const COURSES_PATH = `courses`

export const getCourseFileContents = (
  course: string,
  path: string,
  step?: string,
  toJSON?: boolean
) => {
  try {
    const content = fs
      .readFileSync(
        `${COURSES_PATH}/${course}/${step ? `${step}/${path}` : path}`
      )
      .toString('utf-8')

    return toJSON ? JSON.parse(content) : content
  } catch {
    return ''
  }
}

export const getCourses = () =>
  JSON.parse(
    fs.readFileSync(`${COURSES_PATH}/index.json`).toString('utf-8')
  ) as CourseInfo[]

export const getAnswersheets = (course: string, step: string) => {
  try {
    return fs.readdirSync(`${COURSES_PATH}/${course}/${step}/answersheet/files`)
  } catch {
    return []
  }
}

export const getFileName = (filePath: string) => filePath.split('.')[0]
