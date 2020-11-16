const congratulationsMsg = (congrats: string, youReDone: string) => `<b class="rebelPink">${congrats}</b>, ${youReDone}!`

interface LanguageSwitcher {
  pt?: string
  en?: string
  es?: string
}

const messages: Record<string, LanguageSwitcher> = {
  'back': {
    pt: 'voltar',
    en: 'back'
  },
  'timeLeft': {
    pt: 'Ainda tem tempo sobrando?',
    en: 'Still have time left?',
  },
  'comingSoon': {
    pt: 'Em breve',
    en: 'Coming soon'
  },
  'tryChallenge': {
    pt: 'Tenta nosso desafio para este curso!',
    en: 'Try our challenge for this course!',
  }, 
  'congrats': {
    pt: congratulationsMsg('Parabéns', 'você terminou o curso'),
    en: congratulationsMsg('Congratulations', 'you finished the course')
  },
  'finishCourse': {
    pt: 'Finalizar Curso',
    en: 'Finish Cours'
  }, 
  'anyQuestion': {
    pt: 'Está com duvidas?',
    en: 'Any questions?'
  },
  'checkAnswersheet': { 
    pt: 'Confira aqui o [gabarito para esta etapa]',
    en: 'Check here the [answersheet for this step]'
  }, 
  'answersheetTo': {
    pt: 'Gabarito para o passo',
    en: 'Answersheet to '
  },
  'challengeFor': {
    pt: 'Desafio do Curso',
    en: 'Challenge for the Course'
  }
}

export default messages