import React, { Component } from 'react'
import styled from 'styled-components'
import { Link as A } from 'react-router-dom'

const Wrapper = styled.menu`
  list-style-type: none;
  display:flex;
  justify-content: space-around;
  flex-wrap: wrap;
`
const LinkItems = styled.li`
  padding: var(--spacing-medium);
`
const Link = styled(A)`
  transition: color; .15s ease-in;
  font-family: var(--athelas);
  color: var(--gray);
  text-decoration: none;
  &:link, &:visited {
    transition: color .15s ease-in;
  }
  &:hover {
    color: var(--dark-pink);
    transition: color .15s ease-in;
  }
  &:active {
    transition: color .15s ease-in;
  }
  &:focus {
    transition: color .15s ease-in;
    outline: 1px dotted currentColor;
  }
`

class Menu extends Component {
  render () {
    return (
      <Wrapper>
        <LinkItems><Link to='/cobitox'>Cobitox</Link></LinkItems>
        <LinkItems><Link to='/cocoro'>Cocoro</Link></LinkItems>
        <LinkItems><Link to='/japaneseapp'>Japanese App</Link></LinkItems>
        <LinkItems><Link to='/language'>Language</Link></LinkItems>
        <LinkItems><Link to='/legs'>Legs</Link></LinkItems>
        <LinkItems><Link to='/leon'>Leon</Link></LinkItems>
        <LinkItems><Link to='/marksoftware'>Mark Software</Link></LinkItems>
      </Wrapper>
    )
  }
}

export default Menu
