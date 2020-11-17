import fs from 'fs'

import { CourseInfo, Language } from '../../typings/course'

const COURSES_PATH = `courses`

export const getCourseFileContents = (
  course: string,
  { rawPath, step, lang }: PathParams,
  toJSON?: boolean
) => {
  try {
    let filePath = `${COURSES_PATH}/${course}`

    if (step) {
      filePath += `/steps/${step}`
    }

    if (rawPath) {
      filePath += `/${rawPath}`
    }

    if (lang && !toJSON) {
      filePath += `/${lang}.md`
    }

    const content = fs.readFileSync(filePath).toString('utf-8')

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
    return fs.readdirSync(
      `${COURSES_PATH}/${course}/steps/${step}/answersheet/files`
    )
  } catch {
    return []
  }
}

export const getFileName = (filePath: string) => filePath.split('.')[0]

interface PathParams {
  rawPath?: string
  step?: string
  lang?: Language
}
