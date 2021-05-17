import React from 'react'
import HeroImage from '../../static/images/hero.jpg'
import styled from '@emotion/styled'

const Wrapper = styled.section`
  position: relative;
  min-height: 300px;
  height: auto;
  @media (min-width: ${props => props.theme.responsive.small}) {
    height: ${props => props.height || 'auto'};
  }
`
const BackgroundImage = styled.img`
  position: absolute;
  width: 100%;
  height: 100%;
  &::before {
    content: '';
    background: rgba(0, 0, 0, 0.25);
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    height: 100%;
    width: 100%;
    z-index: 1;
  }
  backgroundcolor: #eeeeee;
`

const TextWrapper = styled.div`
  z-index: 2;
  position: absolute;
  width: 100%;
  max-width: ${props => props.theme.sizes.maxWidthCentered};
  top: 50%;
  left: 60%;
  transform: translate(-50%, -50%);
  text-align: right;
  color: white;
`

const Name = styled.h1`
  font-size: 3.5em;
  text-transform: capitalize;
  font-weight: 600;
  padding-top: 1rem;
`

const Text = styled.p`
  font-size: 1.25em;
  padding-top: 1rem;
`

const MainHero = props => (
  <Wrapper height="70vh" id="hero">
    <BackgroundImage src={HeroImage} alt="Courtney Fay hero" />
    <TextWrapper>
      <Text>Hey! My name is</Text>
      <Name>Courtney Fay</Name>
      <Text>Virtual Reality engineer in Denver</Text>
    </TextWrapper>
  </Wrapper>
)

export default MainHero
