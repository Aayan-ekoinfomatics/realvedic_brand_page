import allCategoriesAtom from '@/recoil/allCategoriesAtom';
import selectedCategoryAtom from '@/recoil/selectedCategoryAtom';
import { useRouter } from 'next/router';
import React, { useEffect } from 'react'
import { Carousel } from 'react-responsive-carousel';
import { useRecoilState } from 'recoil';

const CategoryProducts = () => {

  const [selectedCategory, setSelectedCategory] = useRecoilState(selectedCategoryAtom);

  const router = useRouter();
  console.log(router?.query?.category);

  const domain = 'http://192.168.1.8:8000/';

  const [allProducts, setAllProducts] = useRecoilState(allCategoriesAtom);

  useEffect(() => {
    console.log(selectedCategory)
  }, [selectedCategory])
  


  return (
    <div className='w-full'>
      <div className='w-full'>

        <div className='w-full max-w-[200px] ml-10 mt-10'>
          <button onClick={() => router.back()}>back</button>
        </div>  

        <Carousel
          showArrows={true}
          showIndicators={true}
          infiniteLoop={true}
          dynamicHeight={false}
          className='w-full max-w-[800px] border bg-gray-100 rounded-[20px] pt-10'
        >
          {allProducts?.selectedCategory?.map((item) => (
            <div key={item.id} className='w-full'>
              <div className=''>
                <img src={domain + item?.image[0]} className="max-w-[300px]" alt="slides" />
              </div>
              <div className='pb-10'>
                <h2 className="text-[16px] font-[500]">{item.title}</h2>
                <p>{item.description}</p>
              </div>
            </div>
          ))}
        </Carousel>
      </div>
    </div>
  )
}

export default CategoryProducts