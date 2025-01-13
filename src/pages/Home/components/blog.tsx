import Button from "@components/Button"
import { FaPlay } from "react-icons/fa6"
import BlogImage from "@assets/images/blogImage.webp"
import BlogImage1 from "@assets/images/blogImage1.webp"
import BlogImage2 from "@assets/images/blogImage2.webp"

interface BlogItem {
    id: number
    image: string
    title: string
    author: string
    date: string
}
const blogItems: BlogItem[] = [
    {
        id: 1,
        image: BlogImage,
        title: "Will AI take over Art?",
        author: "The Reformist",
        date: "May 29th, 2024",
    },
    {
        id: 2,
        image: BlogImage1,
        title: "Cryptocurrency vs Tokens",
        author: "The Reformist",
        date: "May 29th, 2024",
    },
    {
        id: 3,
        image: BlogImage2,
        title: "Cryptocurrency and Crypto asset",
        author: "The Reformist",
        date: "May 29th, 2024",
    },
]
const Blog = () => {
    return (
        <div className="section-margin my-10 lg:mb-24">
            <div className="sm:w-[85%] w-[92%] mx-auto">
                <div className="flex flex-col md:flex-row md:justify-between md:items-center mb-12">
                    <div className="">
                        <p className="text-white-100 text-[2rem] leading-[2.5rem] sm:text-[2.2rem] sm:leading-[2.5rem] lg:text-[2.6rem] lg:leading-[3rem] mb-6 sm:mb-4 md:mb-0">
                            Read our articles, news and product blog{" "}
                        </p>
                    </div>
                    <Button className="flex items-center gap-1">
                        {" "}
                        Visit Blog <FaPlay />{" "}
                    </Button>
                </div>
                <div className="blogs grid grid-cols-1 lg:grid-cols-3 gap-8 md:gap-10 lg:gap-12">
                    {blogItems.map((item) => (
                        <div
                            key={item.id}
                            className="w-full pb-5 rounded-[1.3rem] relative overflow-hidden cursor-pointer group hover:shadow-sm hover:shadow-accent transition-all duration-500"
                        >
                            <div className="h-60 sm:h-56 relative mb-6">
                                <div className="bg-accent z-0 w-full h-full absolute top-0 left-0 bg-opacity-10 rounded-[1.3rem] animate-pulse"></div>
                                <img
                                    src={item.image}
                                    alt={item.title}
                                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105  w-full h-full rounded-[1.3rem] transform "
                                />
                            </div>

                            <div className="pl-5 pl-5 relative before:absolute before:w-[1px] before:h-[90%] before:bg-white-100 before:left-0 before:top-[50%] before:-translate-y-[50%] group-hover:translate-x-4 custom-animate">
                                <p className="text-lg font-semibold mb-1 text-white-100">
                                    Blog
                                </p>

                                <div className="text-base text-darkGrey flex items-center mb-6">
                                    <span>{item.author}</span>
                                    <div className="h-2 w-2 rounded-full bg-white-100 mx-[6px] "></div>
                                    <span>{item.date}</span>
                                </div>
                                <h6 className="text-xl md:text-2xl font-semibold line-clamp-2 text-white-100">
                                    Will AI take over Art?
                                </h6>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}
export default Blog
