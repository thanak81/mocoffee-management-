import React, { Dispatch, SetStateAction } from "react";
import OrderCard from "../lib/OrderCard";
import Title from "../component-lib/Title";

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
function OrderDetail({ allDrink, setDrinkData }: Props) {
  return (
    <div className="flex flex-col gap-4 h-[250px] overflow-y-scroll no-scrollbar">
      {/* <Title title="Order Details"/> */}
      {allDrink.map((drink) => {
        return (
          <div key={drink.drink_id} className="flex flex-col gap-4">
            <OrderCard
              drink={drink}
              allDrink={allDrink}
              setDrinkData={setDrinkData}
              key={drink.drink_id}
            />
            <hr />
          </div>
        );
      })}
    </div>
  );
}

export default OrderDetail;
