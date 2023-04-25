import React from 'react'
import atta from '../../assets/images/atta.jpeg'
import bevarages from '../../assets/images/bevarages.jpeg'
import breakfast from '../../assets/images/breakfast.jpeg'
import dosa from '../../assets/images/dosa.jpeg'
import noodles from '../../assets/images/noodles.jpeg'
import rasam from '../../assets/images/rasam.jpeg'
import soup from '../../assets/images/soup.jpeg'
import spices from '../../assets/images/spices.jpeg'
import Image from 'next/image'
import Link from 'next/link'

const CategoryBanners = () => {

    const catItems = [
        { routes: '/products/atta', id: 1, title: 'ATTA', image: atta, },
        { routes: '/products/noodles', id: 2, title: 'NOODLES', image: noodles },
        { routes: '/products/soup', id: 3, title: 'SOUP', image: soup },
        { routes: '/products/dosa', id: 4, title: 'DOSA', image: dosa },
        { routes: '/products/rasam', id: 5, title: 'RASAM', image: rasam },
        { routes: '/products/spice-blends', id: 6, title: 'SPICE BLENDS', image: spices },
        { routes: '/products/bevarages', id: 7, title: 'BEVERAGES', image: bevarages },
        { routes: '/products/ready-to-eat', id: 8, title: 'BREAKFAST', image: breakfast },
    ];


    return (
        <div className='w-full grid grid-cols-2 gap-10 justify-center items-center px-20'>
            {
                catItems?.map((data, i) => (
                    <Link key={i} className='w-full shadow-xl border border-[#e2e2e2] rounded-[30px]' href={data?.routes}>
                        <div className='w-full relative flex justify-center items-center'>
                            <Image
                                src={data?.image}
                                alt={data?.title}
                                className='rounded-[30px]'
                            />
                        </div>
                    </Link>
                ))
            }
        </div>
    )
}

export default CategoryBanners