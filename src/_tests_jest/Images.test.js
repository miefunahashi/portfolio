/* eslint-env mocha */

import React from 'react'
import ReactDOM from 'react-dom'

import ImagesComponent from '../components/Images'
import data from '../data/panels.json'

const images = data.Leon.images

it('renders without crashing', () => {
  const div = document.createElement('div')
  ReactDOM.render(<ImagesComponent src={images} />, div)
})
