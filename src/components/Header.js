import React, { Component } from 'react'
// import styled from 'stylsed-components'
import FixedHeader from './FixedHeader'
// import Menu from './Menu'

class Header extends Component {
  render () {
    return (
      <div>
        <FixedHeader data={this.props.data.contact} />
        {/*<Menu /> */}
      </div>
    )
  }
}

export default Header
