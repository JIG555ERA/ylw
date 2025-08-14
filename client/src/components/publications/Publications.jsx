import React from 'react'
import bookStoreLogo from '../../assets/logos/bookStoreLogo.svg'
import PhoneNavBar from '../homePage/homePageComponents/topSection/navBar/PhoneNavBar'
import mainPublisherImage from '../../assets/authorImages/author01.svg'
import publisherImg01 from '../../assets/authorImages/author01.svg'
import publisherImg02 from '../../assets/authorImages/author02.svg'
import publisherImg03 from '../../assets/authorImages/author03.svg'
import publisherImg04 from '../../assets/authorImages/author04.svg'
import ImageSection from '../../globalComponents/ImageSection'
import { booksData0 } from '../../globalComponents/booksData'

const Publications = () => {

    const publisherContext = [
        {
        id: 'publisher01',
        name: 'MARVEL',
        content: 'Marvel is a legendary publishing powerhouse known for redefining storytelling through its iconic superheroes and expansive universes. From timeless classics to modern epics, Marvel continues to inspire generations with gripping narratives, dynamic characters, and groundbreaking visuals.',
        topImg: mainPublisherImage,
        publisherImages: [publisherImg01, publisherImg02, publisherImg03, publisherImg04]
        }
    ]

    return (
        <div
        className='w-full bg-[#f9f9f9] lg:px-[80px] text-[#121212] font-[Poppins]'>
            <a href="/" className="block lg:hidden w-full py-2 mx-auto">
                <div className="flex justify-center items-center mx-auto">
                <img
                src={bookStoreLogo}
                alt="Book Store Logo"
                className="h-[72px] w-auto mx-auto" 
                />
                </div>
            </a>
            <div
            className='w-full h-full pb-[120px] lg:px-[80px] px-[16px] flex flex-col'>
                <img 
                className='w-full h-[90vw] object-cover rounded-3xl'
                src={publisherContext[0].topImg} 
                alt={publisherContext[0].topImg} />
                <h1
                className='text-[24px] text-[#121212] font-semibold pt-[16px]'>
                    {publisherContext[0].name}
                </h1>
                <p
                className='text-[16px] font-medium line-clamp-5'>
                    {publisherContext[0].content}
                </p>

                {/* publisher collections */}
                <div
                className='w-full h-auto pt-[16px]'>
                    <h1
                    className='text-[24px] text-[#121212] font-semibold'>
                        Publisher Collections
                    </h1>
                    <div
                    className='w-full h-auto grid grid-cols-2 gap-[16px]'>
                        {booksData0.slice(0, 4).map((book, index, array) => (
                            <div
                            key={book.id}
                            className='lg:h-[210px] lg:w-[150px] w-[130px] aspect-[3/4] mx-auto'>
                                <ImageSection bookCoverPage={book.bookCoverPage} />
                            </div>
                        ))
                    }
                    </div>
                </div>

            </div>

            <PhoneNavBar />
        </div>
    )
}

export default Publications
