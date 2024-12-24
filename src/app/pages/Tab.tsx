"use client";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Image from "next/image";
import React, { Dispatch, SetStateAction } from "react";
import OrderCounter from "../lib/OrderCounter";

type Props = {
  allDrink: Array<drinkData>;
  setDrinkData: Dispatch<SetStateAction<drinkData[]>>;
};
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
function TabPage({ allDrink, setDrinkData }: Props) {
  //   const [counter, setCounter] = useState<number>(1);

  return (
    <Tabs defaultValue="all" className="flex flex-col w-full mt-5">
      <TabsList className="rounded-full w-full">
        <TabsTrigger className="lg:w-[130px] rounded-full" value="all">All</TabsTrigger>
        <TabsTrigger className="lg:w-[130px] rounded-full" value="promotion">Promotion Drink</TabsTrigger>
        <TabsTrigger className="lg:w-[130px] rounded-full" value="coffee">Coffee</TabsTrigger>
        <TabsTrigger className="lg:w-[130px] rounded-full" value="ice-drink">Iced Drink</TabsTrigger>
        <TabsTrigger className="lg:w-[130px] rounded-full" value="hot-drink">Hot Drink</TabsTrigger>
        <TabsTrigger className="lg:w-[130px] rounded-full" value="soft-drink">Soft Drink</TabsTrigger>
        <TabsTrigger className="lg:w-[130px] rounded-full" value="frappe">Frappe</TabsTrigger>
      </TabsList>
      <TabsContent
        value="all"
        className="self-start  border-gray-100 h-full w-full mt-5"
      >
        <div className="flex gap-2 flex-wrap h-full">
          {allDrink.map((drink) => {
            return (
              <div
                className="border w-[300px] rounded-lg p-2  "
                key={drink.drink_id}
              >
                <div className="flex  gap-2">
                  <div className=" h-full w-[180px] rounded">
                    <Image
                      className="rounded-xl"
                      src={drink.drink_img}
                      alt="coffee"
                      width={120}
                      height={120}
                    />
                  </div>
                  <div className="flex justify-between flex-col w-full">
                    <div className="flex flex-col">
                      <div className="font-bold line-clamp-2">
                        {drink.drink_title}{" "}
                      </div>
                      <p className="text-[0.6rem] line-clamp-3">
                        {drink.drink_desc} Lorem ipsum dolor sit amet
                        consectetur adipisicing elit. Adipisci, voluptatibus
                        natus doloribus repellendus repellat cumque
                        reprehenderit expedita, architecto dolorem saepe
                        obcaecati libero. Aliquam iure facilis odio, doloremque
                        inventore nisi ipsa?
                      </p>
                    </div>
                    <div className="text-[0.6rem] flex justify-between w-full">
                      <span>Available</span>
                      <span>{drink.drink_sold} Sold</span>
                    </div>
                  </div>
                </div>
                <div className="mt-2 flex justify-between items-center">
                  <div className="font-bold text-xl ">
                    <span className="text-blue-500 w-[45rem]">$</span>{" "}
                    {drink.drink_price}
                  </div>
                  <OrderCounter
                    allDrink={allDrink}
                    setDrinkData={setDrinkData}
                    drink={drink}
                  />
                </div>
              </div>
            );
          })}
        </div>
      </TabsContent>
      <TabsContent value="coffee">Coffee</TabsContent>
      <TabsContent value="soft-drink">Soft Drink</TabsContent>
      <TabsContent value="frappe">Frappe</TabsContent>
    </Tabs>
  );
}

export default TabPage;
