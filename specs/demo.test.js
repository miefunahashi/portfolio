/* eslint-env mocha */
/* global it, describe, browser, */
const assert = require('assert')

describe('title = Mie - Graphic Designer - London', () => {
  it('should have the right doc title', () => {
    browser.url('http://server:9000')
    var title = browser.getTitle()
    assert.equal(title, 'Mie - Graphic Designer - London')
  })
})
