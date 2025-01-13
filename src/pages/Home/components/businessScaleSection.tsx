
const BusinessScaleSection = () => {
    return (
        <section
            className="py-14 md:py-20 xl:py-28"
            style={{
                background:
                    "linear-gradient(rgb(12, 38, 69) 20%, rgb(3, 5, 22) 60%)",
            }}
        >
            <div className="max-w-[52rem] mx-auto bg-[url('assets/images/arc.svg')] lg:bg-[url('assets/images/arc-L.svg')] bg-cover md:bg-contain lg:bg-contain bg-top bg-no-repeat">
                <div className="pt-20 sm:pt-40 lg:pt-60 pb-10 md:pb-14 lg:pb-20 max-w-xl mx-auto text-center px-5">
                    <div className="mb-14 lg:mb-20 max-w-[19rem] md:max-w-md mx-auto">
                        <h1 className="text-xl md:text-2xl lg:text-3xl font-medium leading-tight text-white-100">
                            We build solutions that help{" "}
                            <span className="text-[#5A9DEB]">businesses</span>{" "}
                            of all sizes to{" "}
                            <span className="text-[#5A9DEB]">scale</span>.
                        </h1>

                        
                        <div className="mt-8 flex  justify-evenly sm:justify-between items-center gap-3">
                            {[
                                { number: "50+", label: "Clients" },
                                { number: "120+", label: "Projects" },
                                { number: "10+", label: "Team Leads" },
                                {
                                    number: "10+",
                                    label: "Glorious Years",
                                },
                            ].map((stat, index) => (
                                <div key={index} className="">
                                    <p className="text-[1.7rem] sm:text-[2rem] md:text-[3rem] text-accent font-medium">
                                        {stat.number}
                                    </p>
                                    <p className="text-[15px] sm:text-base md:text-lg whitespace-nowrap max-w-full overflow-hidden text-ellipsis text-white-100">
                                        {stat.label}
                                    </p>
                                </div>
                            ))}
                        </div>
                        {/* </div> */}
                    </div>
                </div>
            </div>
        </section>
    )
}

export default BusinessScaleSection
