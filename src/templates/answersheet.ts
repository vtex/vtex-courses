import { getCourseFilePath, getFileContent } from '../utils/files'
import { getStepStyles } from './stepStyles'
import { getLangFromFile } from '../utils/languageFromFile'
import { getCourseSlug } from '../utils/slugs'
import messages from './messages'
import { Language } from '../../typings/course'
import contribute from './contribute'

const getCodes = (course: string, step: string, answersheetPaths: string[]) =>
  answersheetPaths.map((cheatFile) => ({
    language: getLangFromFile(cheatFile),
    name: cheatFile,
    code: getFileContent(
      getCourseFilePath({
        course,
        rawPath: `answersheet/${cheatFile}`,
        step,
      })
    ),
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
            <a id="back-link" href="/docs/${getCourseSlug(
              course,
              step,
              lang
            )}">${messages.back[lang]}</a>
          </div>`,
  })}
  [/block]

  ${contribute(
    getCourseFilePath({
      course,
      rawPath: `answersheet`,
      step,
    }),
    lang
  )}
`
}
