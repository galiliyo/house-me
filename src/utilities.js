export function debounce(func, wait, immediate) {
  var timeout

  return function executedFunction() {
    var context = this
    var args = arguments
    console.log(func, context, args)

    var later = function() {
      timeout = null
      if (!immediate) {
        console.log('bdb', func)
        func.apply(context, args)
      }
    }

    var callNow = immediate && !timeout

    clearTimeout(timeout)

    timeout = setTimeout(later, wait)

    if (callNow) func.apply(context, args)
  }
}
