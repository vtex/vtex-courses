import { getStepStyles } from './stepStyles'
import { BASE_PATH } from '../utils/constants'

export default (
  content: string,
  slug: string,
  hasAnswersheet: boolean,
  isLast: boolean
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
      ? `<div
        id="finish-course">
        <a id="finish-link" href="/learning/page/training-week-learning-path">Finalizar Curso</a>
      </div>`
      : ``
  }
`
