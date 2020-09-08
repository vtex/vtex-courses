import { getStepStyles } from './stepStyles'
import { getCourseFileContents } from '../utils/files'
import { getLangFromFile } from '../utils/languageFromFile'

const getCodes = (course: string, step: string, answersheetPaths: string[]) =>
  answersheetPaths.map((cheatFile) => ({
    language: getLangFromFile(cheatFile),
    name: cheatFile,
    code: getCourseFileContents(course, `answersheet/files/${cheatFile}`, step),
  }))

export default (course: string, step: string, answersheetPaths: string[]) => {
  return `
  ${getStepStyles()}
  [block:code]
  ${JSON.stringify({
    codes: getCodes(course, step, answersheetPaths),
  })}
  [/block]
`
}
