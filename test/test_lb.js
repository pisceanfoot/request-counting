import LoadBalance from '../index'

const lb = new LoadBalance()
lb.add('a', 70)
lb.add('b', 30)


let counting = {}
let i = 0
while (i < 10) {
    i++

    let item = lb.pick()
    console.log(item.id, item.status)
    if(counting[item.id] == undefined){
        counting[item.id] = 1
    }else{
        counting[item.id]++
    }
}

console.log(counting)
