import { getStepStyles } from './stepStyles'
import { getCourseFileContents } from '../utils/files'
import { getLangFromFile } from '../utils/languageFromFile'
import { getCourseSlug } from '../utils/slugs'
import messages from './messages'
import { Language } from '../../typings/course'

const getCodes = (course: string, step: string, answersheetPaths: string[]) =>
  answersheetPaths.map((cheatFile) => ({
    language: getLangFromFile(cheatFile),
    name: cheatFile,
    code: getCourseFileContents(course, {
      rawPath: `answersheet/${cheatFile}`,
      step,
    }),
  }))

export default (
  course: string,
  step: string,
  answersheetPaths: string[],
  lang: Language = 'en'
) => {
  return `
  ${getStepStyles()}
  [block:code]
  ${JSON.stringify({
    codes: getCodes(course, step, answersheetPaths),
  })}
  [/block]

  [block:html]
  ${JSON.stringify({
    html: `<div id="back-button">
            <i class="fa fa-angle-left"></i>
            <a id="back-link" href="/learning/docs/${getCourseSlug(
              course,
              step,
              lang
            )}">${messages.back[lang]}</a>
          </div>`,
  })}
  [/block]
`
}
