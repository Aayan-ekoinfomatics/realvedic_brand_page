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
import { useEffect } from 'react'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {

  
  const domain = 'http://192.168.1.8:8000/';

  const [allProducts, setAllProducts] = useRecoilState(allCategoriesAtom);

  useEffect(() => {

      const callAPi = async() => {

          const response = await fetch(domain + 'brand_page');
          const jsonData = await response.json();
          setAllProducts(jsonData);
      }


      callAPi()

    }, [])
    


  return (
    <main className="w-full">

      <Head>
        <title>Realvedic</title>
      </Head>
      
      {/* banner */}
      <div className='w-full relative h-[40vh]'>
        <Image
        src={banner}
        fill
        alt='a'
        />
      </div>

      {/* navbar searchbar */}
      <div className='w-full gap-2 flex justify-between py-2 px-2 mt-5'>
        <Navbar />
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
