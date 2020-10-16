import Readmeio from '../clients/readmeio'
import { Course } from '../../typings/course'
import landing from '../templates/landing'

export const handleLanding = async (courses: Course[]) => {
  const ReadMe = new Readmeio()

  const template = landing(courses)

  await ReadMe.upsertCustomPage({
    slug: 'learning-path',
    title: 'Learning Path',
    html: template,
    htmlmode: true,
  })

  console.log('Landing page updated 🚀')
}
