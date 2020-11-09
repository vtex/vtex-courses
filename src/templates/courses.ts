import { Course, Language } from '../../typings/course'
import { BASE_PATH } from '../utils/constants'
import { getCourseSlug } from '../utils/slugs'
import messages from './messages'

const applyInactive = (className: string, isActive: boolean) =>
  isActive ? `active-card ${className}` : 'inactive-card'

const getActiveCard = (
  isActive: boolean,
  title: string,
  description: string,
  image: string,
  name: string
) =>
  `<a class="course-link" href="${BASE_PATH}/docs/course-${name}">
    <div class="${isActive ? 'course-card' : 'course-card inactive-border'}"}>
      <img class=${applyInactive(
        'course-icon',
        isActive
      )} src="${image}" width="90" />
      <h3 class=${applyInactive('', isActive)}>
        <p class="course-title">${title}<p>
      </h3>
      ${isActive ? '' : '<div class="label">Em Breve</div>'}
      <p class="course-description">
        ${description}
      </p>
    </div>
  </a>`

const getInactiveCard = (
  isActive: boolean,
  title: string,
  description: string,
  image: string
) =>
  `<div class="${isActive ? 'course-card' : 'course-card inactive-border'}"}>
    <img class=${applyInactive(
      'course-icon',
      isActive
    )} src="${image}" width="90" />
    <h3 class=${applyInactive('', isActive)}>
      <p class="course-title">${title}<p>
    </h3>
    ${isActive ? '' : '<div class="label">Em Breve</div>'}
    <p class="course-description">
      ${description}
    </p>
  </div>`

const getCourse = ({
  isActive,
  metadata: { description, image, title },
  name,
}: Course) => `
${
  isActive
    ? getActiveCard(isActive, description, image, title, name)
    : getInactiveCard(isActive, description, image, title)
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
