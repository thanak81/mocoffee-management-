"use client"
import React, { useState } from "react";
import Title from "../component-lib/Title";
import TabPage from "../pages/Tab";

type Props = {};
type drinkData = {
  drink_id: number;
  drink_title: string;
  drink_desc: string;
  drink_sold: number;
  drink_price: number;
  drink_img: string | "hey";
  drink_availability: boolean;
  drink_order: number;
};
function MenuPage({}: Props) {
  const drinkDataArray: Array<drinkData> = [
    {
      drink_id: 1,
      drink_title: "Ice Latte",
      drink_desc: "Ice Latte is the best",
      drink_sold: 6,
      drink_price: 1.25,
      drink_img: "/ice-latte.webp",
      drink_availability: false,
      drink_order: 0,
    },
    {
      drink_id: 2,
      drink_title: "Ice Latte",
      drink_desc: "Ice Latte is the best",
      drink_sold: 6,
      drink_price: 1.25,
      drink_img: "/ice-latte.webp",
      drink_availability: false,
      drink_order: 0,
    },
    {
      drink_id: 3,
      drink_title: "Ice Latte",
      drink_desc: "Ice Latte is the best",
      drink_sold: 6,
      drink_price: 1.25,
      drink_img: "/ice-latte.webp",
      drink_availability: false,
      drink_order: 0,
    },
    {
      drink_id: 4,
      drink_title: "Ice Latte",
      drink_desc: "Ice Latte is the best",
      drink_sold: 6,
      drink_price: 1.25,
      drink_img: "/ice-latte.webp",
      drink_availability: false,
      drink_order: 0,
    },
    {
      drink_id: 5,
      drink_title: "Ice Latte",
      drink_desc: "Ice Latte is the best",
      drink_sold: 6,
      drink_price: 1.25,
      drink_img: "/ice-latte.webp",
      drink_availability: false,
      drink_order: 0,
    },
    {
      drink_id: 5,
      drink_title: "Ice Latte",
      drink_desc: "Ice Latte is the best",
      drink_sold: 6,
      drink_price: 1.25,
      drink_img: "/ice-latte.webp",
      drink_availability: false,
      drink_order: 0,
    },
    {
      drink_id: 5,
      drink_title: "Ice Latte",
      drink_desc: "Ice Latte is the best",
      drink_sold: 6,
      drink_price: 1.25,
      drink_img: "/ice-latte.webp",
      drink_availability: false,
      drink_order: 0,
    },
    {
      drink_id: 5,
      drink_title: "Ice Latte",
      drink_desc: "Ice Latte is the best",
      drink_sold: 6,
      drink_price: 1.25,
      drink_img: "/ice-latte.webp",
      drink_availability: false,
      drink_order: 0,
    },
    {
      drink_id: 5,
      drink_title: "Ice Latte",
      drink_desc: "Ice Latte is the best",
      drink_sold: 6,
      drink_price: 1.25,
      drink_img: "/ice-latte.webp",
      drink_availability: false,
      drink_order: 0,
    },
    {
      drink_id: 5,
      drink_title: "Ice Latte",
      drink_desc: "Ice Latte is the best",
      drink_sold: 6,
      drink_price: 1.25,
      drink_img: "/ice-latte.webp",
      drink_availability: false,
      drink_order: 0,
    },
    {
      drink_id: 5,
      drink_title: "Ice Latte",
      drink_desc: "Ice Latte is the best",
      drink_sold: 6,
      drink_price: 1.25,
      drink_img: "/ice-latte.webp",
      drink_availability: false,
      drink_order: 0,
    },
  ];
  const [allDrink, setDrinkData] = useState<drinkData[]>(drinkDataArray);
  return (
    <div className="w-full">
      <Title title="Menu Lists" />
      <div className="">
        <TabPage allDrink={allDrink} setDrinkData={setDrinkData} />
      </div>
    </div>
  );
}

export default MenuPage;
