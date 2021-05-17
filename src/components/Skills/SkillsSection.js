import React from 'react';

const SkillsSection = ({ data }) => {
  const tags = data.allContentfulTag.edges
  console.log('tags', tags)
  const skills = tags.map(post => post.node.tags).flat()

  const uniqueSkills = skills.reduce((total, tag) => {
    if (!tag) return total;
    const justIds = total.map(item => item.id)
    return justIds.includes(tag.id) ? total : total.concat(tag)
  }, [])

  return <div>Skills Section</div>
    // return (
    //   <>
    //     <SectionTitle id="skills">Skills</SectionTitle>
    //     <div style={{ margin: '10% 0' }}>
    //         {skills && <SkillList skills={uniqueSkills} basePath={basePath} />}
    //     </div>
    //   </>
    // )
}

export const query = graphql`
  query($skip: Int!, $limit: Int!) {
    allContentfulTag(
      sort: { fields: [title], order: DESC }
      limit: $limit
      skip: $skip
    ) {
      edges {
        node {
          title
          id
          slug
        }
      }
    }
  }
`

export default SkillsSection;