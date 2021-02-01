import { Language } from '../../typings/course'
import { getFileContent, getCourseFilePath } from '../utils/files'
import messages from './messages'
import contribute from './contribute'

export default (
  course: string,
  lastStepSlug: string,
  lang: Language = 'en'
) => {
  const challengePath = getCourseFilePath({
    course,
    rawPath: 'challenge',
    lang,
  })

  return `
    ${getFileContent(challengePath)}
  
    [block:html]
    ${JSON.stringify({
    html: `<div id="back-button">
              <i class="fa fa-angle-left"></i>
              <a id="back-link" href="/docs/${lastStepSlug}">${messages.back[lang]}</a>
            </div>`,
  })}
    [/block]

    ${contribute(challengePath, lang)}
  `
}
