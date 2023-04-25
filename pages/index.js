import Image from 'next/image'
import { Inter } from 'next/font/google'
import Navbar from '@/components/global-components/Navbar'
import Searchbar from '@/components/global-components/Searchbar'
import banner from '../assets/images/banner.jpeg'
import CategoryBanners from '@/components/individual-components/CategoryBanners'
import BestSellers from '@/components/individual-components/BestSellers'
import Head from 'next/head'
import { useRecoilState } from 'recoil'
import allCategoriesAtom from '@/recoil/allCategoriesAtom'
import { useEffect, useState } from 'react'
import bestSellersAtom from '@/recoil/bestSellersAtom'

const inter = Inter({ subsets: ['latin'] })

export default function Home({allCategories, bestSellers}) {

  // const testObj = { a: 1, b: 2, c: 3, d: 4 };

  // Object.entries(testObj).forEach(([key, value]) => {
  //   console.log(value)
  // });


  // const domain = '';
  const domain = 'http://192.168.1.11:8000/';

  const [allProducts, setAllProducts] = useRecoilState(allCategoriesAtom);
  const [allBestSellerProducts, setAllBestSellerProducts] = useRecoilState(bestSellersAtom);

  useEffect(() => {

    setAllProducts(allCategories);
    setAllBestSellerProducts(bestSellers)
    // const callAPi = async() => {

    //     const response = await fetch(domain + 'category');
    //     const jsonData = await response.json();
    //     setAllProducts(jsonData);
    //     console.log(jsonData);
    // }


    // callAPi()
    console.log("bestSeller from almighty GOD",allBestSellerProducts)

  }, [allProducts, allBestSellerProducts])



  return (
    <main className="w-full">

      <Head>
        <title>Realvedic</title>
      </Head>

      {/* banner */}
      <div className= 'w-full relative h-[40vh]'>
        <Image
          src={banner}
          fill
          alt='a'
        />
      </div>

      {/* navbar searchbar */}
      <div className='w-full gap-2 flex justify-between py-2 px-2  sticky mt-5 top-[0] z-[300] bg-[#fffcf1]'>
        <div className='w-full'>
        <Navbar />
        </div>
        <Searchbar />
      </div>

      {/* category banners */}
      <div className='w-full pt-10'>
        <CategoryBanners />
      </div>

      {/* best sellers */}
      <div className='w-full py-10'>
        <BestSellers />
      </div>

    </main>
  )
}


export async function getServerSideProps() {
  const allCategories = await fetch(process.env.NEXT_PUBLIC_BASE_LINK + "category").then((response) => response?.json());
  const bestSeller = await fetch(process.env.NEXT_PUBLIC_BASE_LINK + "best_sellers").then((response) => response?.json());
  return {
    props: {
      allCategories: allCategories,
      bestSellers: bestSeller,
    }
  }
};