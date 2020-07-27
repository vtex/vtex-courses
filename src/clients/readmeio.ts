import DefaultClient from './default'

const CREDENTIALS = {
  username: 'dQTjhQjHnl3eLTl6ZTMxbKFiF21kRjK1',
  password: '',
}

const ENCODED_CREDENTIALS = Buffer.from(
  `${CREDENTIALS.username}:${CREDENTIALS.password}`
).toString('base64')

const routes = {
  getCategory: (category: string): string => `categories/${category}`,
  createDoc: (): string => 'docs/',
  updateDoc: (slug: string): string => `docs/${slug}`,
  getDoc: (slug: string): string => `docs/${slug}`,
}

export default class Readmeio extends DefaultClient {
  constructor() {
    super('https://dash.readme.io/api/v1', {
      headers: {
        'x-readme-version': 'v2.1',
        Authorization: `Basic ${ENCODED_CREDENTIALS}`,
      },
    })
  }

  private async getAppsCategory() {
    return this.get(routes.getCategory('apps'))
  }

  public async createDoc(
    slug: string,
    title: string,
    markdown: string,
    appId: string,
    parentDoc?: string
  ) {
    const categoryId = (await this.getAppsCategory())._id

    const body: any = {
      hidden: true,
      title,
      slug,
      type: 'basic',
      excerpt: appId,
      body: markdown,
      category: categoryId,
    }
    if (parentDoc) {
      body.parentDoc = parentDoc
    }
    return this.post(routes.createDoc(), body)
  }

  public async updateDoc(
    slug: string,
    title: string,
    markdown: string,
    appId: string
  ) {
    const body: any = {
      title,
      body: markdown,
      excerpt: appId,
    }

    return this.put(routes.updateDoc(slug), body)
  }

  public async getDoc(slug: string) {
    return this.get(routes.getDoc(slug))
  }

  public async checkDocExists(slug: string) {
    try {
      await this.getDoc(slug)
      return true
    } catch (e) {
      if (e?.response?.status === 404) {
        return false
      }
      throw new Error(`Error while calling the getDoc with slug=${slug}`)
    }
  }
}
