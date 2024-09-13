// eslint-disable-next-line no-unused-vars
import React from 'react';
import Slider from "react-slick/lib/slider";

const TestimonialData = [
    {
        id: 1,
        name: "Victor",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim ad minim veniam.",
        img: "https://fastly.picsum.photos/id/182/101/101.jpg?hmac=pCOdtNC2_2UREXeMvv4GLeVEHlj1f6_eWYKLrF-XRog"
    },
    {
        id: 2,
        name: "Satya Nadella",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim ad minim veniam.",
        img: "https://fastly.picsum.photos/id/553/102/102.jpg?hmac=fXHpk5yAnwVoGJgV7BE16T-YAm2JVcAikGxqyCqw2mM"
    },
    {
        id: 3,
        name: "Sachin Tendulkar",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim ad minim veniam.",
        img: "https://fastly.picsum.photos/id/142/103/103.jpg?hmac=nD4F_bsHxZDo8nPZZR7e0MPTcYDXj_HYgQCL8y1JTzw"
    },
    {
        id: 4,
        name: "BMW X5",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim ad minim veniam.",
        img: "https://fastly.picsum.photos/id/181/104/104.jpg?hmac=ni0_VtJ52HMMv0888MbDc7pb8wDhC5UWxh_nWJZ5ty4"
    },
    {
        id: 5,
        name: "Science and Technology",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim ad minim veniam.",
        img: "https://fastly.picsum.photos/id/568/105/105.jpg?hmac=XkUR5bQDQxpT3vo9Sb1uk-7u3p8-1XmcTc9hqDeDK_0"
    },
    {
        id: 6,
        name: "Sachin Tendulkar",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim ad minim veniam.",
        img: "https://fastly.picsum.photos/id/638/105/105.jpg?hmac=9mFmh-JxnvEAUTp08c9XkzJt5oaVIzr_hpOWu2VKgT8"
    }
];

const Testimonials = () => {
    var settings = {
        dots: true,
        arrows: false,
        infinite: true,
        speed: 500,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        cssEase: "linear",
        pauseOnHover: true,
        pauseOnFocus: true,
        responsive: [
            {
                breakpoint: 10000,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    infinite: true,
                }
            },
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    initialSlide: 2,
                }
            },
            {
                breakpoint: 640,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    }
    return (
        <div className="py-10 mb-10">
            <div className="container">
                {/* Header Section */}
                <div className='text-center mb-10 max-w-[600px] mx-auto'>
                    <p className='text-lg text-primary font-bold'>What our customers are saying</p>
                    <h1 className='text-3xl font-bold'>Testimonials</h1>
                    <p className='text-xs text-gray-400'>Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do eiusmod.</p>
                </div>

                {/* Testimonial Cards */}
                <div data-aos="zoom-in">
                    <Slider {...settings}>
                        {
                            TestimonialData.map((data) => (
                                <div className="my-6" key={data.id}>
                                    <div className="flex flex-col gap-4 shadow-lg py-8 px-6 mx-4 rounded-xl dark:bg-gray-800 bg-primary/10 relative">
                                        <div className="mb-4">
                                            <img src={data.img} alt="testImg" className="w-20 h-20 rounded-full"/>
                                        </div>
                                        <div className="flex flex-col items-center gap-4">
                                            <div className="space-y-3">
                                                <p className="text-xs text-gray-400 ">{data.text}</p>
                                                <h1>{data.name}</h1>
                                            </div>
                                        </div>
                                        <p className="text-black/20 dark:text-white text-9xl font-serif absolute top-0 right-0">
                                            ,,
                                        </p>
                                    </div>
                                </div>
                            ))
                        }
                    </Slider>
                </div>
            </div>
        </div>
    )
}

export default Testimonials
