import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/Layout/Layout'
import SEO from '../components/Layout/SEO'
import Container from '../components/Layout/Container'
import SectionTitle from '../components/Layout/SectionTitle'
import CardList from '../components/Blog/CardList'
import Card from '../components/Blog/Card'
import MainHero from '../components/MainHero'
import SkillsSection from '../components/Skills/SkillsSection'
import ConnectLinks from '../components/Connect/ConnectLinks'

const HomeTemplate = ({ data, pageContext }) => {
  const posts = data.allContentfulPost.edges
  const { basePath } = pageContext

  return (
    <Layout>
      <SEO
        title="Home"
        description="This is the landing page for the www.courtneyfay.com website"
      />
      <Container>
        <MainHero />
        <SkillsSection />

        {/* This is the posts section which might need to get broken out into its own component */}
        <SectionTitle id="blog">Blog</SectionTitle>
        <CardList>
          {posts.map(({ node: post }) => (
            <Card key={post.id} {...post} basePath={basePath} />
          ))}
        </CardList>

        <SectionTitle id="connect">Connect</SectionTitle>
        <ConnectLinks />
      </Container>
    </Layout>
  )
}

export const query = graphql`
  query($skip: Int!, $limit: Int!) {
    allContentfulPost(
      sort: { fields: [publishDate], order: DESC }
      limit: $limit
      skip: $skip
    ) {
      edges {
        node {
          title
          id
          slug
          publishDate(formatString: "MMMM DD, YYYY")
          heroImage {
            title
            fluid(maxWidth: 1800) {
              ...GatsbyContentfulFluid_withWebp_noBase64
            }
            ogimg: resize(width: 1800) {
              src
            }
          }
          body {
            childMarkdownRemark {
              html
              excerpt(pruneLength: 80)
            }
          }
          tags {
            title
            id
            slug
          }
        }
      }
    }
  }
`

export default HomeTemplate
