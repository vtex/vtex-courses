import { getStepStyles } from './stepStyles'
import courseEnding from './course-ending'
import messages from './messages'
import { Language } from '../../typings/course'
import { BASE_PATH, OFFICE_HOURS_LINK } from '../utils/constants'
import contribute from './contribute'

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

const formatAnswersheetURL = (answersheetSlug?: string) =>
  `${BASE_PATH}/docs/${answersheetSlug}`

export default (
  content: string,
  hasAnswersheet: boolean,
  isLast: boolean,
  stepPath: string,
  lang: Language = 'en',
  answersheetSlug?: string,
  challengeLink?: string
) => `
  ${getStepStyles()}
  ${content}

  ${
    hasAnswersheet
      ? `### ${messages.anyQuestion[lang]}

  ${messages.checkAnswersheet[lang]}(${formatAnswersheetURL(
          answersheetSlug
        )}) ${messages.or[lang]} ${
          messages.officeHours[lang]
        }(${OFFICE_HOURS_LINK})`
      : ''
  }

  ${
    isLast
      ? `
      ${courseEnding(challengeLink, lang)}
      ${getFinishCourseBtn(lang)}
      `
      : ``
  }

  ${contribute(stepPath, lang)}
`
