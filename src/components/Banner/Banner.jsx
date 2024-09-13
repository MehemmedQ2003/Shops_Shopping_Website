// eslint-disable-next-line no-unused-vars
import React from 'react';
import { GrSecure } from "react-icons/gr"
import BannerImg from "../../assets/hero/man.png"
import { IoFastFood } from "react-icons/io5"
import { GiFoodTruck } from "react-icons/gi"


const Banner = () => {
    return (
        <div className="min-h[500px] flex justify-center items-center py-14 sm:py-0">
            <div className="container">
                <div className="grid grid-cols-1 sm:grid-cols-2 ga-6 items-center">
                    {/* Image Section */}
                    <div data-aos="zoom-in">
                        <img src={BannerImg} alt="bannerImg" className="max-w-[400px] h-[350px] w-full mx-auto drop-shadow-[-10px_10px_12px_rgba(0, 0, 0, 0.1) object-cover"/>
                    </div>

                    {/* Text Detail Section */}
                    <div className="flex flex-col justify-center gap-6 sm:pt-0">
                        <h1 className="text-3xl sm:text-4xl font-bold">Winter Sale Upto 50% Off</h1>
                        <p className="text-sm text-gary-500 tracking-wide leading-5">Lorem ipsum dolor sit amet consectetur adipisicing elit sed do eiusmod tempor incididunt.</p>
                        <div>
                            <div className="flex items-center my-3 gap-4" data-aos="fade-up">
                                <GrSecure className="text-4xl h-12 w-12 shadow-sm p-4 rounded-full bg-violet-100 dark:bg-violet-400"/>
                                <p>Quality Products</p>
                            </div>
                            <div className="flex items-center my-3 gap-4" data-aos="fade-up">
                                <IoFastFood className="text-4xl h-12 w-12 shadow-sm p-4 rounded-full bg-orange-100 dark:bg-orange-400"/>
                                <p>Fast Delivery</p>
                            </div>
                            <div className="flex items-center my-3 gap-4" data-aos="fade-up">
                                <GiFoodTruck className="text-4xl h-12 w-12 shadow-sm p-4 rounded-full bg-violet-100 dark:bg-violet-400"/>
                                <p>Easy Payment method</p>
                            </div>
                            <div className="flex items-center my-3 gap-4" data-aos="fade-up">
                                <GiFoodTruck className="text-4xl h-12 w-12 shadow-sm p-4 rounded-full bg-orange-100 dark:bg-orange-400"/>
                                <p>Get Offers</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Banner