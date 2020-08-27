import { CourseOrder } from '../../typings/course'
import DefaultClient from './default'
import fetch from 'node-fetch'

export default class ReadMeService extends DefaultClient {
    constructor() {
    super('https://juzao--vtex.myvtex.com/_v/readme/*', {})
    }

    public static async postStepsOrder(course: CourseOrder) {
        await fetch('https://juzao--vtex.myvtex.com/_v/readme/saveOrder', {
            method: 'POST',
            body: JSON.stringify(course)
        }).then(() => console.log('posted'))

        return
    }

    public static async getStepsOrder(courseName: string) {
        await fetch('https://juzao--vtex.myvtex.com/_v/readme/getOrder', {
            method: 'POST',
            body: JSON.stringify({course: courseName})
        }).then(async stepsOrder => console.log(await stepsOrder.json()))
        return
    }
}

