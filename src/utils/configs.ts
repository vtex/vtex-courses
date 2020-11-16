import { getCourseFileContents, getCourses } from './files'
import { Course, Language } from '../../typings/course'


export default (langs: Language[]) =>
  getCourses().map(({ folder, isActive }) => {
    const metadata = getCourseFileContents(
      folder,
      {rawPath: 'metadata.json'}, 
      true
    )
    
    const overview = langs.reduce(
      (acc, lang) => ({
        ...acc,
        [lang]: getCourseFileContents(
          folder,
          {rawPath: 'overview', lang}
        )
      }), {} as Course["overview"])

    const summary = getCourseFileContents(
      folder,
      {rawPath: 'summary.json'}, 
      true
    )

    return {
      name: folder,
      isActive,
      overview,
      summary,
      metadata,
    } as Course
  })
    
