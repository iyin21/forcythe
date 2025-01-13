import { ReactNode } from "react"
import Carousel from "react-multi-carousel"
import "react-multi-carousel/lib/styles.css"

interface Props {
    children: ReactNode
    //rewind:boolean
    rtl?: boolean
}

const CarouselContainer = ({ children, rtl=false}: Props) => {
    return (
        <Carousel
            additionalTransfrom={0}
            centerMode={false}
            
            //shouldResetAutoplay={false}
            containerClass="container"
            autoPlay
            autoPlaySpeed={0}
            customTransition="transform 10s linear"
            transitionDuration={10000}
            //arrows={false}
            draggable={false}
            focusOnSelect={false}
            infinite
            keyBoardControl
            renderButtonGroupOutside={false}
            renderDotsOutside={false}
            responsive={{
                desktop: {
                    breakpoint: {
                        max: 3000,
                        min: 1024,
                    },
                    items: 4,
                partialVisibilityGutter: 40,
                },
                
            }}
            arrows={false}
            pauseOnHover={false}
            rewind={false}
            rewindWithAnimation={false}
            rtl={rtl}
            shouldResetAutoplay={false}
            showDots={false}
            sliderClass=""
            slidesToSlide={2}
            
            
        >
            {children}
        </Carousel>
    )
}

export default CarouselContainer
