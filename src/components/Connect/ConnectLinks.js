import React from 'react'
import styled from '@emotion/styled'
import Resume from '../../../static/documents/Courtney Fay - Frontend Web Dev - Resume.pdf'

const Wrapper = styled.div`
  height: 20vh;
  width: 100%;
  display: flex;
  justify-content: space-around;
  align-items: center;
  background: ${props => props.theme.colors.tertiary};
`

const ConnectWrapper = styled.div`
  text-align: center;
  color: ${props => props.theme.colors.text};
  width: 25%;
`

const Link = styled.a`
  color: ${props => props.theme.colors.text};
  transition: all 0.2s;
  &:hover {
    color: ${props => props.theme.colors.highlight};
  }
  &:visited {
    color: ${props => props.theme.colors.text};
  }
  font-weight: 600;
  font-size: 1.25em;
  display: block;
  margin: 1em;
`

const ConnectLinks = () => {
  return (
    <Wrapper>
      <ConnectWrapper>
        Email me
        <Link
          href = "mailto: fay.courtney@gmail.com"
          rel="noopener noreferrer"
        >
          fay.courtney@gmail.com
        </Link>
      </ConnectWrapper>
      <ConnectWrapper>
        Follow me on GitHub
        <Link
          href="https://github.com/courtneyfay"
          target="_blank"
          rel="noopener noreferrer"
        >
          @courtneyfay
        </Link>
      </ConnectWrapper>
      <ConnectWrapper>
        Download &#8964;
        <Link
          href={Resume}
          target="_blank"
          rel="noopener noreferrer" download>
          my resume
        </Link>
      </ConnectWrapper>
      <ConnectWrapper>
        Send me a message on LinkedIn
        <Link
          href="https://www.linkedin.com/in/faycourtney/"
          target="_blank"
          rel="noopener noreferrer"
        >
          /in/faycourtney
        </Link>
      </ConnectWrapper>
    </Wrapper>
  )
}

export default ConnectLinks
