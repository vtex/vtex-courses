const getChallengeText = (challengeLink?: string) => `
<div class="finish-elems">Ainda tem tempo sobrando?</div>
<a class="finish-elems" href=${challengeLink}>Tenta nosso desafio para este curso!</a>
`

const getCourseEnding = (challengeLink?: string) =>
  `<div id="finished-course">
  <div class="finish-elems"><b class="rebelPink">Parabéns</b>, você terminou o curso!</div>
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
