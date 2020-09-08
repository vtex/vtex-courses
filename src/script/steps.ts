import { getAnswersheets, getCourseFileContents } from '../utils/files'
import { getCourseSlug } from '../utils/slugs'
import Readmeio from '../clients/readmeio'
import { Course } from '../../typings/course'
import step from '../templates/step'
import answersheet from '../templates/answersheet'

const referenceNextStepAndSetVisibility = (
  isHidden: boolean,
  stepSlug: string,
  ReadMe: Readmeio,
  next?: NextStep
) =>
  ReadMe.updateDoc({
    hidden: isHidden,
    slug: stepSlug,
    next: next
      ? {
          description: '',
          pages: [
            {
              type: 'doc',
              name: next.title,
              slug: next.slug,
            },
          ],
        }
      : undefined,
  })

const createAnswersheet = async (
  course: string,
  stepFolder: string,
  stepTitle: string,
  answersheets: string[],
  ReadMe: Readmeio
) => {
  if (answersheets.length > 0) {
    await ReadMe.upsertDoc({
      body: answersheet(course, stepFolder, answersheets),
      slug: `${getCourseSlug(course, stepFolder)}-answersheet`,
      title: `Gabarito do passo '${stepTitle}'`,
      category: await ReadMe.getCategory('courses').then(({ _id }) => _id),
    })
  }
}

export const handleSteps = (courses: Course[]) =>
  Promise.all(
    courses.map((course) =>
      course.summary.map(async (stepMeta, index) => {
        const ReadMe = new Readmeio()
        const courseSlug = getCourseSlug(course.name)
        const stepSlug = getCourseSlug(course.name, stepMeta.folder)
        const answersheets = getAnswersheets(course.name, stepMeta.folder)
        const isLast = index === course.summary.length - 1

        const template = step(
          getCourseFileContents(course.name, 'pt.md', stepMeta.folder),
          stepSlug,
          answersheets.length > 0,
          isLast
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
          answersheets,
          ReadMe
        )

        console.log(`Step ${stepSlug} was updated 🥾`)

        const next = !isLast
          ? {
              slug: getCourseSlug(
                course.name,
                course.summary[index + 1].folder
              ),
              title: course.summary[index + 1].title.pt,
            }
          : undefined

        await referenceNextStepAndSetVisibility(
          !course.isActive,
          stepSlug,
          ReadMe,
          next
        )

        console.log(`Step ${stepSlug} next and visibility were updated 👀`)
      })
    )
  )

interface NextStep {
  title: string
  slug: string
}
