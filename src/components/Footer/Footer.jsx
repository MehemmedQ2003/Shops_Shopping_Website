// eslint-disable-next-line no-unused-vars
import React from 'react';
import { FaInstagram, FaFacebook, FaLinkedin, FaLocationArrow, FaMobileAlt } from "react-icons/fa";
import FooterLogo from "../../assets/logo.png"
import Banner from "../../assets/website/footer-pattern.jpg"

const BannerImg = {
    backgroundImage: `url(${Banner})`,
    backgroundPosition: "bottom",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    height: "100%",
    width: "100%"
};

const FooterLinks = [
    {
        title: "Home",
        link: "/#"
    },
    {
        title: "About",
        link: "/#"
    },
    {
        title: "Contact",
        link: "/#"
    },
    {
        title: "Blog",
        link: "/#"
    }
]

const Footer = () => {
  return (
    <div style={BannerImg} className="text-white">
        <div className="container">
            <div className="grid md:grid-cols-3 pb-44 pt-5" data-aos="zoom-in">
                {/* Company Details */}
                <div className="py-8 px-4">
                    <h1 className="sm:text-3xl text-xl font-bold sm:text-left text-justify mb-3 flex items-center gap-3">
                        <img src={FooterLogo} alt="footerImg" className="max-w-[50px]"/>
                        Shopsy
                    </h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua</p>
                </div>
            

                {/* Footer Links */}
                <div className="grid grid-cols-2 sm:grid-cols-3 col-span-2 md:pl-10">
                    <div>
                        <div className="py-8 px-4">
                            <h1 className="sm:text-xl text-xl font-bold sm:text-left text-justify mb-3">Important Links</h1>
                            <ul className="flex flex-col gap-3">
                                {
                                    FooterLinks.map((link) => (
                                        <li key={link.title} className="cursor-pointer hover:text-primary hover:translate-x-1 duration-300 text-gray-200">
                                            <span>{link.title}</span>
                                        </li>
                                    ))
                                }
                            </ul>
                        </div>
                    </div>
                    <div>
                        <div className="py-8 px-4">
                            <h1 className="sm:text-xl text-xl font-bold sm:text-left text-justify mb-3">Links</h1>
                            <ul className="flex flex-col gap-3">
                                {
                                    FooterLinks.map((link) => (
                                        <li key={link.title} className="cursor-pointer hover:text-primary hover:translate-x-1 duration-300 text-gray-200">
                                            <span>{link.title}</span>
                                        </li>
                                    ))
                                }
                            </ul>
                        </div>
                    </div>

                    {/* Social Links */}
                    <div>
                        <div className="flex items-center gap-3 mt-6">
                            <a href="#">
                                <FaInstagram className="text-3xl"/>
                            </a>
                            <a href="#">
                                <FaFacebook className="text-3xl"/>
                            </a>
                            <a href="#">
                                <FaLinkedin className="text-3xl"/>
                            </a>
                        </div>
                        <div className="mt-6">
                            <div className="flex items-center gap-3">
                                <FaLocationArrow />
                                <p>Lorem ipsum dolor</p>
                            </div>
                            <div className="flex items-center gap-3">
                                <FaMobileAlt />
                                <p>+994 55 713 52 90</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Footer
