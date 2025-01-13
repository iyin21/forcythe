import Button from "@components/Button"
import { useState, useEffect } from "react"
import { FaPlay } from "react-icons/fa6"

const HeroSection = () => {
    const fullText = "We build products that shape a better future"; // Full text without formatting
    const highlightWord = "products"; // Word that is highlighted
    const highlightColor = "text-[#6074e7]"; // Tailwind class for highlighted color
    const [text, setText] = useState("");

    useEffect(() => {
        let index = 0;

        const interval = setInterval(() => {
            if (index < fullText.length) {
                setText((prev) => prev + fullText[index]); // Add one letter at a time
                index++;
            } else {
                clearInterval(interval); // Stop when complete
            }
        }, 50); // Typing speed in milliseconds

        return () => clearInterval(interval); // Cleanup on unmount
    }, [fullText]);

    const renderAnimatedText = () => {
        const highlightStart = fullText.indexOf(highlightWord); // Start index of the highlighted word
        const highlightEnd = highlightStart + highlightWord.length; // End index of the highlighted word

        // Animated text logic
        return (
            <>
                {text.slice(0, highlightStart)} {/* Part before the highlight */}
                <span className={highlightColor}>
                    {text.slice(highlightStart, Math.min(highlightEnd, text.length))} {/* Highlighted part */}
                </span>
                {text.slice(highlightEnd, fullText.length)} {/* Part after the highlight */}
            </>
        );
    };

    console.log("fjfj", fullText.indexOf(highlightWord))
    return (
        <section className="relative  text-white pb-4  ">
            <div className="container mx-auto w-[85%] bg-white-100 bg-opacity-10  px-6 relative z-10 sm:rounded-[3rem] rounded-[2rem] bg-opacity-10 lg:p-10 md:p-8 p-5 py-8 ">
            
                <div className="ma-w-3xl">
                    <h1 className="text-[3.5rem] md:text-[4rem] lg:text-[5rem] text-white-100 font-normal leading-tight">
                        {renderAnimatedText()}
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
