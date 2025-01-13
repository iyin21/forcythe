import { ReactNode } from "react"
import Carousel from "react-multi-carousel"
import "react-multi-carousel/lib/styles.css"

interface Props {
    children: ReactNode
    rewind:boolean
}

const CarouselContainer = ({ children, rewind, }: Props) => {
    return (
        <Carousel
            additionalTransfrom={0}
            centerMode={false}
            
            //shouldResetAutoplay={false}
            containerClass="container"
            autoPlay
            autoPlaySpeed={1}
            customTransition="all 5s linear"
            transitionDuration={1000}
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
                    //partialVisibilityGutter: 10,
                },
                // mobile: {
                //     breakpoint: {
                //         max: 464,
                //         min: 0,
                //     },
                //     items: 1.2,
                //     //partialVisibilityGutter: 30,
                // },
                // tablet: {
                //     breakpoint: {
                //         max: 1024,
                //         min: 464,
                //     },
                //     items: 2,
                //     //partialVisibilityGutter: 30,
                // },
            }}
            pauseOnHover={false}
            rewind={false}
            rewindWithAnimation={rewind}
            rtl={false}
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
