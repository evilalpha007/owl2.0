import React from 'react'
import FAQSection from './FAQ/FAQSection'
import HeroSection from './HeroSection/HeroSection'
import Quote from './Quote/Quote'
import WhyOtus from './WhyOtus/WhyOtus'
import HowOtusSection from './HowOtus/HowOtusSection'

const Home = () => {
  return (
    <>
      <div style={{ maxWidth: "1200px", margin: "auto", display: "flex", flexDirection: "column", minHeight: "100vh", alignItems: "center", justifyContent: "center" }}>
        <HeroSection />
      </div>
      <Quote title="The man who comes back through the door in the wall will never be quite the same as the man who went out." />

      <div style={{ maxWidth: "1000px", margin: "auto" }}>
        <WhyOtus />
      </div>
      <Quote title="The man who comes back through the door in the wall will never be quite the same as the man who went out." />
      <HowOtusSection/>
      <div style={{ maxWidth: "1000px", margin: "auto" }}>
        <FAQSection />
      </div>
    </>
  )
}

export default Home
