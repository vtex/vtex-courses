import { getStepStyles } from './stepStyles'
import courseEnding from './course-ending'
import messages from './messages'
import { Language } from '../../typings/course'
import { getAnswersheetSlug } from '../utils/slugs'

const getFinishCourseBtn = (lang: Language = 'en') =>
  `
[block:html]
${JSON.stringify({
  html: `<div id="finish-course">
  <a id="finish-link" href="/learning/page/learning-path">${messages.finishCourse[lang]}</a>
</div>`,
})}
[/block]
`

export default (
  content: string,
  slug: string,
  hasAnswersheet: boolean,
  isLast: boolean,
  challengeLink?: string,
  lang: Language = 'en'
) => `
  ${getStepStyles()}
  ${content}

  ${
    hasAnswersheet
      ? `### ${messages.anyQuestion[lang]}

  ${messages.checkAnswersheet[lang]}(${getAnswersheetSlug(slug)})`
      : ''
  }

  ${
    isLast
      ? `
      ${courseEnding(challengeLink)}
      ${getFinishCourseBtn(lang)}
      `
      : ``
  }
`
