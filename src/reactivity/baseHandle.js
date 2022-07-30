import { isObject } from '../shared'

const get = createGetter()
const set =  createSetter()
const shallowReactiveGet = createGetter()

function createGetter(shallow = false) {
  return function get(target, key, receiver) {
    const res = Reflect.get(target, key, receiver)
    // 调用track收集依赖
    track(target, 'get', key)
    if (isObject(res)) {
      // 如果值为对象，则需要嵌套调用reactive
      // 如果是浅层代理，就不需要嵌套
      return shallow ? res : reactive(res)
    }
    return res
  }
}

function createSetter() {
  return function set(target, key, value, receiver) {
    const res = Reflect.set(target, key, value, receiver)
    // 调用trigger，触发依赖
    trigger(target, 'set', key)
    return res
  }
}


export const mutableHandlers = {
  get,
  set
}