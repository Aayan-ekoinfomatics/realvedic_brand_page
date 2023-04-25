import navItems from '@/helper/mockProducts';
import allCategoriesAtom from '@/recoil/allCategoriesAtom';
import selectedCategoryAtom from '@/recoil/selectedCategoryAtom';
import Link from 'next/link';
import React, { useEffect } from 'react'
import { useRecoilState } from 'recoil';

const Navbar = () => {

    const [selectedCategory, setSelectedCategory] = useRecoilState(selectedCategoryAtom);
    const [allProducts, setAllProducts] = useRecoilState(allCategoriesAtom);

    // const navItems = [
    //     { route: '/', id: 0, title: 'HOME' },
    //     { route: '/products/atta', id: 1, title: 'ATTA', res_name: 'Flour_Packs' },
    //     { route: '/products/noodles', id: 2, title: 'NOODLES' },
    //     { route: '/products/soup', id: 3, title: 'SOUP' },
    //     { route: '/products/dosa', id: 4, title: 'DOSA' },
    //     { route: '/products/rasam', id: 5, title: 'RASAM' },
    //     { route: '/products/spice-blends', id: 6, title: 'SPICE BLENDS' },
    //     { route: '/products/bevarages', id: 7, title: 'BEVERAGES' },
    //     { route: '/products/ready-to-eat', id: 8, title: 'READY TO EAT' },
    // ];

    // useEffect(() => {console.log(selectedCategory)}, [selectedCategory]);


    return (
        <div className='w-full flex justify-between items-center '>
            {
                navItems.map((data, i) => (
                    <Link className='w-full flex justify-center items-center hover:bg-blue-200 py-2 cursor-pointer rounded-[15px]' onClick={() => selectedCategory === data?.res_name ? setSelectedCategory(null) : setSelectedCategory(data?.res_name)} key={i} href={data?.route}>
                        <div className='w-full flex justify-center items-center'>
                            <h1 className='text-[14px] font-[500]'>{data?.title}</h1>
                        </div>
                    </Link>
                ))
            }
        </div>
    )
}

export default Navbar