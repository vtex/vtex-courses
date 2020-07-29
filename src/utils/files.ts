import fs from 'fs'

const COURSES_PATH = `courses`

export const getCourseFileContents = (
  course: string,
  path: string,
  step?: string
) => {
  try {
    const content = fs
      .readFileSync(
        `${COURSES_PATH}/${course}/${step ? `${step}/${path}` : path}`
      )
      .toString('utf-8')

    return path.includes('.json') ? JSON.parse(content) : content
  } catch {
    return ''
  }
}

export const getCourses = () => fs.readdirSync(COURSES_PATH)

export const getAnswersheets = (course: string, step: string) => {
  try {
    console.log(`${COURSES_PATH}/${course}/${step}/answersheet/files`)
    return fs.readdirSync(`${COURSES_PATH}/${course}/${step}/answersheet/files`)
  } catch {
    return []
  }
}

export const getFileName = (filePath: string) => filePath.split('.')[0]
