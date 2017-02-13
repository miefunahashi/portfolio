import React, { Component } from 'react'
import styled from 'styled-components'

import ImagesComponent from './Images'
import {TextCategory, TextParagraph, TextTitle} from './Text'

const PanelWrapper = styled.section`
  min-height: 100vh;
  // padding-top: var(--spacing-extra--extra-large);
  // padding-bottom: var(--spacing-extra--extra-large);
  color: var(--grey);
  // padding: var(--spacing-medium);
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

class PanelComponent extends Component {
  render () {
    const {title, images, content, brief} = this.props.data
    return (
      <div>
        <PanelWrapper>
          <TextCategory>{brief}</TextCategory>
          <TextTitle>{title}</TextTitle>
          <TextParagraph>{content}</TextParagraph>
          <ImagesComponent src={images} />
        </PanelWrapper>
      </div>
    )
  }
}

export default PanelComponent
