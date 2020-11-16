import { Language } from '../../typings/course'
import messages from './messages'

const getChallengeText = (challengeLink?: string, lang: Language = 'en') => `
<div class="finish-elems">${messages['timeLeft'][lang]}</div>
<a class="finish-elems" href=${challengeLink}>${messages['tryChallenge'][lang]}</a>
`

const getCourseEnding = (challengeLink?: string, lang: Language = 'en') =>
  `<div id="finished-course">
  <div class="finish-elems">${messages['congrats'][lang]}</div>
  <img class="finish-elems" src="https://media.giphy.com/media/g9582DNuQppxC/giphy.gif"/>
  ${challengeLink ? getChallengeText(challengeLink) : ''}
</div>
`

export default (challengeLink?: string) => `
[block:html]
  ${JSON.stringify({
    html: `${getCourseEnding(challengeLink)}`,
  })}
[/block]
`
