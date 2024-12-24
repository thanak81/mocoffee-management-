"use client";
import React, { useState } from "react";
import OrderList from "./OrderList";
import Link from "next/link";
import Title from "../component-lib/Title";
import TabPage from "./Tab";
import OrderTab from "./OrderTab";
import { SidebarProvider } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/ui/app-sidebar";

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

export default function MainPage() {
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
      drink_id: 6,
      drink_title: "Ice Latte",
      drink_desc: "Ice Latte is the best",
      drink_sold: 6,
      drink_price: 1.25,
      drink_img: "/ice-latte.webp",
      drink_availability: false,
      drink_order: 0,
    },
    {
      drink_id: 7,
      drink_title: "Ice Latte",
      drink_desc: "Ice Latte is the best",
      drink_sold: 6,
      drink_price: 1.25,
      drink_img: "/ice-latte.webp",
      drink_availability: false,
      drink_order: 0,
    },
    {
      drink_id: 8,
      drink_title: "Ice Latte",
      drink_desc: "Ice Latte is the best",
      drink_sold: 6,
      drink_price: 1.25,
      drink_img: "/ice-latte.webp",
      drink_availability: false,
      drink_order: 0,
    },
    {
      drink_id: 9,
      drink_title: "Ice Latte",
      drink_desc: "Ice Latte is the best",
      drink_sold: 6,
      drink_price: 1.25,
      drink_img: "/ice-latte.webp",
      drink_availability: false,
      drink_order: 0,
    },
    {
      drink_id: 10,
      drink_title: "Ice Latte",
      drink_desc: "Ice Latte is the best",
      drink_sold: 6,
      drink_price: 1.25,
      drink_img: "/ice-latte.webp",
      drink_availability: false,
      drink_order: 0,
    },
    {
      drink_id: 11,
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
    <div className="grid grid-cols-4 gap-4 h-full">
      <div className=" col-span-3 h-[600px] overflow-y-scroll no-scrollbar">
        <div className="flex justify-between items-center">
          <Title title="Order Lists" />
          <div>
            <Link
              href="/order"
              className="border p-2 px-4 rounded text-[0.8rem] bg-black text-white"
            >
              More....
            </Link>
          </div>
        </div>
        <OrderList />
        <Title title="Menu" />
        <div className="flex items-center justify-center w-full">
          <TabPage allDrink={allDrink} setDrinkData={setDrinkData} />
        </div>
      </div>
      <div className="border h-full">
        <OrderTab setDrinkData={setDrinkData} allDrink={allDrink} />
      </div>
    </div>
  );
}
