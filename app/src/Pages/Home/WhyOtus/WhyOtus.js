import React from 'react'
// import { Accordion } from 'react-bootstrap';
import Title from '../../../UtilityTools/Title/Title'
import HeroCard from '../../../UtilityTools/HeroCard/HeroCard'
import './WhyOtus.css'

const WhyOtus = () => {
  return (
    <>
    <Title title = "How Otus Can Help You !" />
    <HeroCard sno = {1} header = "Posts" body = "Create Linkedin posts which are flawless and optimal for social media" imgSrc="/assets/robert.svg"/>
    <HeroCard sno = {2} header = "Responsive" body = "Unique and attractive response to the other person’s social media posts." imgSrc="/assets/robert.svg"/>
    <HeroCard sno = {3} header = "Recommendations" body = "Writing recommendations on LinkedIn." imgSrc="/assets/robert.svg"/>
    <HeroCard sno = {4} header = "Email" body = "Write professional emails that impress." imgSrc="/assets/email.svg"/>
    </>
  )
}
export default WhyOtus
