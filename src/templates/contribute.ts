import { Language } from '../../typings/course'
import { REPO_EDIT_URL, REPO_NEW_ISSUE_URL } from '../utils/constants'
import messages from './messages'

export default (path: string, lang: Language) => `
<hr>
<div id="contribute-container">
  <p id="contribute-title"> 
    ${messages.contentBetter[lang]}
  </p>
  <p id="contribute-description">
    ${messages.problemPR[lang]}
  </p>

  <a id="contribute-button" href="${REPO_EDIT_URL(path)}">
    ${messages.contribute[lang]}
  </a>

  <p id="contribute-issue">
    ${messages.or[lang]} <a href="${REPO_NEW_ISSUE_URL}">${
  messages.openIssue[lang]
}</a>
  </p>
</div>
`
