import React from 'react'
import { AnchorLink } from 'gatsby-plugin-anchor-links'
import styled from '@emotion/styled'
import { useSiteMetadata } from '../hooks/use-site-metadata'

const Header = styled.header`
  background: ${props => props.theme.colors.primary};
  width: 100%;
  padding: 1.5em 0;
  position: fixed;
  top: 0;
  z-index: 3;
`
const Nav = styled.nav`
  width: 100%;
  max-width: ${props => props.theme.sizes.maxWidth};
  margin: 0 auto;
  padding: 0 1.5em;

  ul {
    display: flex;
    justify-content: space-between;
  }

  li {
    display: inline-block;
    margin-left: 1em;
    &:first-of-type {
      position: relative;
      margin: 0;
      flex-basis: 100%;
    }
  }

  a {
    text-decoration: none;
    color: DarkGray;
    font-weight: 600;
    transition: all 0.2s;
    border-bottom: 2px solid ${props => props.theme.colors.text};
    &:hover {
      color: white;
    }
  }
`

const Menu = () => {
  const { menuLinks } = useSiteMetadata()
  return (
    <Header>
      <Nav>
        <ul>
          {menuLinks.map(link => (
            <li key={link.name}>
              <AnchorLink to={link.slug} title={link.name} />
            </li>
          ))}
        </ul>
      </Nav>
    </Header>
  )
}

export default Menu
