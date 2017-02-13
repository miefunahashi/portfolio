import React, { Component } from 'react'
import styled from 'styled-components'

const ImageWrapper = styled.div`
  max-width: 350px;
    @media (max-width: 640px) {
      max-width: 350px;
    }
`
const SingleImg = styled.img`
  width: 100%; 
  height: auto;
 `
const AllImages = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  padding: var(--spacing-medium);
`

class Image extends Component {
  render () {
    let {src, ...props} = this.props

    const imgUrl = process.env.PUBLIC_URL + '/images/' + src
    return (
      <ImageWrapper>
        <SingleImg src={imgUrl} alt={src} {...props} />
      </ImageWrapper>
    )
  }
}

class Images extends Component {
  render () {
    let { src } = this.props
    return (
      <AllImages>
        {src.map(x =>
          <Image key={x} src={x}
            mode={'fit'} />)}
      </AllImages>
    )
  }
}

export default Images
