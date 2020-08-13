import { getAnswersheets, getCourseFileContents } from '../utils/files'

const getCodes = (course: string, step: string) =>
  getAnswersheets(course, step).map((cheatFile) => ({
    language: 'typescript',
    name: cheatFile,
    code: getCourseFileContents(course, `answersheet/files/${cheatFile}`, step),
  }))

export default (course: string, step: string) => `
  [block:code]
  ${JSON.stringify({
    codes: getCodes(course, step),
  })}
  [/block]
`
