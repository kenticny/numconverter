const converter = require('../index')
const assert = require('assert')

describe('Convert unit test', () => {
  it('1 (10 -> 16) = 1', () => testconvert(1, 10, 16, 1))
  it('10 (10 -> 32) = a', () => testconvert(10, 10, 32, 'a'))
  it('128 (10 -> 16) = 80', () => testconvert(128, 10, 16, 80))
  it('1482 (10 -> 50) = tw', () => testconvert(1482, 10, 50, 'tw'))
  it('62 (10 -> 62) = 10', () => testconvert(62, 10, 62, 10))
  it('287382 (10 -> 62) = 1cLc', () => testconvert(287382, 10, 62, '1cLc'))
  it('28739847 (10 -> 58) = 2vhkz', () => testconvert(28739847, 10, 58, '2vhkz'))

  it('55 (16 -> 10) = 85', () => testconvert(55, 16, 10, 85))
})

function testconvert(num, from, to, expect) {
  let res = converter(num, from, to)
  if (res !== String(expect)) {
    throw new Error('Expect ' + expect + ', get ' + res)
  }
}