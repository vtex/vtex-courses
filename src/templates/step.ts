import { getStepStyles } from './stepStyles'
import { BASE_PATH } from '../utils/constants'
import { isLastStep } from '../utils/lastStep'

export default (content: string, slug: string, hasAnswersheet: boolean) => `
  ${getStepStyles()}
  ${content}

  ${
    hasAnswersheet
      ? `### Está com dúvidas?

  Confira [aqui o gabarito para esta etapa](${BASE_PATH}/docs/${slug}-answersheet) ou peça ajuda a um de nossos monitores`
      : ''
  }

  ${
    isLastStep(slug)
      ?
      `<div
        id="finish-course">
        <i class="fa fa-chevron-right" ></i>
        <a id="finish-link" href="/learning/page/training-week-learning-path">Finalizar Curso</a>
      </div>`
      : ``
  }
`