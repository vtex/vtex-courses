import {
  getAnswersheets,
  getCourseFilePath,
  getFileContent,
} from '../utils/files'
import {
  getAnswersheetSlug,
  getChallengeSlug,
  getCourseSlug,
} from '../utils/slugs'
import Readmeio from '../clients/readmeio'
import { Course, CourseStep, Language } from '../../typings/course'
import stepTemplate from '../templates/step'
import answersheetTemplate from '../templates/answersheet'
import challenge from '../templates/challenge'
import messages from '../templates/messages'
import { logProgress } from '../utils/log'

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
  slug: string,
  course: string,
  stepFolder: string,
  stepTitle: string,
  answersheets: string[],
  lang: Language,
  ReadMe: Readmeio
) => {
  if (answersheets.length > 0) {
    await ReadMe.upsertDoc({
      body: answersheetTemplate(course, stepFolder, answersheets),
      slug,
      title: `${messages.answersheetTo[lang]} '${stepTitle}'`,
      category: await ReadMe.getCategory('courses').then(({ _id }) => _id),
    })
  }
}

const createChallenge = async (
  course: string,
  courseTitle: string,
  category: string,
  parentDoc: string,
  isLast: boolean,
  stepSlug: string,
  lang: Language,
  ReadMe: Readmeio
) => {
  const challengeContent = challenge(course, stepSlug, lang)
  const challengeSlug = getChallengeSlug(course, lang)

  if (!challengeContent || !isLast) {
    return undefined
  }

  await ReadMe.upsertDoc({
    slug: challengeSlug,
    title: `${messages.challengeFor[lang]} ${courseTitle}`,
    category,
    body: challengeContent,
    parentDoc,
  })

  return challengeSlug
}

const intlStep = async (
  course: Course,
  step: CourseStep,
  stepIndex: number,
  lang: Language
) => {
  const ReadMe = new Readmeio()

  const courseSlug = getCourseSlug(course.name, '', lang)
  const stepSlug = getCourseSlug(course.name, step.folder, lang)
  const answersheetSlug = getAnswersheetSlug(course.name, step.folder, lang)

  const logFinished = logProgress('step', stepSlug, lang)

  const courseCategory = await ReadMe.getCategory('courses').then(
    ({ _id }) => _id
  )

  const parentDoc = await ReadMe.getDoc(courseSlug).then(({ _id }) => _id)

  const answersheets = getAnswersheets(course.name, step.folder)
  const isLast = stepIndex === course.summary.length - 1

  const challengeSlug = await createChallenge(
    course.name,
    course.metadata.title[lang],
    courseCategory,
    parentDoc,
    isLast,
    stepSlug,
    lang,
    ReadMe
  )

  const stepPath = getCourseFilePath({
    course: course.name,
    step: step.folder,
    lang,
  })

  const template = stepTemplate(
    getFileContent(stepPath),
    answersheets.length > 0,
    isLast,
    stepPath,
    lang,
    answersheetSlug,
    challengeSlug
  )

  await ReadMe.upsertDoc({
    slug: stepSlug,
    title: step.title[lang],
    category: courseCategory,
    body: template,
    parentDoc,
  })

  await createAnswersheet(
    answersheetSlug,
    course.name,
    step.folder,
    step.title[lang],
    answersheets,
    lang,
    ReadMe
  )

  const next = !isLast
    ? {
        slug: getCourseSlug(
          course.name,
          course.summary[stepIndex + 1].folder,
          lang
        ),
        title: course.summary[stepIndex + 1].title[lang],
      }
    : undefined

  await referenceNextStepAndSetVisibility(
    !course.isActive,
    stepSlug,
    ReadMe,
    next
  )

  logFinished()
}

export const handleSteps = (courses: Course[], inLanguages: Language[]) =>
  Promise.all(
    inLanguages.map((lang) =>
      courses.map((course) =>
        course.summary.map(async (step, index) =>
          intlStep(course, step, index, lang)
        )
      )
    )
  )

interface NextStep {
  title: string
  slug: string
}
