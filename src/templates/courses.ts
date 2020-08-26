import { Course } from '../../typings/course'
import { BASE_PATH } from '../utils/constants'

const getCourse = ({
  metadata: { description, image, title },
  name,
}: Course) => `
<div class="course-card">
  <img class="course-icon" src="${image}" width="90" />
  <h3>
    <a class="course-title" href="${BASE_PATH}/docs/course-${name}">${title}</a>
  </h3>
  <p class="course-description">
    ${description}
  </p>
</div>`

export default (courses: Course[]) => `
<div class="course-container">
  ${courses.map((course) => getCourse(course)).join()}
</div>`
