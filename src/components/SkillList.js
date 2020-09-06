import React from 'react'
import styled from '@emotion/styled'
import { Link } from 'gatsby'

const List = styled.ul`
  width: 100%;
  display: flex;
  flex-direction: column;
  @media screen and (min-width: ${props => props.theme.responsive.medium}) {
    flex-flow: row wrap;
    justify-content: space-around;
  }
`

const Skill = styled.li`
  a {
    display: block;
    transition: 0.2s;
    background: ${props => props.theme.colors.tertiary};
    padding: 2em;
    border-radius: 2px;
    text-transform: capitalize;
    text-decoration: none;
    font-size: 1.25em;
    color: ${props => props.theme.colors.text};
    &:hover {
      background: ${props => props.theme.colors.secondary};
    }
  }
`

const SkillList = props => {
  return (
    <List>
      {props.skills.map(skill => (
        <Skill key={skill.id}>
          <Link to={`${props.basePath}/tag/${skill.slug}/`}>{skill.title}</Link>
        </Skill>
      ))}
    </List>
  )
}

export default SkillList
