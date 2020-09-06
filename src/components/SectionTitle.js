import React from 'react'
import styled from '@emotion/styled'

const Title = styled.h2`
  font-size: 2em;
  text-transform: capitalize;
  font-weight: 600;
  text-align: center;
  margin: 4rem 0 3rem 0;
  line-height: 1.2;
  span {
    margin: 0 0 0 0.25em;
  }
  a {
    transition: all 0.2s;
    color: ${props => props.theme.colors.text};
    &:hover {
      color: ${props => props.theme.colors.highlight};
    }
  }
`

const SectionTitle = props => {
  return <Title id={props.id}>{props.children}</Title>
}

export default SectionTitle
