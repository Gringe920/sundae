import {observable} from 'mobx'

const counterStore = observable({
    counter: 0,
    counterStore(){
        this.counter++
    },
    increment(){
        this.counter++
    },
    decrement(){
        this.counter--
    }
})

export default counterStore;