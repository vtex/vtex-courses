import { getCourseFilePath, getCourses, getFileContent } from './files'
import { Course, Language } from '../../typings/course'

const getConfigContent = (
  course: string,
  path: string,
  { toJSON = false, lang }: Opts
) =>
  getFileContent(
    getCourseFilePath({
      course,
      rawPath: path,
      lang,
    }),
    toJSON
  )

export default (langs: Language[]) =>
  getCourses().map(({ folder, isActive }) => {
    const metadata = getConfigContent(folder, 'metadata.json', { toJSON: true })

    const overview = langs.reduce(
      (acc, lang) => ({
        ...acc,
        [lang]: getConfigContent(folder, 'overview', { lang }),
      }),
      {} as Course['overview']
    )

    const summary = getConfigContent(folder, 'summary.json', { toJSON: true })

    return {
      name: folder,
      isActive,
      overview,
      summary,
      metadata,
    } as Course
  })

interface Opts {
  toJSON?: boolean
  lang?: Language
}
