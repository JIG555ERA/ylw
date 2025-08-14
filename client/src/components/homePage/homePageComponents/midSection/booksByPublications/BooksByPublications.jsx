import React from 'react'
import { Sparkles, Building2 } from 'lucide-react'
import PublicationCard from './PublicationCard'

const cardContextList = [
  {
    publicationName: "Sample Publication",
    description: "This is a short description for the publication. It gives a brief overview of the content and theme.",
    tags: ["Literary Fiction", "Children Fiction", "Children's Book"],
    books: 2500,
    readers: 56000,
    averageRating: 4.2,
    establishedAt: 1992,
  },
  {
    publicationName: "Tech World Press",
    description: "A hub for cutting-edge technology news, innovations, and thought-provoking articles.",
    tags: ["Technology", "Innovation", "AI & Robotics"],
    books: 3400,
    readers: 120000,
    averageRating: 4.7,
    establishedAt: 2005,
  },
  {
    publicationName: "Nature Chronicles",
    description: "Dedicated to the wonders of nature, wildlife conservation, and environmental awareness.",
    tags: ["Nature", "Wildlife", "Conservation"],
    books: 1800,
    readers: 89000,
    averageRating: 4.5,
    establishedAt: 1985,
  },
  {
    publicationName: "Global Travel Stories",
    description: "Explore fascinating travel destinations, cultures, and unique adventures worldwide.",
    tags: ["Travel", "Culture", "Adventure"],
    books: 2100,
    readers: 75000,
    averageRating: 4.3,
    establishedAt: 2010,
  },
  {
    publicationName: "Healthy Living Journal",
    description: "Your daily guide to fitness, wellness, and a balanced lifestyle.",
    tags: ["Health", "Fitness", "Nutrition"],
    books: 2950,
    readers: 102000,
    averageRating: 4.6,
    establishedAt: 2000,
  },
  {
    publicationName: "History & Heritage",
    description: "A journey through time exploring ancient civilizations, historical events, and artifacts.",
    tags: ["History", "Heritage", "Culture"],
    books: 1600,
    readers: 65000,
    averageRating: 4.4,
    establishedAt: 1975,
  },
  {
    publicationName: "Science Frontier",
    description: "Breaking down complex scientific concepts into engaging and understandable content.",
    tags: ["Science", "Research", "Education"],
    books: 3100,
    readers: 97000,
    averageRating: 4.8,
    establishedAt: 1998,
  },
  {
    publicationName: "Culinary Wonders",
    description: "Delicious recipes, cooking techniques, and food culture from around the world.",
    tags: ["Cooking", "Recipes", "Food Culture"],
    books: 2700,
    readers: 83000,
    averageRating: 4.5,
    establishedAt: 2008,
  }
];


const BooksByPublications = ({}) => {
    return (
        <div
        className='w-full h-auto'>
            <div
            className='lg:px-[80px] md:px-[40px] px-[16px] flex flex-col items-center justify-center bg-gradient-to-br from-purple-100 via-white to-blue-100 py-[100px]'>
                {/* description & tags */}
                <div
                className='flex flex-col w-full justify-center items-center'>
                    <div className='h-[50px] flex justify-center items-center rounded-3xl bg-white/75 px-[16px] gap-[8px] shadow-gray-400 hover:scale-105 shadow-2xl hover:shadow-2xl cursor-pointer'><Building2 className='h-5 w-5 text-cyan-500'/><h1 className='text-[16px] font-medium'>Trusted Publishers</h1></div>
                    <h1 className='bg-gradient-to-br from-blue-300 via-blue-500 to-purple-400 bg-clip-text text-transparent font-bold text-[48px] py-[16px]'>Books By Publications</h1>
                    <p className='text-gray-500/80 text-[16px] font-medium lg:w-[35vw] flex text-center'>Discover exceptional literature from world-renowned publishers. From academic excellence to popular fiction, explore curated collections from the industry's most trusted names.</p>
                    <div className='flex py-[16px] gap-[16px]'>
                        <div className='h-[40px] flex justify-center items-center rounded-3xl bg-white/75 px-[16px] gap-[8px] shadow-gray-300 hover:scale-105 shadow-xl hover:shadow-2xl cursor-pointer'><Sparkles className='h-5 w-5 text-purple-400'/><h1 className='text-[14px] font-medium'>Trusted Publishers</h1></div>
                        <div className='h-[40px] flex justify-center items-center rounded-3xl bg-white/75 px-[16px] gap-[8px] shadow-gray-300 hover:scale-105 shadow-xl hover:shadow-2xl cursor-pointer'><Building2 className='h-5 w-5 text-blue-400'/><h1 className='text-[14px] font-medium'>Trusted Publishers</h1></div>
                    </div>
                </div>
                {/* cards */}
                <div className='w-full h-auto grid lg:grid-cols-4 md:grid-cols-3 grid-cols-1 lg:gap-[24px] md:gap-[16px] mt-[24px]'>
                   
                   {cardContextList.map((card) => (
                    <div>
                        <PublicationCard context={card} />
                    </div>
                   ))}
                   
                </div>
            </div>
        </div>
    )
}

export default BooksByPublications
