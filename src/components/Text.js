import React from 'react'
import styled from 'styled-components'
import { FontTitle, FontParagraph, fs5, fs3, fs4, fs2, lineheight } from './varibales'

const MainTitle = styled.h1`
  ${FontTitle}
  ${fs5}
  font-weight: 800;
  line-height: normal;
    @media (max-width: 450px) {
      ${fs4}
    }
`
export const MieMainTitle = (props) => <MainTitle>{props.children}</MainTitle>

const H1 = styled.h1`
  ${FontTitle}
  ${fs4}
  font-weight: 800;
  line-height: normal;
    @media (max-width: 450px) {
      ${fs3}
    }
`
export const TextTitle = (props) => <H1>{props.children}</H1>

const TextTitleH1 = styled.h1`
  ${FontTitle}
  ${fs3}
  font-weight: 800;
  line-height: normal;
`
export const TextTitle2 = (props) => <TextTitleH1>{props.children}</TextTitleH1>

const H2 = styled.h2`
  ${FontParagraph}
  ${fs2}
  ${lineheight}
  max-width: 34rem;
      @media (max-width: 400px) {
      padding: var(--spacing-small);
    }
`
export const TextCategory = (props) => <H2>{props.children}</H2>

const P = styled.p`
  ${FontParagraph}
  ${fs2}
  ${lineheight}
  padding: var(--spacing-medium);
  max-width: 34rem;
      @media (max-width: 400px) {
      // padding: var(--spacing-small);
    }
`
export const TextParagraph = (props) => <P>{props.children}</P>
