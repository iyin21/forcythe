import LayerIcon from "@assets/icons/layers-three.svg"
import "./featureSection.css"

const FeaturesSection = () => {
    const features = [
        {
            title: "Experience",
            description:
                "Decades of collective wisdom. Leverage our extensive experience to avoid common pitfalls and accelerate your business growth.",
            icon: "📚", // Replace with an actual icon/image as required
        },
        {
            title: "Quick Support",
            description:
                "We are your reliable partner, always there when you need us, ensuring smooth operations at every stage of your growth.",
            icon: "⚡", // Replace with an actual icon/image as required
        },
        {
            title: "Cost Savings",
            description:
                "Maximizing impact, minimizing costs efficiency is key. We provide cost-effective solutions without compromising on quality.",
            icon: "💰", // Replace with an actual icon/image as required
        },
    ]

    return (
        <section
            className=" py-14 text-white-100 "
            style={{
                background:
                    "linear-gradient(0deg, rgb(12, 38, 69) 20%, rgb(3, 5, 22) 70%)",
            }}
        >
            <div className="w-[85%] mx-auto">
                <h2 className="text-center text-accent2 text-[2rem] sm:text-[2.2rem] leading-[2.5rem] lg:text-[2.6rem] lg:leading-[3rem]  mb-10">
                    Your best call for B2B/B2C product innovation
                </h2>

                {/* Features Grid */}
                <div className="grid gap-7 md:gap-8 grid-cols-1 md:grid-cols-3">
                    {features.map((feature, index) => (
                       
                        <div
                            key={index}
                            className="relative flex border-0 transition duration-500 items-center flex-col flex-nowrap gap-10 min-h-content justify-center overflow-visible p-px decoration-clone w-fit rounded-2xl text-left"
                        >
                            <div className="w-auto text-white-100 z-10 bg-transparent rounded-[inherit]">
                                <div className="w-full bg-[#030516] rounded-2xl p-8 sm:p-10 hover:shadow-darkGrey custom-animate">
                                    <div className="w-fit p-2 bg-[#60A6E7] bg-opacity-60 rounded-md mb-5">
                                        
                                        <img src={LayerIcon} alt="" />
                                    </div>
                                   
                                    <h3 className="text-2xl font-medium mb-5">
                                        {feature.title}
                                    </h3>
                                    {/* Description */}
                                    <div className="text-darkGrey text-[17.5px]">
                                        <p className="">
                                            {feature.description}
                                        </p>
                                    </div>
                                </div>
                                <div className="absolute inset-0 rounded-[inherit] z-0">
                                    <span className="moving-line"></span>
                                </div>

                                
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default FeaturesSection
