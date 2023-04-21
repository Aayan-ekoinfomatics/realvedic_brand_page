import React from 'react'
import search from '../../assets/icons/search.svg'
import Image from 'next/image'

const Searchbar = () => {
    return (
        <div className='w-full max-w-[250px]'>
            <div className='w-full flex justify-center items-center border border-[#e0e0e0] rounded-[10px]'>
                <div className='px-2'>
                    <Image
                        // loader={myLoader}
                        src={search}
                        alt="Picture of the author"
                        width={25}
                        height={20}
                    />
                </div>
                <input type="text" className='w-full py-2 pr-2 outline-none rounded-[10px]' placeholder='Search...' />
            </div>
        </div>
    )
}

export default Searchbar