import fs from 'fs'

import { CourseInfo, Language } from '../../typings/course'

const COURSES_PATH = `courses`

export const getCourseFilePath = ({
  course,
  rawPath,
  step,
  lang,
  isMarkdown = true,
}: PathParams) => {
  let filePath = `${COURSES_PATH}/${course}`

  if (step) {
    filePath += `/steps/${step}`
  }

  if (rawPath) {
    filePath += `/${rawPath}`
  }

  if (lang && isMarkdown) {
    filePath += `/${lang}.md`
  }

  return filePath
}

export const getFileContent = (filePath: string, toJSON?: boolean) => {
  try {
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
    return fs.readdirSync(`${COURSES_PATH}/${course}/steps/${step}/answersheet`)
  } catch {
    return []
  }
}

export const getFileName = (filePath: string) => filePath.split('.')[0]

interface PathParams {
  course?: string
  isMarkdown?: boolean
  rawPath?: string
  step?: string
  lang?: Language
}
