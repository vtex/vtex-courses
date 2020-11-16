import { Course, Language } from '../../typings/course'
import { BASE_PATH } from '../utils/constants'
import { getCourseSlug } from '../utils/slugs'
import messages from './messages'

const applyInactive = (className: string, isActive: boolean) =>
  isActive ? `active-card ${className}` : 'inactive-card'

const getCourse = (
  { isActive, metadata: { description, image, title }, name }: Course,
  lang: Language = 'en'
) => `
<div class="${isActive ? 'course-card' : 'course-card inactive-border'}"}>
  <img class=${applyInactive(
    'course-icon',
    isActive
  )} src="${image}" width="90" />
  <h3 class=${applyInactive('', isActive)}>
    ${
      isActive
        ? `<a class="course-title" href="${BASE_PATH}/docs/${getCourseSlug(
            name,
            '',
            lang
          )}">${title[lang]}</a>`
        : `<p class="course-title">${title[lang]}<p>`
    }
  </h3>
  ${isActive ? '' : `<div class="label">${messages['comingSoon'][lang]}</div>`}
  <p class="course-description">
    ${description[lang]}
  </p>
</div>`

export default (courses: Course[], lang: Language = 'en') => {
  console.log(courses)
  return `
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
}
