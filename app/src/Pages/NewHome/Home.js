import HomeSection from './HomeSection/HomeSection'
import IntroSection from './IntroSection/IntroSection'
// import HowOtus from './HowOtus/HowOtus'
import HowOtusWorks from './HowOtusWorks/HowOtusWorks'
import Testimonials from './Testimonials/Testimonial'
import Faqs from './FAQS/FAQS'
import Footer from './Footer/Footer'
import Pricing from './Pricing/Pricing'
import WhyOtusSection from './WhyOtus/WhyOtus'

const Home = ({setPricing}) => {
    return (
        <>
            <HomeSection />
            <IntroSection />
            <WhyOtusSection/>
            {/* <HowOtus /> */}
            <HowOtusWorks />
            <Pricing setPricing = {setPricing}/>
            <Testimonials/>
            <Faqs />
            <Footer />
        </>
    )
}

export default Home