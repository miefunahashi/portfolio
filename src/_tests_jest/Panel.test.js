/* eslint-env mocha */

import React from 'react'
import ReactDOM from 'react-dom'

import Panel from '../components/Panel'
import DataPanel from '../data/panels.json'

it('renders without crashing', () => {
  const div = document.createElement('div')
  ReactDOM.render(<Panel data={DataPanel.Leon} />, div)
})
