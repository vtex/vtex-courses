import { CourseOrder } from '../../typings/course'
import DefaultClient from './default'

export default class ReadMeService extends DefaultClient {
    constructor() {
        super('https://juzao--vtex.myvtex.com/_v/readme/')
    }

    public postStepsOrder(course: CourseOrder) {
        return this.post('/order', course)
    }

    public getStepsOrder(courseName: string) {
        return this.get(`/order/${courseName}`)
    }
}

