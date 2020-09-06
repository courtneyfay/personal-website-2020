import React from 'react'
import styled from '@emotion/styled'

const Wrapper = styled.footer`
  display: flex;
  margin: 0 auto;
  max-width: ${props => props.theme.sizes.maxWidth};
`

const List = styled.ul`
  display: flex;
  flex-flow: row wrap;
  justify-content: space-between;
  align-items: flex-start;
  width: 100%;
  border-top: 1px solid ${props => props.theme.colors.secondary};
  padding: 1em 0 2em;
  margin: 0 1.5em;
`

const Item = styled.li`
  padding: 0.25em 0;
  width: 100%;
  @media screen and (min-width: ${props => props.theme.responsive.small}) {
    width: auto;
  }
  a {
    font-weight: 600;
    transition: all 0.2s;
    color: ${props => props.theme.colors.text};
    &:hover {
      color: ${props => props.theme.colors.highlight};
    }
    &:visited {
      color: ${props => props.theme.colors.text};
    }
    padding: 0 0.25em;
  }
  img {
    width: 100px;
    display: inline;
  }
`

const Footer = () => (
  <Wrapper>
    <List>
      <Item>
        <a
          href="https://www.gatsbyjs.com/"
          rel="nofollow noopener noreferrer"
          target="_blank"
        >
          <img src="https://www.gatsbyjs.com/Gatsby-Logo.svg" alt="Gatsby" />
        </a>
        <a
          href="https://www.contentful.com/"
          rel="nofollow noopener noreferrer"
          target="_blank"
        >
          <img
            src="https://images.ctfassets.net/fo9twyrwpveg/44baP9Gtm8qE2Umm8CQwQk/c43325463d1cb5db2ef97fca0788ea55/PoweredByContentful_LightBackground.svg"
            alt="Powered by Contentful"
          />
        </a>
      </Item>
      <Item>
        <a
          href="https://github.com/courtneyfay/personal-website-2020"
          target="_blank"
          rel="noopener noreferrer"
        >
          Source code
        </a>
        by
        <a
          href="https://github.com/courtneyfay"
          target="_blank"
          rel="noopener noreferrer"
        >
          @courtneyfay
        </a>
      </Item>
    </List>
  </Wrapper>
)

export default Footer
