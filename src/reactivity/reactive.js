export function reactive(target) {
  if (typeof target !== 'object') {
    console.warn(`reactive ${target} 必须是一个对象`)
  }
  // 通过ES6的Proxy特性实现属性拦截
  return new Proxy(target, mutableHandlers)
}