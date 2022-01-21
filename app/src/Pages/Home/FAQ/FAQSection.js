import React from 'react'
import { Accordion } from 'react-bootstrap';
import Title from '../../../UtilityTools/Title/Title'
import './FAQSection.css'

const FAQSection = () => {
  return (
    <>
    <Title title = "FAQs" />

    <Accordion defaultActiveKey="0" style={{paddingBottom: "5rem"}}>
      <Accordion.Item eventKey="0">
        <Accordion.Header>How is Otus able to generate the content?</Accordion.Header>
        <Accordion.Body>
          We have our Deep learning algorithms, which are trained on million of official emails and Linkedin posts. These algorithms, make sure that result is always great.
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="1">
        <Accordion.Header>When will Otus be available for everyone to join ?</Accordion.Header>
        <Accordion.Body>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
          tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
          veniam.
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="2">
        <Accordion.Header>When will Otus be available for everyone to join ?</Accordion.Header>
        <Accordion.Body>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
          tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
          veniam.
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
    </>
  )
}

export default FAQSection
