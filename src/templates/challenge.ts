import { getCourseFileContents } from "../utils/files"

export default (course: string, lastStepSlug: string) => {
    return `
    ${getCourseFileContents(course, 'challenge.md')}
  
    [block:html]
    ${JSON.stringify({
      html: `<div id="back-button">
              <i class="fa fa-angle-left"></i>
              <a id="back-link" href="/learning/docs/${lastStepSlug}">voltar</a>
            </div>`,
    })}
    [/block]
  `
  }