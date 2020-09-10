import React from 'react'
import styled from '@emotion/styled'
import { Link } from 'gatsby'
import Img from 'gatsby-image'

const Post = styled.li`
  position: relative;
  width: 100%;
  transition: background 0.2s;
  @media screen and (min-width: ${props => props.theme.responsive.small}) {
    flex: ${props => (props.featured ? '0 0 100%' : '0 0 50%')};
  }
  &:hover {
    background: ${props => props.theme.colors.tertiary};
  }
  a {
    display: flex;
    flex-flow: column;
    height: 100%;
    width: 100%;
    color: ${props => props.theme.colors.text};
    text-decoration: none;
    .gatsby-image-wrapper {
      height: 0;
      padding-bottom: 60%;
      @media screen and (min-width: ${props => props.theme.responsive.small}) {
        padding-bottom: ${props => (props.featured ? '40%' : '60%')};
      }
    }
  }
`

const ImageWrapper = styled.div`
  position: relative;
`

const StyledImg = styled(Img)`
  border-top-left-radius: 1px;
  border-top-right-radius: 1px;
`

const TitleWrapper = styled.div`
  z-index: 2;
  position: absolute;
  width: 100%;
  text-overflow: ellipsis;
  max-width: ${props => props.theme.sizes.maxWidthCentered};
  top: 88.5%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: white;
  background-color: rgb(128, 128, 128, 0.4);
  white-space: nowrap;
  overflow: hidden;
`

const Title = styled.h2`
  font-size: 1.5em;
  font-weight: 600;
  text-transform: capitalize;
  margin: 1rem 1rem 0.5rem 1rem;
`

const Date = styled.h3`
  margin: 0 1rem 0.5rem 1rem;
  font-size: 0.9em;
  color: white;
`

const Card = ({ slug, heroImage, title, publishDate, body, ...props }) => {
  return (
    <>
      {heroImage && body && (
        <Post featured={props.featured}>
          <Link to={`${props.basePath}/${slug}/`}>
            <ImageWrapper>
              <StyledImg fluid={heroImage.fluid} backgroundColor={'#eeeeee'} />
              <TitleWrapper>
                <Title>{title}</Title>
                <Date>{publishDate}</Date>
              </TitleWrapper>
            </ImageWrapper>
          </Link>
        </Post>
      )}
    </>
  )
}

export default Card
