import React from 'react'
import styled from '@emotion/styled'

const List = styled.ul`
  display: flex;
  flex-flow: row wrap;
  margin: 0 auto;
  &::after {
    content: '';
    flex: 0 0 32%;
  }
`

const CardList = props => {
  return <List>{props.children}</List>
}

export default CardList
