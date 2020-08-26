import { getAnswersheets } from './../utils/files'
import { getCourseSlug } from '../utils/slugs'
import Readmeio from '../clients/readmeio'
import { Course } from '../../typings/course'
import { getCourseFileContents } from '../utils/files'
import step from '../templates/step'
import answersheet from '../templates/answersheet'

const referenceNextStep = (
  nextStepSlug: string,
  nextStepTitle: string,
  stepSlug: string,
  ReadMe: Readmeio
) =>
  ReadMe.updateDoc({
    slug: stepSlug,
    next: {
      description: '',
      pages: [
        {
          type: 'doc',
          name: nextStepTitle,
          slug: nextStepSlug,
        },
      ],
    },
  })

const createAnswersheet = async (
  course: string,
  stepFolder: string,
  stepTitle: string,
  ReadMe: Readmeio
) => {
  await ReadMe.upsertDoc({
    body: answersheet(course, stepFolder),
    slug: `${getCourseSlug(course, stepFolder)}-answersheet`,
    title: `Gabarito do passo '${stepTitle}'`,
    category: await ReadMe.getCategory('courses').then(({ _id }) => _id),
  })
}

export const handleSteps = (courses: Course[]) =>
  Promise.all(
    courses.map((course) =>
      course.summary.map(async (stepMeta, index) => {
        const ReadMe = new Readmeio()
        const courseSlug = getCourseSlug(course.name)
        const stepSlug = getCourseSlug(course.name, stepMeta.folder)
        const template = step(
          getCourseFileContents(course.name, 'pt.md', stepMeta.folder),
          stepSlug,
          getAnswersheets.length > 0
        )

        await ReadMe.upsertDoc({
          slug: stepSlug,
          title: stepMeta.title.pt,
          category: await ReadMe.getCategory('courses').then(({ _id }) => _id),
          body: template,
          parentDoc: await ReadMe.getDoc(courseSlug).then(({ _id }) => _id),
        })

        await createAnswersheet(
          course.name,
          stepMeta.folder,
          stepMeta.title.pt,
          ReadMe
        )

        console.log(`Step ${stepSlug} upserted`)
        if (index === course.summary.length - 1) {
          return
        }

        const nextStepSlug = getCourseSlug(
          course.name,
          course.summary[index + 1].folder
        )

        await referenceNextStep(
          nextStepSlug,
          course.summary[index + 1].title.pt,
          stepSlug,
          ReadMe
        )

        console.log(`Step ${stepSlug} next defined`)
      })
    )
  )
