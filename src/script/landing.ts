import Readmeio from '../clients/readmeio'
import coursesTemplate from '../templates/courses'
import { Course } from '../../typings/course'

export const handleLanding = async (courses: Course[]) => {
  const ReadMe = new Readmeio()

  const template = coursesTemplate(courses)

  console.log('Upserting landing page...')

  await ReadMe.upsertCustomPage({
    slug: 'training-week-learning-path',
    title: 'Training Week Learning Path',
    html: template,
    htmlmode: true,
  })

  console.log('...upserted landing page')
}
