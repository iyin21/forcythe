import ForcytheLogo from "@assets/icons/forcytheLogo.svg"
import { GrFacebookOption } from "react-icons/gr"
import { FaInstagram } from "react-icons/fa"
import { FaXTwitter } from "react-icons/fa6"
import { FaLinkedinIn } from "react-icons/fa"
import { LuYoutube } from "react-icons/lu"
import { LiaPodcastSolid } from "react-icons/lia"

const Footer = () => {
    return (
        <footer className="bg-secondary text-white-100 py-10 ">
            <div className="mx-auto w-[85%] ">
                <div className="  lg:grid   lg:grid-cols-3 my-10">
                    
                    <div className=" mb-10 mb-0 col-span-1">
                        <form className="flex flex-col">
                            
                            <div className="flex  items-stretch  rounded-full border">
                                <input
                                    type="email"
                                    placeholder="Your Email Address"
                                    className="pl-3 rounded-t-md sm:rounded-t-none sm:rounded-l-md w-full focus:outline-none bg-transparent text-sm placeholder:text-[#79767D] border border-white border-l-0 border-t-0 border-b-0"
                                />
                                <button
                                    type="submit"
                                    className="bg-white-100 text-black-100 hover:bg-[#064386] hover:text-white-100 text-sm p-3 border-l-0 rounded-e-full text-sm  font-medium custom-animate"
                                >
                                    Subscribe
                                </button>
                            </div>
                            {/* Checkbox */}
                            <div className="flex items-center mt-4">
                                <div className="w-5 h-5 border-2 rounded-full bg-transparent border-white cursor-pointer flex items-center justify-center">
                                    <input
                                        className="hidden"
                                        id="agreement"
                                        type="checkbox"
                                        name="agreement"
                                    />
                                </div>
                                <label className=" text-sm ml-2">
                                    I agree to receive other notifications from
                                    Forcythe
                                </label>
                            </div>
                        </form>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3  lg:col-span-2 gap-10 md:gap-0">
                        <div className="lg:pl-14 md:col-span-2 md:pr-10">
                            <img
                                src={ForcytheLogo}
                                alt="Forctyhe"
                                className="mb-5 md:mb-8"
                            />
                            <p className="mb-4 text-[#b3a9b1] text-base">
                                We are the growth company for businesses looking
                                to scale. We are dedicated to transforming
                                businesses with bespoke digital solutions that
                                drive growth.
                            </p>
                            <div className="sm:flex space-x-4 mt-10 text-base hidden">
                                <div className="w-8 h-8 border-accent border border-1 rounded-full flex justify-center item-center px-auto py-1">
                                    <a href="#" className="">
                                        <GrFacebookOption
                                            size="20px"
                                            color="#60a6e7"
                                        />{" "}
                                    </a>
                                </div>
                                <div className="w-8 h-8 border-accent border border-1 rounded-full flex justify-center item-center px-auto py-1">
                                    <a href="#" className="">
                                        <FaInstagram
                                            size="20px"
                                            color="#60a6e7"
                                        />{" "}
                                    </a>
                                </div>
                                <div className="w-8 h-8 border-accent border border-1 rounded-full flex justify-center item-center px-auto py-1">
                                    <a href="#" className="">
                                        <FaXTwitter
                                            size="20px"
                                            color="#60a6e7"
                                        />{" "}
                                    </a>
                                </div>
                                <div className="w-8 h-8 border-accent border border-1 rounded-full flex justify-center item-center px-auto py-1">
                                    <a href="#" className="">
                                        <FaLinkedinIn
                                            size="20px"
                                            color="#60a6e7"
                                        />{" "}
                                    </a>
                                </div>
                                <div className="w-8 h-8 border-accent border border-1 rounded-full flex justify-center item-center px-auto py-1">
                                    <a href="#" className="">
                                        <LuYoutube
                                            size="20px"
                                            color="#60a6e7"
                                        />{" "}
                                    </a>
                                </div>
                                <div className="w-8 h-8 border-accent border border-1 rounded-full flex justify-center item-center px-auto py-1">
                                    <a href="#" className="">
                                        <LiaPodcastSolid
                                            size="20px"
                                            color="#60a6e7"
                                        />{" "}
                                    </a>
                                </div>
                            </div>
                        </div>

                        {/* Links Section */}
                        <div className="lg:pl-10">
                            <h3 className="text-2xl font-bold mb-8">Company</h3>
                            <ul className="space-y-2 text-sm font-medium text-[#b3d0f2]">
                                <li>
                                    <a href="#" className="">
                                        About
                                    </a>
                                </li>
                                <li>
                                    <a href="#" className="">
                                        Services
                                    </a>
                                </li>
                                <li>
                                    <a href="#" className="">
                                        Portfolio
                                    </a>
                                </li>
                                <li>
                                    <a href="#" className="">
                                        Studio
                                    </a>
                                </li>
                                <li>
                                    <a href="#" className="">
                                        Foundation
                                    </a>
                                </li>
                                <li>
                                    <a href="#" className="">
                                        Careers
                                    </a>
                                </li>
                                <li>
                                    <a href="#" className="">
                                        Blog
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="flex space-x-4 mt-10 text-base sm:hidden justify-center">
                    <div className="w-8 h-8 border-accent border border-1 rounded-full flex justify-center item-center px-auto py-1">
                        <a href="#" className="">
                            <GrFacebookOption size="20px" color="#60a6e7" />{" "}
                        </a>
                    </div>
                    <div className="w-8 h-8 border-accent border border-1 rounded-full flex justify-center item-center px-auto py-1">
                        <a href="#" className="">
                            <FaInstagram size="20px" color="#60a6e7" />{" "}
                        </a>
                    </div>
                    <div className="w-8 h-8 border-accent border border-1 rounded-full flex justify-center item-center px-auto py-1">
                        <a href="#" className="">
                            <FaXTwitter size="20px" color="#60a6e7" />{" "}
                        </a>
                    </div>
                    <div className="w-8 h-8 border-accent border border-1 rounded-full flex justify-center item-center px-auto py-1">
                        <a href="#" className="">
                            <FaLinkedinIn size="20px" color="#60a6e7" />{" "}
                        </a>
                    </div>
                    <div className="w-8 h-8 border-accent border border-1 rounded-full flex justify-center item-center px-auto py-1">
                        <a href="#" className="">
                            <LuYoutube size="20px" color="#60a6e7" />{" "}
                        </a>
                    </div>
                    <div className="w-8 h-8 border-accent border border-1 rounded-full flex justify-center item-center px-auto py-1">
                        <a href="#" className="">
                            <LiaPodcastSolid size="20px" color="#60a6e7" />{" "}
                        </a>
                    </div>
                </div>
                <div className="border-t border-[#60a6e7] mt-10 pt-6  text-sm text-[#b3d0f2] txt-center sm:text-left">
                    Copyright © 2024 Forcythe. All rights reserved.
                </div>
            </div>
        </footer>
    )
}

export default Footer
