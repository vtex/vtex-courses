import { getStepStyles } from './stepStyles'
import { BASE_PATH } from '../utils/constants'
import courseEnding from './course-ending'

const getFinishCourseBtn = () =>
  `
[block:html]
${JSON.stringify({
  html: `<div id="finish-course">
  <a id="finish-link" href="/learning/page/learning-path">Finalizar Curso</a>
</div>`,
})}
[/block]
`

export default (
  content: string,
  slug: string,
  hasAnswersheet: boolean,
  isLast: boolean,
  challengeLink?: string
) => `
  ${getStepStyles()}
  ${content}

  ${
    hasAnswersheet
      ? `### Está com dúvidas?

  Confira [aqui o gabarito para esta etapa](${BASE_PATH}/docs/${slug}-answersheet) ou peça ajuda a um de nossos monitores`
      : ''
  }

  ${
    isLast
      ? `
      ${courseEnding(challengeLink)}
      ${getFinishCourseBtn()}
      `
      : ``
  }
`
