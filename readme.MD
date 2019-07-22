Request-Counting
--------------------

[A node js port for Apache Request Counting Algorithm](https://httpd.apache.org/docs/2.4/mod/mod_lbmethod_byrequests.html)


Code
=================

```
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

```