// eslint-disable-next-line no-unused-vars
import React from 'react';
import { FaStar } from "react-icons/fa";
import Img1 from '../../assets/women/women.png'
import Img2 from '../../assets/women/women.png'
import Img3 from '../../assets/women/women.png'
import Img4 from '../../assets/women/women.png'
import Img5 from '../../assets/women/women.png'


const ProductsData = [
    {
        id: 1,
        img: Img1,
        title: "Women Ethnic",
        rating: 5.0,
        author: "white",
        aosDelay: "0"
    },
    {
        id: 2,
        img: Img2,
        title: "Women Western",
        rating: 4.5,
        author: "red",
        aosDelay: "100"
    },
    {
        id: 3,
        img: Img3,
        title: "Goggles",
        rating: 4.7,
        author: "brown",
        aosDelay: "200"
    },
    {
        id: 4,
        img: Img4,
        title: "Printed T-Shirt",
        rating: 4.2,
        author: "yellow",
        aosDelay: "300"
    },
    {
        id: 5,
        img: Img5,
        title: "Printed Short",
        rating: 4.6,
        author: "green",
        aosDelay: "400"
    },
];


const Product = () => {
    return (
        <div className='mt-14 mb-12'>
            <div className='container'>
                {/* Header Section */}
                <div className='text-center mb-10 max-w-[600px] mx-auto'>
                    <p className='text-lg text-primary font-bold'>Top Selling Products for you</p>
                    <h1 className='text-3xl font-bold'>Products</h1>
                    <p className='text-xs text-gray-400'>Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do eiusmod.</p>
                </div>

                {/* Body Section */}
                <div>
                    <div className='grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 place-items-center gap-5'>
                        {/* Card Section */}
                        {
                            ProductsData.map((data) => (
                                <div key={data.id} className='space-y-3' data-aos="fade-up" data-aos-delay={data.aosDelay}>
                                    <img src={data.img} alt='cardImg' className='h-[220px] w-[150px] object-cover rounded-md'/>
                                    <div>
                                        <h3 className='font-semibold'>{data.title}</h3>
                                        <p className='text-sm text-gray-600'>{data.author}</p>
                                        <div className='flex items-center gap-1'>
                                            <FaStar className='text-yellow-400'/>
                                            <span>{data.rating}</span>
                                        </div>
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                    {/* View All button */}
                    <div className='flex justify-center'>
                        <button className='text-center mt-10 cursor-pointer bg-primary text-white py-1 px-5 rounded-md'>View All Products</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Product
