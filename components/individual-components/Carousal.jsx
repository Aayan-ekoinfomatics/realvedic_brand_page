import { useEffect, useState } from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import products from '../../helper/mockProducts'


export default function ResponsiveCarousel() {

    const [allProducts, setAllProducts] = useState();

    const domain = 'http://192.168.1.8:8000/';
    // const responsive = [
    //     { id: 1, title: 'Hi', text: 'some text' },
    //     { id: 2, title: 'Hi', text: 'some text' },
    //     { id: 3, title: 'Hi', text: 'some text' },
    //     { id: 4, title: 'Hi', text: 'some text' },
    //     { id: 5, title: 'Hi', text: 'some text' },
    //     { id: 1, title: '', category: '', route: '', image: '' }
    // ];

    useEffect(() => {
    //   fetch(domain + 'brand_page').then((response) => response).then(data => console.log(data));

    //   const callAPi = async() => {

    //       const response = await fetch(domain + 'brand_page');
    //       const jsonData = await response.json();
    //       setAllProducts(jsonData?.All_Products);
    //   }


    //   callAPi()

    }, [])
    




    return (
        <div className='flex flex-col justify-center items-center'>
            <div className="w-[30%] rounded-[15px] mx-auto flex justify-center mt-10 py-3 shadow-md bg-gray-100 mb-5">
                <h1 className="text-[22px]">Our Best Sellers</h1>
            </div>
            <Carousel
                showArrows={true}
                showIndicators={true}
                infiniteLoop={true}
                dynamicHeight={false}
                className='w-full max-w-[800px] border bg-gray-100 rounded-[20px] pt-10'
            >
                {allProducts?.map((item) => (
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
    );
}