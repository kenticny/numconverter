const base = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ'

function convert(num, from, to) {
  if (to > base.length) {
    throw new Error('over maximum radix')
  }
  if (typeof num !== 'string') {
    num = String(num)
  }
  num = parseInt(num, from)
  if (isNaN(num)) {
    throw new Error("number system parse error")
  }
  let divided = divide(num, to)
  let str = ''
  for (let bit of divided) {
    str = replace(bit) + str
  }
  return str
}

function divide(num, radix, result) {
  result = result || []
  let remainder = num % radix
  let quotient = Math.floor(num / radix)
  result.push(remainder)
  if (quotient) {
    return divide(quotient, radix, result)
  } else {
    return result
  }
}

function replace(index) {
  return base[index]
}

module.exports = convert