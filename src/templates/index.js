import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'
import SEO from '../components/SEO'
import Container from '../components/Container'
import Hero from '../components/Hero'
import SectionTitle from '../components/SectionTitle'
import CardList from '../components/CardList'
import Card from '../components/Card'
import ContactForm from '../components/ContactForm'
import HeroImage from '../../static/images/hero.jpg'

const HomeTemplate = ({ data, pageContext }) => {
  const posts = data.allContentfulPost.edges
  const { basePath } = pageContext

  return (
    <Layout>
      {/* <SEO
        title="Courtney Fay"
        description="This is the landing page for the CourtneyFay.com website"
      /> */}
      <Container>
        {/* This is the hero section which might need to get broken out into its own component */}
        <img src={HeroImage} />
        {/* This is the skills section which might need to get broken out into its own component */}
        <SectionTitle id="skills" small>
          Skills
        </SectionTitle>
        <div style={{ height: '400px', backgroundColor: 'hotpink' }}></div>
        {/* This is the posts section which might need to get broken out into its own component */}
        <SectionTitle id="blog" small>
          Blog
        </SectionTitle>
        <CardList>
          {posts.map(({ node: post }) => (
            <Card key={post.id} {...post} basePath={basePath} />
          ))}
        </CardList>
        {/* This is the resume section which might need to get broken out into its own component */}
        <SectionTitle id="resume" small>
          Resume
        </SectionTitle>
        <div style={{ height: '400px', backgroundColor: 'yellow' }}></div>
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
        }
      }
    }
  }
`

export default HomeTemplate
