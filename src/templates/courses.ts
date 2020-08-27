import { Course } from '../../typings/course'
import { BASE_PATH } from '../utils/constants'

const getCourse = ({
  isActive,
  metadata: { description, image, title },
  name,
}: Course) => `
<div class="${isActive ? 'course-card' : 'course-card inactive-card'}"}>
  <img class="course-icon" src="${image}" width="90" />
  <h3>
    ${
      isActive
        ? `<a class="course-title" href="${BASE_PATH}/docs/course-${name}">${title}</a>`
        : `<p class="course-title">${title}<p>`
    }
  </h3>
  <p class="course-description">
    ${description}
  </p>
</div>`

export default (courses: Course[]) => `
<style>
  #hub-container > .hub-container {
    display: flex;
    align-items: center;
    justify-content: center;
  }
</style>
<div class="course-container">
  ${courses.map((course) => getCourse(course)).join('')}
</div>`
