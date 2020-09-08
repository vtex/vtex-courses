import { getCourseSlug } from '../utils/slugs'
import { Step } from '../../typings/course'

const getStep = (
  index: number,
  description: string,
  link: string,
  course: string
) => `
  <a class="course-link" href="${getCourseSlug(course, link)}">
    <div class="row-item">
        <h2 class="counter">${index}</h1>
        <span class="step">${description}</span>  
    </div>
  </a>`

const getSummary = (steps: Step[], course: string) => `
  <style>
    section#hub-content header h1, section#hub-content header h2 {
      color: #f71963
    }

    p {
      line-height: 1.5rem;
    }

    .container {
      width: 100%;
      display: flex;
      flex-direction: column;
    }

    .row-item {
      display: flex;
      align-items: center;
      border-top: 1px solid #e1e4e8 !important;
    }

    .last {
      border-bottom: 1px solid #e1e4e8 !important;
    }
    .counter {
      padding: 0 2rem 0 2rem;
      color: #717786;
    }

    .heading-text {
      color: #f71963;
      font-weight: bold;
      padding: 1rem 0 0.5rem 0;
    }

    .step {
      color: #717786;
      font-weight: bold;
    }

    .course-link {
      text-decoration: none !important;
    }
  </style>
  <div class="container">
    ${steps
      .map(({ description, link }, index) =>
        getStep(index + 1, description, link, course)
      )
      .join('')}
  </div>`

export default (
  steps: Step[],
  image: string,
  overview: string,
  course: string
) => `
  [block:html]
  ${JSON.stringify({
    html: `<img src="${image}" width=120/>`,
  })}
  [/block]
  ${overview}
  [block:html]
  ${JSON.stringify({
    html: getSummary(steps, course),
  })}
  [/block]
`
