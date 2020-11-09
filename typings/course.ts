export interface CourseStep {
  folder: string
  title: {
    en: string
    pt: string
  }
  description: {
    en: string
    pt: string
  }
}

export interface Course {
  name: string
  isActive: boolean
  metadata: CourseMetadata
  summary: CourseStep[]
}

export interface CourseMetadata {
  title: string
  description: string
  image: string
}

export interface Step {
  link: string
  description: string
}

export interface CourseOrder {
  course: string
  steps: string[],
  isReadme: boolean
}
export interface CourseInfo {
  folder: string
  isActive: boolean
}
export interface CourseOrder {
  course: string
  steps: string[],
  isReadme: boolean
}

export type Language = 'en' | 'pt' | 'es'