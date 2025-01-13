import { useState } from "react"
import CameraMan from "@assets/images/camera-man.svg"
import Button from "@components/Button"
import PlanDesign from "@assets/images/plan-design.svg"
import PlanDevelop from "@assets/images/plan-develop.svg"
import PlanLaunch from "@assets/images/plan-launch.svg"

const CTA1 = () => {
    const [active, setActive] = useState("Idea")
    const data = {
        idea: {
            title: "Your vision is unique.",
            content:
                "Nurture Your Idea into a Blueprint for Success with our strategic insights and industry expertise. Your vision is unique, let’s us shape it.",
        },
        design: {
            title: "Crafting the blueprint for success",
            content:
                "Design is more than aesthetics, it’s about creating user experiences that resonate and convert. Our design experts shape your vision into a stunning reality.",
        },
        develop: {
            title: "Turning blueprints into reality.",
            content:
                "We breathe life into designs, building robust platforms ready to disrupt markets. Harness the experience of our development team to bring your Concept to Life.",
        },
        launch: {
            title: " Your launchpad to the market.",
            content:
                "Launching is just the beginning, we ensure your product makes a splash and keeps making waves, ensuring continual customer acquisition.",
        },
    }
    return (
        <section className="bg-primary-100 text-white-100 px-6 md:px-16 py-12 md:py-20 ">
            {/* Heading Section */}
            <div className="max-w-[45rem] mb-12 xl:mb-0">
                <h1 className="text-[2rem] sm:text-[2.5rem] md:text-[3rem] lg:text-[2.5rem] font-semibold leading-tight">
                    From <span className="text-[#6074e7]">Spark</span> to{" "}
                    <span className="text-[#6074e7]">Spotlight</span>: we take
                    you every step of the way to success.
                </h1>
            </div>

            {/* Steps Section */}
            <div className="mt-8 flex md:flex-row flex-col lg:items-end">
                <div className="basis-1/2 flex mb-8 md:mb-0">
                    <div className="md:pr-10">
                        <div className="grid gap-1 grid-cols-4 p-3.5 items-center border-2 border-accent2 rounded-full">
                            {["Idea", "Design", "Develop", "Launch"].map(
                                (step) => (
                                    <div
                                        key={step}
                                        className={` rounded-full px-2 md:px-2.5 py-3  text-center  md:py-3 font-medium ${
                                            step === active
                                                ? "bg-accent2 text-black-100"
                                                : "text-white-100"
                                        }`}
                                        onClick={() => setActive(step)}
                                    >
                                        {step}
                                    </div>
                                )
                            )}
                        </div>

                        {/* Subheading and Paragraph */}
                        <div className="mt-10">
                            <h2 className="text-[1.5rem] md:text-[2rem] font-bold">
                                {active === "Idea"
                                    ? data.idea.title
                                    : active === "Design"
                                      ? data.design.title
                                      : active === "Develop"
                                        ? data.develop.title
                                        : data.launch.title}
                            </h2>
                            <p className="text-base md:text-lg text-gray-400 mt-4 leading-relaxed">
                                {active === "Idea"
                                    ? data.idea.content
                                    : active === "Design"
                                      ? data.design.content
                                      : active === "Develop"
                                        ? data.develop.content
                                        : data.launch.content}
                            </p>
                        </div>
                        <div className="mt-10 ">
                            <Button>Book a call</Button>
                        </div>
                    </div>
                </div>

                {/* Button Section */}

                {/* Image Section */}
                <div className="basis-1/2 flex justify-start md:justify-end mt-6 md:mt-0 ">
                    <img
                        src={
                            active === "Idea"
                                ? CameraMan
                                : active === "Design"
                                  ? PlanDesign
                                  : active === "Develop"
                                    ? PlanDevelop
                                    : PlanLaunch
                        }
                        width={200}
                        height={200}
                        alt="Man on Rocket Illustration"
                        className="w-full h-[350px] md:w-[95%] md:h-[95%] lg:w-[90%] lg:h-[426px] h-[350px] lg:w-1/2"
                    />
                </div>
            </div>
        </section>
    )
}

export default CTA1
