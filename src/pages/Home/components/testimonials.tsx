import { useState, useEffect } from "react"
import Starks from "@assets/icons/starks.svg"
import Stacai from "@assets/icons/stacai.svg"
import Iwaria from "@assets/icons/iwaria.svg"
import ExecutiveProsLogo from "@assets/icons/ExecutiveProsLogo.svg"
import Beaupreneur from "@assets/icons/Beaupreneur.svg"
import John from "@assets/images/john.svg"
import Edwin from "@assets/images/edwin.svg"
import Executiveceo from "@assets/images/executive-pro-ceo.svg"
import Christina from "@assets/images/christina.svg"
import IwariaFounder from "@assets/images/iwaria-founder.svg"
import "./testimonial.css"

interface TabData {
    name?: string
    description: string
    imageSrc: string
    logo: string
    title: string
}

const tabs: TabData[] = [
    {
        name: "Starks",
        description:
            "Partnering with Forcythe was like finding a hidden gem. Their genuine interest in our success was palpable, and the continuous support post-launch has been a testament to their commitment. They’ve become more than a service provider; they’re a trusted partner.",
        logo: Starks,
        imageSrc: John,
        title: "John, Management",
    },
    {
        name: "ExecutivePros",
        description:
            "The team understood the assignment and delivered very well. One of the things that stood them out was how they took our concepts and turned it into visually appealing designs that caught the eyes of our clients and made increased web engagements. Kudos!",
        logo: ExecutiveProsLogo,
        imageSrc: Executiveceo,
        title: "Testimony, Co-founder",
    },
    {
        name: "stac.ai",
        description:
            "Forcythe is seriously amazing when it comes to coming up with new ideas. They took our rough ideas and turned them into something incredible online. Their team’s commitment to our vision was evident every step of the way.",
        logo: Stacai,
        imageSrc: Edwin,
        title: "Edwin, Former CTO",
    },
    {
        name: "Iwaria",
        description:
            "The moment we engaged Forcythe, it was clear they were in a league of their own. Their strategic approach to our project not only enhanced our online platform but also enriched our brand’s story, captivating our audience like never before.",
        logo: Iwaria,
        imageSrc: IwariaFounder,
        title: "Iwaria, Founder",
    },
    {
        name: "Beaupreneur",
        description:
            "I’m beyond impressed with the dedication Forcythe showed. They didn’t just deliver—they educated us, involving us in the creative process. The result? A website that truly feels like ours and speaks directly to our customers’ hearts.",
        logo: Beaupreneur,
        imageSrc: Christina,
        title: "Christiana, Founder",
    },
]

const Testimonials = () => {
    const [activeTab, setActiveTab] = useState(0)

    useEffect(() => {
        const interval = setInterval(() => {
            setActiveTab((prev) => (prev + 1) % tabs.length)
        }, 10000) // Switch tabs every 10 seconds
        return () => clearInterval(interval)
    }, [])
    return (
        <section className="py-10" aria-labelledby="testimonials-heading">
            <div className="sm:w-[85%] w-[92%] mx-auto">
                <h2
                    id="testimonials-heading"
                    className="text-center text-[2rem] leading-[2.5rem] sm:text-[2.2rem] sm:leading-[2.5rem] lg:text-[2.6rem] lg:leading-[3.5rem] mb-12 max-w-4xl text-white-100 mx-auto"
                >
                    Discover the
                    <span className="text-accent">
                        {" "}
                        transformative stories{" "}
                    </span>
                    of startups that scaled new heights with us
                </h2>

                <div className="w-full overflow-x-scroll no-scrollbar">
                    <div className="w-full border-[1px] border-[#06438C] rounded-full grid grid-cols-5 min-w-[750px] ">
                        {tabs.map((tab, index) => (
                            <div
                                key={index}
                                className={`p-[1.1rem] transition-all duration-30 transition cursor-ponter ${
                                    activeTab === index ? " bg-accent3 " : ""
                                } ${
                                    activeTab === 0
                                        ? "rounded-l-full"
                                        : activeTab === 4
                                          ? "rounded-r-full "
                                          : "rounded-none"
                                }`}
                                onClick={() => setActiveTab(index)}
                                aria-selected={activeTab === index}
                            >
                                <div className="text-white-100 min-w-fit mx-auto gap-1.5 w-fit flex items-center justify-center font-medium text-[17px] p-1.5 ">
                                    <img
                                        src={tab.logo}
                                        alt={tab.name}
                                        //width={20}
                                        //height={20}
                                        className={
                                            index === 3
                                                ? "w-20"
                                                : index === 4
                                                  ? "w-36"
                                                  : "w-full"
                                        }
                                    />
                                    {index === 0 && tab.name}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                <div
                    className={`flex flex-col md:flex-row items-stretch md:space-x-8 mt-5 w-full md:w-[70%] lg:w-[50%] rounded-[1.8rem] lg:w-[50%] sm:p-7 p-3 bg-accent3 lg:relative ${activeTab === 4 ? "sm:left-[50%]" : activeTab === 1 ? "sm:left-[20%]" : activeTab === 2 ? "sm:left-[40%]" : activeTab === 1 ? "sm:left-[30%]" : "left-0"}`}
                    aria-live="polite"
                >
                    <div className=" sm:basis-[58%] pr-3">
                        <h3 className="mb-4 text-white-100 text-base font-bold mb-4 animate-word-appear ">
                            {tabs[activeTab].name
                                ?.split(" ")
                                .map((word, index) => (
                                    <span
                                        key={index}
                                        className="inline-block opacity-0 animate-word-appear"
                                        style={{
                                            animationDelay: `${index * 200}ms`,
                                            animationDuration: "500ms",
                                        }}
                                    >
                                        {word}&nbsp;
                                    </span>
                                ))}
                        </h3>
                        <p className="text-white-100 text-base leading-7 mb-3 delay-500">
                            {tabs[activeTab].description
                                .split(" ")
                                .map((word, index) => (
                                    <span
                                        key={index}
                                        className="inline-block opacity-0 animate-word-appear"
                                        style={{
                                            animationDelay: `${index * 100}ms`,
                                            animationDuration: "500ms",
                                        }}
                                    >
                                        {word}&nbsp;
                                    </span>
                                ))}
                        </p>
                        <p className="text-[15px] font-bold mb-4 text-white-100 animate-word-appear delay-500">
                            {tabs[activeTab].title
                                .split(" ")
                                .map((word, index) => (
                                    <span
                                        key={index}
                                        className="inline-block opacity-0 animate-word-appear"
                                        style={{
                                            animationDelay: `${500 + index * 100}ms`,
                                            animationDuration: "500ms",
                                        }}
                                    >
                                        {word}&nbsp;
                                    </span>
                                ))}
                        </p>
                    </div>

                    <div className="w-full h-[24rem] sm:w-auto sm:h-[100%] sm:basis-[42%] relative object-top mt-3 sm:mt-0">
                        <div className="bg-accent z-0 w-full h-full absolute top-0 left-0 bg-opacity-10 animate-pulse rounded-xl"></div>

                        <img
                            src={tabs[activeTab].imageSrc}
                            alt={`${tabs[activeTab].name} `}
                            className=" rounded-xl relative object-cover  h-full w-full "
                            style={{}}
                            height={"100%"}
                            width="100%"
                        />
                    </div>
                </div>
            </div>
        </section>
    )
}
export default Testimonials
