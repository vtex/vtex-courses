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
  overview: string
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

export interface CourseInfo {
  folder: string
  isActive: boolean
}
