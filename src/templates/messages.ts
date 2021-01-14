const congratulationsMsg = (congrats: string, youReDone: string) =>
  `<b class="rebelPink">${congrats}</b>, ${youReDone}!`

interface LanguageSwitcher {
  pt?: string
  en?: string
  es?: string
}

const messages: Record<string, LanguageSwitcher> = {
  back: {
    pt: 'voltar',
    en: 'back',
  },
  timeLeft: {
    pt: 'Ainda tem tempo sobrando?',
    en: 'Still have time left?',
  },
  comingSoon: {
    pt: 'Em breve',
    en: 'Coming soon',
  },
  tryChallenge: {
    pt: 'Tenta nosso desafio para este curso!',
    en: 'Try our challenge for this course!',
  },
  congrats: {
    pt: congratulationsMsg('Parabéns', 'você terminou o curso'),
    en: congratulationsMsg('Congratulations', 'you finished the course'),
  },
  finishCourse: {
    pt: 'Finalizar Curso',
    en: 'Finish Course',
  },
  anyQuestion: {
    pt: 'Está com duvidas?',
    en: 'Any questions?',
  },
  checkAnswersheet: {
    pt: 'Veja o [gabarito para esta etapa]',
    en: 'See the [answersheet for this step]',
  },
  officeHours: {
    pt: 'participe do nosso [office hours]',
    en: 'join us on our [office hours]',
  },
  answersheetTo: {
    pt: 'Gabarito para o passo',
    en: 'Answersheet to ',
  },
  challengeFor: {
    pt: 'Desafio do Curso',
    en: 'Challenge for the Course',
  },
  contentBetter: {
    pt: 'Ajude-nos a fazer este conteúdo melhor!',
    en: 'Help us make this content better!',
  },
  problemPR: {
    pt:
      'Os cursos do VTEX IO são de código aberto. Se você perceber algum problema, pode abrir um pull request!',
    en:
      'VTEX IO courses are open source. If you see something wrong, you can open a pull request!',
  },
  contribute: {
    pt: 'Faça uma contribuição',
    en: 'Make a contribution',
  },
  openIssue: {
    pt: 'abra uma issue',
    en: 'open an issue',
  },
  or: {
    pt: 'ou',
    en: 'or',
  },
}

export default messages
