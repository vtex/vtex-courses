import { getStepStyles } from './stepStyles';
import { getAnswersheets, getCourseFileContents } from '../utils/files'
import { getLangFromFile } from '../utils/languageFromFile'

const getCodes = (course: string, step: string) =>
  getAnswersheets(course, step).map((cheatFile) => ({
    language: getLangFromFile(cheatFile),
    name: cheatFile,
    code: getCourseFileContents(course, `answersheet/files/${cheatFile}`, step),
  }))

export default (course: string, step: string) => {
  return `
  ${getStepStyles()}
  [block:code]
  ${JSON.stringify({
    codes: getCodes(course, step),
  })}
  [/block]
`
}
