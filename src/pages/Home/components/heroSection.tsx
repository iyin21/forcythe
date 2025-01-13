import Button from "@components/Button"

import { FaPlay } from "react-icons/fa6"

const HeroSection = () => {
    
    return (
        <section className="relative  text-white pb-4  ">
            <div className="container mx-auto w-[85%] bg-white-100 bg-opacity-10  px-6 relative z-10 sm:rounded-[3rem] rounded-[2rem] bg-opacity-10 lg:p-10 md:p-8 p-5 py-8 ">
            
                <div className="ma-w-3xl">
                    <h1 className="text-[3.5rem] md:text-[4rem] lg:text-[5rem] text-white-100 font-normal leading-tight">
                        We build <span className="text-[#6074e7]">products</span> that shape a better future
                    </h1>
                    <p className="max-w-3xl  text-[#aea9b1] mt-4 mb-8 md:text-lg">
                        We’re the architects of digital excellence across
                        industries. We redefine business with cutting-edge
                        digital strategies that invoke sector-wide
                        transformation.
                    </p>
                    <div className="mt-8">
                        <Button className="flex items-center gap-1">
                            Book a call <FaPlay />
                        </Button>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default HeroSection
