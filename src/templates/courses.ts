const getCourse = ({ img, link, description, title }: Course) => `
<div class="course-card">
  <img class="course-icon" src="${img}" width="90" />
  <h3>
    <a class="course-title" href="${link}">${title}</a>
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
