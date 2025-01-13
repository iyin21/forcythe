import CarouselContainer from "@components/CarouselContainer"
import Activity from "@assets/images/activity.svg"
import AfricaFund from "@assets/images/africaFund.svg"
import ExecPro from "@assets/images/exec-pro.svg"
import Starks from "@assets/images/starks.svg"
import Stacs from "@assets/images/stac.svg"
import Phone from "@assets/images/phone.svg";

const SuccessInMotion = () => {
    const images=[ExecPro, Phone,Stacs, Activity, AfricaFund, Starks]
    
    return (
        <section>
            <div className="">
                <p className="text-[2rem] text-white-100 mt-10 font-semibold leading-[2.5rem] sm:text-[2.2rem] sm:leading-[2.5rem] lg:text-[2.6rem] lg:leading-[3rem] mb-4 max-w-[90%] mx-auto text-center">
                    
                        
                            Success{" "}
                        
                            in{" "}
                        
                        <span
                            className=" text-[#60a6e7] capitalize"
                            
                        >
                            Motion{" "}
                        
                    </span>
                    - Our client's journey
                </p>
            </div>
            <CarouselContainer >
                {images.map((item, index)=>(
                    <img src={item} alt="" key={index} />
                ))}
            </CarouselContainer>
            <CarouselContainer rtl>
                {images.map((item, index)=>(
                    <img src={item} alt="" key={index} />
                ))}
            </CarouselContainer>
            
        </section>
    )
}
export default SuccessInMotion
