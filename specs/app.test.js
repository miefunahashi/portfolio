/* eslint-env mocha */
/* global it, describe, browser, */
const assert = require('assert')
// const fs = require('fs')
browser.url('http://server:9000')
describe('header component title and logo', () => {
  it("Hello, I'm Mie", function () {
    // browser.url('http://server:9000')
    // var outerHTML = browser.getHTML('#headerTitle')
    // console.log(outerHTML)
    var innerHTML = browser.getHTML('#headerTitle', false)
    // console.log('innerHTML', innerHTML)
    assert.equal(innerHTML, "Hello, I'm Mie")
  })
  it('Leon logo', function () {
    // browser.url('http://server:9000')
    // var outerHTML = browser.getHTML('#headerTitle')
    // console.log(outerHTML)
    var innerHTML = browser.getHTML('#headerTitle', false)
    // console.log('innerHTML', innerHTML)
    assert.equal(innerHTML, "Hello, I'm Mie")
  })
  it('should save a screenshot of the browser view', function () {
    browser.saveScreenshot('./snapshots/snapshot.png')
  })
  it('email address', function () {
    // var outerHTML = browser.getHTML('#headerTitle')
    // console.log(outerHTML)
    var innerHTML = browser.getHTML('#contact.email', false)
    console.log('innerHTML', innerHTML)
  })
})

