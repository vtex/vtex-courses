export interface CourseStep {
  folder: string
  title: {
    pt: string
    en: string
    es: string
  }
  description: {
    pt: string
    en: string
    es: string
  }
}

export interface Course {
  name: string
  isActive: boolean
  metadata: CourseMetadata
  overview: {
    pt: string
    en: string
    es: string
  }
  summary: CourseStep[]
}

export interface CourseMetadata {
  title: {
    pt: string
    en: string
    es: string
  }
  description: {
    pt: string
    en: string
    es: string
  }
  image: string
}

export interface Step {
  link: string
  description: {
    pt: string
    en: string
    es: string
  }
}

export interface CourseOrder {
  course: string
  steps: string[]
  isReadme: boolean
}
export interface CourseInfo {
  folder: string
  isActive: boolean
}

export type Language = 'en' | 'pt' | 'es'
