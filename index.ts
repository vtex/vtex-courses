import { handleSteps } from './src/script/steps'
import { handleCourses } from './src/script/courses'
import { handleLanding } from './src/script/landing'
import configs from './src/utils/configs'
import { Language } from './typings/course'

const LANGUAGES = ['pt', 'en']
const ALL = 'all'

const areValidLangs = (inLanguages: string[]) =>
  inLanguages.every((lang) => LANGUAGES.includes(lang) || lang === ALL)

const execute = async () => {
  let inLanguages = process.argv.slice(2)
  const isGithubAction = process.env.CI?.toLowerCase() === 'true'

  if (!isGithubAction) {
    console.error(
      `❌  Please don't run deploy locally. Instead go through PR proccess on Github so we can keep source of truth.`
    )
    return
  }

  if (!areValidLangs(inLanguages)) {
    console.error(
      `❌  Language must be one of these: ${LANGUAGES.join(', ')}, ${ALL}`
    )
    return
  }

  if (inLanguages.includes(ALL)) {
    inLanguages = LANGUAGES
  }

  const courses = configs(inLanguages as Language[])

  await handleLanding(courses, inLanguages as Language[])
  await handleCourses(courses, inLanguages as Language[])
  await handleSteps(courses, inLanguages as Language[])
}

execute()
