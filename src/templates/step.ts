export default (content: string, slug: string, hasAnswersheet: boolean) => `
  [block:html]
  ${JSON.stringify({
    html: `<style>
    section#hub-content header h1, section#hub-content header h2 {
      color: #f71963
    }

    #hub-sidebar-parent{
      display:none
    }

    p {
      line-height: 1.5rem;
    }
  </style>`,
  })}
  [/block]
  ${content}

  ${
    hasAnswersheet
      ? `### Está com dúvidas?

  Confira [aqui o gabarito para esta etapa](https://developers.vtex.com/docs/${slug}-answersheet) ou peça ajuda a um de nossos monitores`
      : ''
  }
`
