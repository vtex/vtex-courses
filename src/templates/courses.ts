import { Course } from '../../typings/course'

const getCourse = ({
  metadata: { description, image, title },
  name,
}: Course) => `
<div class="course-card">
  <img class="course-icon" src="${image}" width="90" />
  <h3>
    <a class="course-title" href="https://developers.vtex.com/docs/course-${name}">${title}</a>
  </h3>
  <p class="course-description">
    ${description}
  </p>
</div>`

export default (courses: Course[]) => `
<div class="course-container">
  ${courses.map((course) => getCourse(course))}
</div>`

interface Course {
  link: string
  title: string
  img: string
  description: string
}
