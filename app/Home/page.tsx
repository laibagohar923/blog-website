"use client"

import Image from "next/image";
import Heading from "../components/heading";
import CardData from "../components/cardData";


const MainPage = () => {



  return (
    <div className=" flex  items-center  flex-col">
      <div>
        <h1 className="font-bold text-4xl text-center">Exploring New Articles</h1>
        <p className="text-gray-400 text-base mt-4">Ideas, trends, and inspiration for a brighter future, driving innovation, creativity </p>
      </div>



      <Heading headingValue="Recent Posts" />
      <CardData filter={"isRecent"} />


      <Heading headingValue="Popular Posts" />
      <CardData filter={"isPopular"} />


    </div>
  );
};

export default MainPage;
