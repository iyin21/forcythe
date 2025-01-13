import Navbar from "@components/Navbar/navbar"
import HeroSection from "./components/heroSection"
import Footer from "./components/footer"
import SuccessInMotion from "./components/successInMotion"
import CTA1 from "./components/cta1"
import FeaturesSection from "./components/featuresSection"
import BusinessScaleSection from "./components/businessScaleSection"
import CTA2 from "./components/cta2"
import Blog from "./components/blog"
import Testimonials from "./components/testimonials"

const Home = () => {
    return (
        <div className="bg-primary-100 ">
            <Navbar />
            <div className="overflow-hidden bg-[url('src/assets/images/header-background.svg')] bg-top bg-no-repeat mt-4 ">
                <HeroSection />
                <SuccessInMotion />
            </div>
            <Testimonials/>
            <CTA1 />
            <FeaturesSection />
            <BusinessScaleSection />
            <Blog />
            <CTA2 />
            <Footer />
        </div>
    )
}
export default Home
