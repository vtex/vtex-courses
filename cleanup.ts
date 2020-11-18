import fs from 'fs'
import readline from 'readline'

import Readmeio from './src/clients/readmeio'
import {
  getAnswersheetSlug,
  getChallengeSlug,
  getCourseSlug,
} from './src/utils/slugs'
import { Language } from './typings/course'

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
})

const courseFolders: Array<{ slug: string; steps: string[] }> = JSON.parse(
  fs.readFileSync('courses/index.json').toString()
).map(({ folder: course }: { folder: string }) => ({
  slug: course,
  steps: fs.readdirSync(`courses/${course}/steps`),
}))

const languages: Language[] = ['pt', 'en', 'es']

const possibleSlugs = languages
  .map((lang) =>
    courseFolders.map((course) => [
      getCourseSlug(course.slug, '', lang),
      getChallengeSlug(course.slug, lang),
      ...course.steps.map((step) => [
        getCourseSlug(course.slug, step, lang),
        getAnswersheetSlug(course.slug, step, lang),
      ]),
    ])
  )
  .flat(3)

const getInvalidDocs = async () => {
  const courseDocs: Array<{
    slug: string
    children: Array<{ slug: string }>
  }> = await new Readmeio().getCategoryDocs('courses')

  const allSlugs = courseDocs.reduce(
    (acc, doc) =>
      acc.concat([
        doc.slug,
        ...doc.children.reduce(
          (childrenAcc, childDoc) => childrenAcc.concat([childDoc.slug]),
          [] as string[]
        ),
      ]),
    [] as string[]
  )

  return allSlugs.filter((slug) => !possibleSlugs.includes(slug))
}

const main = async () => {
  const invalidDocs = await getInvalidDocs()

  if (invalidDocs.length === 0) {
    console.log('✨ No invalid docs were found!\n')
    rl.close()
    return
  }

  console.log('Following documents are not valid slugs:\n')
  console.log(invalidDocs.join('\n'))

  rl.question('\nShould I delete them? [y/N]', (answer) => {
    const shouldDelete = answer.toLowerCase() === 'y'

    if (!shouldDelete) {
      rl.close()
      return
    }

    Promise.all(
      invalidDocs.map((invalidDoc) => new Readmeio().deleteDoc(invalidDoc))
    ).then((_) => {
      console.log('🗑  Clean up executed successfully')
      rl.close()
    })
  })
}

main()
