import React from "react";
import ParallaxScroll from "./ScrollingCards";

const authors = [
  {
    name: "Oscar Wild",
    country: "Ireland",
    bio: "Oscar Fingal O'Fflahertie Wills Wilde was an Irish author,  poet, and playwright. After writing in different literary styles...",
    image: "../src/assets/authorImages/author01.svg",
  },
  {
    name: "Paulo Coelho",
    country: "Brazil",
    bio: "Paulo Coelho de Souza is a Brazilian lyricist and novelist and a member of the Brazilian Academy of Letters since...",
    image: "../src/assets/authorImages/author02.svg",
  },
  {
    name: "James Baldwin",
    country: "America",
    bio: "James Arthur Baldwin was an African-American writer and civil rights activist who garnered acclaim for...",
    image: "../src/assets/authorImages/author03.svg",
  },
];

const AuthorCard = ({ author }) => (
  <div className="bg-white rounded-xl shadow-lg hover:scale-[1.08] hover:shadow-gray-400  p-4 w-[300px] h-[190px] flex-shrink-0">
    <div className="flex items-center gap-4 ">
      <img
        className="w-[40px] h-[40px] rounded-full object-cover"
        src={author.image}
        alt={author.name}
      />
      <div>
        <h3 className="text-[#064FA4] font-[Georama] text-[18px] font-medium">{author.name}</h3>
        <p className="text-[14px] text-[#8C8C8C] font-[Georama] font-light translate-y-[-4px]">{author.country}</p>
      </div>
    </div>
    <p className="mt-3 text-[#8C8C8C] font-[Georama] font-light text-[12px] ">{author.bio} <span className="text-[#064FA4]"><u><a href="">read more</a></u></span></p>
    <button className="text-[#064FA4] text-[14px] font-medium font-[Georama] mt-4 hover:underline flex gap-1">
      <img src="../src/assets/icons/bookIcon.svg" alt="Book Icon" />
      View Collections
    </button>
  </div>
);

export const AuthorSection = () => {
  return (
    <div className="min-h-screen text-white p-6 mt-10">
      <h2 className="text-[20px] font-[Georama] text-[#121212]">Top Author Collection</h2>
      <ParallaxScroll baseVelocity={-2}>
        {authors.map((author, index, arr) => (
          <AuthorCard key={index} author={author} />
        ))}
      </ParallaxScroll>
    </div>
  );
}
