import React, { Component } from 'react'
// import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { welcome } from '../data/site.json'
import Data from '../data/panelsdata/panelsdata'
import Panel from './Panel'
import LeonLogoImg from '../images/leon-logo.svg'
import { TextParagraph, TextTitle2, MieMainTitle } from './Text'

const Wrapper = styled.section`
  color: var(--grey);
  line-height: var(--line-height);
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
    @media (max-width: 400px) {
      padding: var(--spacing-small);
    }
`
const Top = styled.div`
  padding-top: var(--spacing-extra-extra-large);
  padding-bottom: var(--spacing-extra-extra-large);
`
const LeonLogo = styled.img`
  width: 250px;
  height: auto;
  `
const PinkBar = styled.section`
  width: 95%;
  background-color: var(--light-pink);
  margin-top: var(--spacing-large);
  margin-bottom: var(--spacing-large);
  padding: var(--spacing-small);
  font-family: var(--avenir);
  font-size: var(--size-1);
  font-weight: bold;
  color: var(--white);
  align-items: center;
  display: flex;
  justify-content: center;
`
class Home extends Component {
  render () {
    return (
      <Wrapper>
        <Top>
          <MieMainTitle>{welcome.title}</MieMainTitle>
          <TextParagraph>{welcome.content}</TextParagraph>
          <TextTitle2>{welcome.tagline}</TextTitle2>
        </Top>
        <LeonLogo src={LeonLogoImg} alt='Leon' />
        <PinkBar>Mie</PinkBar>
        <Panel data={Data.language} />
        <PinkBar>Mie</PinkBar>
        <Panel data={Data.leon} />
        <PinkBar>Mie</PinkBar>
        <Panel data={Data.legs} />
        <PinkBar>Mie</PinkBar>
        <Panel data={Data.cocoro} />
        <PinkBar>Mie</PinkBar>
        <Panel data={Data.cobitox} />
        <PinkBar>Mie</PinkBar>
        <Panel data={Data.japaneseapp} />
        <PinkBar>Mie</PinkBar>
        <Panel data={Data.marksoftware} />
      </Wrapper>
    )
  }
}

export default Home
