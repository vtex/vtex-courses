import DefaultClient from './default'

const routes = {
  category: (category: string): string => `categories/${category}`,
  categoryDocs: (category: string): string =>
    `${routes.category(category)}/docs`,
  customPages: () => `custompages`,
  customPage: (slug: string) => `${routes.customPages()}/${slug}`,
  docs: (): string => 'docs',
  doc: (slug: string): string => `${routes.docs()}/${slug}`,
}

export default class Readmeio extends DefaultClient {
  constructor() {
    super('https://dash.readme.io/api/v1', {
      headers: {
        'x-readme-version': 'v1.0',
        Authorization: `Basic ${process.env.README_TOKEN}`,
      },
    })
  }

  public getCategory(name: string) {
    return this.get(routes.category(name))
  }

  public getCategoryDocs(name: string) {
    return this.get(routes.categoryDocs(name))
  }

  public createCustomPage({
    slug,
    title,
    body,
    html,
    htmlmode,
    hidden = true,
  }: CustomPageInput) {
    return this.http.post(routes.customPages(), {
      slug,
      title,
      body,
      html,
      htmlmode,
      hidden,
    })
  }

  public updateCustomPage({
    slug,
    title,
    body,
    html,
    htmlmode,
    hidden = true,
  }: UpdateCustomPageInput) {
    return this.http.put(routes.customPage(slug), {
      slug,
      title,
      body,
      html,
      htmlmode,
      hidden,
    })
  }

  public async upsertCustomPage({
    slug,
    title,
    body,
    html,
    htmlmode,
    hidden = true,
  }: UpdateCustomPageInput) {
    const pageInput: UpdateCustomPageInput = {
      slug,
      title,
      body,
      html,
      htmlmode,
      hidden,
    }

    if (await this.checkExists(slug, 'custompages')) {
      return this.updateCustomPage(pageInput)
    }

    return this.createCustomPage(pageInput)
  }

  public createDoc({
    slug,
    title,
    body,
    category,
    next,
    hidden = true,
    type = 'basic',
    parentDoc,
  }: DocumentInput) {
    return this.post(routes.docs(), {
      body,
      slug,
      title,
      category,
      next,
      hidden,
      type,
      parentDoc,
    })
  }

  public deleteDoc(slug: string) {
    return this.delete(routes.doc(slug))
  }

  public getDoc(slug: string) {
    return this.get(routes.doc(slug))
  }

  public getCustomPage(slug: string) {
    return this.get(routes.customPage(slug))
  }

  public updateDoc({
    slug,
    title,
    body,
    next,
    excerpt,
    category,
    hidden = true,
    type = 'basic',
    parentDoc,
  }: DocumentInput) {
    return this.put(routes.doc(slug), {
      title,
      body,
      next,
      excerpt,
      category,
      hidden,
      type,
      parentDoc,
    })
  }

  public async upsertDoc({
    slug,
    title,
    body,
    excerpt,
    category,
    hidden = true,
    type = 'basic',
    parentDoc,
  }: DocumentInput) {
    const docInput: DocumentInput = {
      slug,
      title,
      body,
      excerpt,
      category,
      hidden,
      type,
      parentDoc,
    }

    if (await this.checkExists(slug, 'docs')) {
      return this.updateDoc(docInput)
    }

    return this.createDoc(docInput)
  }

  public async checkExists(slug: string, type: 'docs' | 'custompages') {
    try {
      return !!(await this.http.head(`${type}/${slug}`))
    } catch {
      return false
    }
  }
}

interface UpdateCustomPageInput extends CustomPageInput {
  slug: string
}

interface CustomPageInput {
  title: string
  body?: string
  html?: string
  slug?: string
  hidden?: boolean
  htmlmode: boolean
}

interface DocumentInput {
  slug: string
  title?: string
  body?: string
  category?: string
  next?: {
    description: string
    pages: Array<{
      type: string
      name: string
      slug: string
    }>
  }
  excerpt?: string
  hidden?: boolean
  type?: string
  parentDoc?: string
}
