/* eslint-env mocha */

import React from 'react'
import ReactDOM from 'react-dom'

import WelcomeText from '../components/WelcomeText'
import DataSite from '../data/site.json'

it('renders without crashing', () => {
  const div = document.createElement('div')
  ReactDOM.render(<WelcomeText data={DataSite} />, div)
})
