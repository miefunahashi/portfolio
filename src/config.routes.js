import React from 'react'
import Panel from './components/Panel'
import Data from './data/panelsdata/panelsdata'

export const DummiePanel = ({ match }) => (
  <div>
    <h5>dummie</h5>
    <h3>ID: {match.url}</h3>
  </div>
)

export const routes = [
  {
    path: '/contact',
    component: DummiePanel
  },
  {
    path: `/leon`,
    component: () => <Panel data={Data.leon} />
  },
  {
    path: `/Legs`,
    component: () => <Panel data={Data.legs} />
  },
  {
    path: `/language`,
    component: () => <Panel data={Data.language} />
  },
  {
    path: `/cocoro`,
    component: () => <Panel data={Data.cocoro} />
  },
  {
    path: `/cobitox`,
    component: () => <Panel data={Data.cobitox} />
  }, {
    path: `/japaneseapp`,
    component: () => <Panel data={Data.japaneseapp} />
  }, {
    path: `/marksoftware`,
    component: () => <Panel data={Data.marksoftware} />
  }

]
