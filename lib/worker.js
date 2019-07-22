export default class Worker {

    constructor(id, factor){

        if(factor <= 0){
            throw new Error('Facotr must be greater than zero')
        }
        if(factor % 1 !== 0){
            throw new Error('Factor must be an integer but got', factor)
        }

        this.id = id
        this.factor = factor
        this.status = 0
    }
}