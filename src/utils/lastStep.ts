export const  isLastStep = (slug: string) => {
    const lastSteps = [
        'course-basic-blocks-step06search',
        'course-styles-course-step05landing',
        'course-service-course-step08graphiql',
        'course-layout-blocks-step09conditional-layout',
        'course-content-workflow-step04site-editor',
        'course-store-block-step08react-apollo'
    ]
    return lastSteps.includes(slug)
}
