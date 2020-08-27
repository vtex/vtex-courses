import { getStepStyles } from './stepStyles'
import { BASE_PATH } from '../utils/constants'

export default (content: string, slug: string, hasAnswersheet: boolean) => `
  ${getStepStyles()}
  ${content}

  ${
    hasAnswersheet
      ? `### Está com dúvidas?

  Confira [aqui o gabarito para esta etapa](${BASE_PATH}/docs/${slug}-answersheet) ou peça ajuda a um de nossos monitores`
      : ''
  }
`
