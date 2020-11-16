import { Language } from "../../typings/course"
import { getCourseFileContents } from "../utils/files"
import messages from './messages'

export default (course: string, lastStepSlug: string, lang: Language = 'en') => {
    return `
    ${getCourseFileContents(course, {rawPath: 'challenge', lang})}
  
    [block:html]
    ${JSON.stringify({
      html: `<div id="back-button">
              <i class="fa fa-angle-left"></i>
              <a id="back-link" href="/learning/docs/${lastStepSlug}">${messages['back'][lang]}</a>
            </div>`,
    })}
    [/block]
  `
  }