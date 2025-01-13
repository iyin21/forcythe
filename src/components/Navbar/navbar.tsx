import { NavLink } from "react-router-dom"
import ForcytheLogo from "@assets/icons/forcytheLogo.svg"
import Button from "@components/Button"
import { useState } from "react"
import { HiOutlineMenuAlt2 } from "react-icons/hi";

const navLinks = [
    { name: "About", href: "/" },
    {
        name: "Services",
        href: "/",
    },
    { name: "Portfolio", href: "/" },
    { name: "Studio", href: "/" },
    { name: "Foundation", href: "/" },
]
const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false)
    const toggleMenu = () => {
        setMenuOpen(!menuOpen)
    }
    return (
        <nav className="flex justify-between  p-4 items-center text-white-100 gap-10 z-30 top-0 sticky left-0 bg-primary-100 w-full sm:px-[2.5rem] backdrop-blur-md">
            <div className="flex items-center gap-20 w-28 sm:w-32 md:w-auto">
                <img src={ForcytheLogo} alt="Logo" />
                <ul className=" hidden md:flex  gap-4">
                    {navLinks.map((item) => (
                        <li key={item.name}>
                            <NavLink
                                to={item.href}
                                
                            >
                                {item.name}
                            </NavLink>
                        </li>
                    ))}
                </ul>
            </div>
            <div className="hidden md:block ">
                <Button>Book a call</Button>
            </div>
            {/* Mobile Hamburger Menu */}
            <button
                className="block md:hidden focus:outline-none rounded-md bg-opacity-10 bg-white-100 p-3"
                onClick={toggleMenu}
            >
                <HiOutlineMenuAlt2 />
            </button>

            {/* Mobile Dropdown Menu */}
            {/* <div class="flex border-0 transition duration-500 items-center flex-col flex-nowrap gap-10 h-min justify-center overflow-visible p-px decoration-clone z-[999999999] bg-primaryBackground w-60 rounded-[2rem] fixed md:hidden right-5 top-28"><div class="text-white z-10 bg-transparent rounded-[inherit] w-full"><div class="w-full p-5 py-8 rounded-[2rem]" style="background: linear-gradient(0deg, rgba(7, 22, 38, 0) 32%, rgb(7, 22, 38) 85%);"><ul class="flex flex-col"><li class="w-full py-2.5"><a class="w-full text-base py-3" href="/about"><span>About</span></a></li><li class="w-full py-2.5"><a class="w-full text-base py-3" href="/services"><span>Services</span></a></li><li class="w-full py-2.5"><a class="w-full text-base py-3" href="/services#portfolio"><span>Portfolio</span></a></li><li class="w-full py-2.5"><a class="w-full text-base py-3" href="/studio"><span>Studio</span></a></li><li class="w-full py-2.5"><a class="w-full text-base py-3" href="/foundation"><span>Foundation</span></a></li><li class="w-full py-2.5"><a class="w-full text-base py-3" href="/career"><span>Careers</span></a></li><li class="w-full py-2.5"><a class="w-full text-base py-3" href="/blog"><span>Blog</span></a></li></ul></div></div><div class="flex-none inset-0 overflow-hidden absolute z-0 rounded-[inherit]" style="filter: blur(2px); position: absolute; width: 100%; height: 100%; background: radial-gradient(16.8673% 42.5054% at 92.5528% 55.8903%, rgb(255, 255, 255) 0%, rgba(255, 255, 255, 0) 100%);"></div><div class="bg-black absolute z-1 flex-none inset-[2px] rounded-[inherit]"></div></div> */}
            {menuOpen && (
                <div className="absolute top-16 right-6 bg-primary-100 decoration-clone  rounded-[2rem]  overflow-visible    md:hidden duration-500 transition w-60 p-px z-[9999999] ">
                    <div className="text-white-100 z-10 bg-transparent rounded-[inherit] w-full">
                        
                    <div className="space-y-5 rounded-[2rem] w-full p-5" style={{background: "linear-gradient(0deg, rgba(7, 22, 38, 0) 32%, rgb(7, 22, 38) 85%)"}}>
 
                    <a href="#about" className="block ">
                        About
                    </a>
                    <a href="#services" className="block ">
                        Services
                    </a>
                    <a href="#portfolio" className="block ">
                        Portfolio
                    </a>
                    <a href="#studio" className="block ">
                        Studio
                    </a>
                    <a href="#foundation" className="block ">
                        Foundation
                    </a>
                    <a href="#careers" className="block ">
                        Careers
                    </a>
                    <a href="#blog" className="block ">
                        Blog
                    </a>
                    </div>
                    </div>
                    <div className="absolute inset-0 rounded-[inherit] z-0 top-0">
                                    <span className="moving-line"></span>
                                </div>
                    
                    
                   
                </div>
            )}

            
        </nav>
    )
}
export default Navbar
