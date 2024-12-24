import Image from "next/image";
import React, { Dispatch, SetStateAction } from "react";
import OrderCounter from "./OrderCounter";

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
type Props = {
  allDrink: Array<drinkData>;
  setDrinkData: Dispatch<SetStateAction<drinkData[]>>;
  drink: drinkData;
};

function OrderCard({ drink, allDrink, setDrinkData }: Props) {
  return (
    <div className="flex gap-4">
      <Image
        className="rounded-lg"
        src="/ice-latte.webp"
        width={80}
        height={80}
        alt="drink-img"
      />
      <div className="flex justify-between flex-col w-full">
        <p className="font-bold ">Ice Latte</p>
        <div className="flex justify-between items-center w-full">
          <OrderCounter
            drink={drink}
            allDrink={allDrink}
            setDrinkData={setDrinkData}
            // drink={drink}
          />
          <p>$5.99</p>
        </div>
        
      </div>
    </div>
  );
}

export default OrderCard;
