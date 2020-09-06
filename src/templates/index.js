import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'
import SEO from '../components/SEO'
import Container from '../components/Container'
import SectionTitle from '../components/SectionTitle'
import CardList from '../components/CardList'
import Card from '../components/Card'
import ContactForm from '../components/ContactForm'
import MainHero from '../components/MainHero'
import SkillList from '../components/SkillList'

const HomeTemplate = ({ data, pageContext }) => {
  const posts = data.allContentfulPost.edges
  const { basePath } = pageContext

  const skills = posts.map(post => post.node.tags).flat()

  const uniqueSkills = skills.reduce((total, tag) => {
    const justIds = total.map(item => item.id)
    return justIds.includes(tag.id) ? total : total.concat(tag)
  }, [])

  return (
    <Layout>
      <SEO
        title="Home"
        description="This is the landing page for the www.courtneyfay.com website"
      />
      <Container>
        <MainHero />
        {/* This is the skills section which might need to get broken out into its own component */}
        <SectionTitle id="skills" small>
          Skills
        </SectionTitle>
        <div style={{ margin: '10% 0' }}>
          {skills && <SkillList skills={uniqueSkills} basePath={basePath} />}
        </div>
        {/* This is the posts section which might need to get broken out into its own component */}
        <SectionTitle id="blog" small>
          Blog
        </SectionTitle>
        <CardList>
          {posts.map(({ node: post }) => (
            <Card key={post.id} {...post} basePath={basePath} />
          ))}
        </CardList>
        {/* This is the contact section which might need to get broken out into its own component */}
        <SectionTitle id="contact" small>
          Contact
        </SectionTitle>
        <ContactForm />
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
