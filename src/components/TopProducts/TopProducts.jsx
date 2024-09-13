// eslint-disable-next-line no-unused-vars
import React from 'react';
import { FaStar } from 'react-icons/fa'
import Img1 from '../../assets/shirt/shirt.png'
import Img2 from '../../assets/shirt/shirt.png'
import Img3 from '../../assets/shirt/shirt.png'

const ProductsData = [
    {
        id: 1,
        img: Img1,
        title: "Casual Wear",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
    },
    {
        id: 2,
        img: Img2,
        title: "Casual Wear",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
    },
    {
        id: 3,
        img: Img3,
        title: "Casual Wear",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
    }
];


const TopProducts = () => {
    return (
        <div className='mt-14 mb-12'>
            <div className='container'>
                {/* Header Section */}
                <div className='text-center mb-28 max-w-[600px] mx-auto'>
                    <p className='text-lg text-primary font-bold'>Top Rated Products for you</p>
                    <h1 className='text-3xl font-bold'>Best Products</h1>
                    <p className='text-xs text-gray-400'>Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do eiusmod.</p>
                </div>

                {/* Body Section */}
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-20 md:gap-5 place-items-center">
                    {
                        ProductsData.map((data) => (
                            <div key={data.id}
                            data-aos="zoom-in" className='rounded-2xl bg-white dark:bg-gray-800 hover:bg-black/80 dark:hover:bg-primary hover:text-white relative shadow-xl duration-500 group max-w-[300px] my-4'>
                                {/* Image Section */}
                                <div className='h-[100px]'>
                                    <img src={data.img} alt="productImg" className='max-w-[300px] block mx-auto transform -translate-y-20 group-hover:scale-105 duration-300 drop-shadow-md h-[180px]'/>
                                </div>
                                {/* Detail Section */}
                                <div className='p-4 text-center'>
                                    <div className='w-full flex justify-center gap-1'>
                                        <FaStar className='text-yellow-500'/>
                                        <FaStar className='text-yellow-500'/>
                                        <FaStar className='text-yellow-500'/>
                                        <FaStar className='text-yellow-500'/>
                                    </div>
                                    <h1 className='text-xl font-bold'>{data.title}</h1>
                                    <p className='text-gray-500 group-hover:text-white duration-300 text-sm line-clamp-2'>{data.description}</p>
                                    <button className='bg-primary hover:scale-105 duration-300 text-white py-1 px-4 rounded-full mt-4 group-hover:bg-white group-hover:text-primary' 
                                    // onClick={handleOrderPopup}
                                    >
                                        Order Now</button>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    )
}

export default TopProducts
