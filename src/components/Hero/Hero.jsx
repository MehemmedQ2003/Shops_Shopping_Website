// eslint-disable-next-line no-unused-vars
import React from 'react';
import Image1 from "../../assets/hero/man.png"
import Image2 from "../../assets/hero/shopping.png"
import Image3 from "../../assets/hero/sale.png"
import Slider from "react-slick";


const ImageList = [
    {
        id: 1,
        image: Image1,
        title: "Man clothing for sale in Dhaka Bangladesh with discount upto 50%",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
    },
    {
        id: 2,
        image: Image2,
        title: "Sale upto 50% on all products in Dhaka Bangladesh with discount upto 50%",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
    },
    {
        id: 3,
        image: Image3,
        title: "Sale upto 50% on all products in Dhaka Bangladesh with discount upto 50%",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
    }
];

const Hero = () => {
    var settings = {
        dots: false,
        arrows: false,
        infinite: true,
        speed: 800,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 4000,
        cssEase: "ease-in-out",
        pauseOnHover: true,
        pauseOnFocus: false
    }

    return (
      <div className='relative overflow-hidden min-h-[550px] sm:min-h-[650px] bg-gray-100 flex justify-center items-center dark:bg-gray-950 dark:text-white duration-200 '>
          {/* Background Pattern */}
          <div className='h-[700px] w-[700px] bg-primary/40 absolute -top-1/2 right-0 rounded-3xl rotate-45 -z-9'></div>

          {/* hero Section */}
          <div className='container pb-8 sm:pb-0'>
              <Slider {...settings}>
                {
                    ImageList.map((data) => (
                        <div key={data.id}>
                            <div className='grid grid-cols-1 sm:grid-cols-2'>
                                {/* text content section */}
                                <div className='flex flex-col justify-center gap-4 pt-12 sm:pt-0 text-center sm:text-left order-2 sm:order-1 relative z-10'>
                                    <h1 className='text-xl sm:text-2xl lg:text-3xl font-bold' data-aos='zoom-out' data-aos-once='true' data-aos-duration='500'>{data.title}</h1>
                                    <p className='py-4 text-sm' data-aos="fade-up" data-aos-duration="500" data-aos-delay="100">{data.description}.</p>
                                    <div  data-aos="fade-up" data-aos-duration="500" data-aos-delay="300">
                                        <button className='bg-gradient-to-r from-primary to-secondary hover:scale-105 duration-200 text-white py-2 px-4 rounded-full'>Order Now</button>
                                    </div>
                                </div>
                                {/* Image section */}
                                <div className='order-1 sm:order-2'>
                                    <div className='relative z-10' data-aos='zoom-in' data-aos-once='true'>
                                        <img src={data.image} alt='img' className='w-[300px] h-[300px] sm:h-[450px] sm:w-[300px] sm:scale-125 lg:scale-120  object-contain mx-auto '/>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))
                }
              </Slider>
          </div>
      </div>
    )
}

export default Hero
