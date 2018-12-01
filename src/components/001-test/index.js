import {add} from './add'

export  const total = (post, cost) => {
    return(`${add(post, cost)}zł`)
}