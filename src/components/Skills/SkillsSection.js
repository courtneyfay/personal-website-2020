import React from 'react';
import SectionTitle from '../Layout/SectionTitle'
import SkillList from './SkillList'

const SkillsSection = ({ posts, basePath }) => {
  const skills = posts.map(post => post.node.tags).flat()

  const uniqueSkills = skills.reduce((total, tag) => {
    if (!tag) return total;
    const justIds = total.map(item => item.id)
    return justIds.includes(tag.id) ? total : total.concat(tag)
  }, []);

  return (
    <>
      <SectionTitle id="skills">Skills</SectionTitle>
      <div style={{ margin: '10% 0' }}>
          {skills && <SkillList skills={uniqueSkills} basePath={basePath} />}
      </div>
    </>
  )
}

export default SkillsSection;