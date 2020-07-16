import React, { FC } from 'react'
interface AboutProps {
  message?: string
}
const About: FC<AboutProps> = ({ message }) => {
  return <div>Hello About</div>
}
export default About
