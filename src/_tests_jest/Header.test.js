/* eslint-env mocha */

import React from 'react'
import ReactDOM from 'react-dom'

import Header from '../components/Header'
import DataSite from '../data/site.json'

it('renders without crashing', () => {
  const div = document.createElement('div')
  ReactDOM.render(<Header data={DataSite} />, div)
})
