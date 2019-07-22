// https://httpd.apache.org/docs/2.4/mod/mod_lbmethod_byrequests.html
import Worker from './worker'

export default class LoadBalancer{

    constructor(workers){
        this.workers = workers || []
    }

    add(id, factor){
        this.workers.push(new Worker(id, factor))
    }

    remove(id){
        const workers = this.workers
        const index = workers.findIndex( x => x.id == id)
        if(index != -1){
            workers.splice(index, 1)
        }
    }

    pick(){
        const workers = this.workers
        if(!workers.length){
            return null
        }

        let total = 0
        if(!this.candidate){
            this.candidate = workers[0]
        }
        let candidate = this.candidate

        workers.forEach( worker => {
            worker.status += worker.factor
            total += worker.factor

            if(worker.status > candidate.status){
                candidate = worker
            }
        })

        candidate.status -= total
        this.candidate = candidate

        return candidate
    }
}
