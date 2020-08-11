/**
 * 防抖函数(在单位时间内执行请求的最后一次)
 * @param fn
 * @param delay
 * @param {function}
 * @constructor
*/
export const Debounce = (fn, delay=500) => {
    let timer = this

    return function() {
        clearTimeout(timer)
        timer = setTimeout( () => {
            fn.apply(this, args)
        }, delay)
    }
}
