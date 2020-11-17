import { Course, Language } from '../../typings/course'
import { BASE_PATH } from '../utils/constants'
import { getCourseSlug } from '../utils/slugs'
import messages from './messages'

const getActiveCard = (
  title: string,
  description: string,
  image: string,
  name: string,
  lang: Language
) =>
  `<a class="course-link" href="${BASE_PATH}/docs/${getCourseSlug(
    name,
    '',
    lang
  )}">
    <div class="course-card"}>
      <img class="active-card course-icon" src="${image}" width="90" />
      <h3 class="active-card">
        <p class="course-title">${title}<p>
      </h3>
      <p class="course-description">
        ${description}
      </p>
    </div>
  </a>`

const getInactiveCard = (
  title: string,
  description: string,
  image: string,
  lang: Language
) =>
  `<div class="inactive-border"}>
    <img class="inactive-card" src="${image}" width="90" />
    <h3 class="inactive-card">
      <p class="course-title">${title}<p>
    </h3>
    <div class="label">${messages.comingSoon[lang]}</div>
    <p class="course-description">
      ${description}
    </p>
  </div>`

const getCourse = (
  { isActive, metadata: { description, image, title }, name }: Course,
  lang: Language
) => `
${
  isActive
    ? getActiveCard(description[lang], image, title[lang], name, lang)
    : getInactiveCard(description[lang], image, title[lang], lang)
}`

export default (courses: Course[], lang: Language = 'en') => `
<style>
  #hub-container > .hub-container {
    display: flex;
    align-items: center;
    justify-content: center;
  }
</style>
<div class="course-container">
  ${courses.map((course) => getCourse(course, lang)).join('')}
</div>`
