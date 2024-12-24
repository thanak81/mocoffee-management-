import React, { Dispatch, SetStateAction } from "react";

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

function OrderCounter({ drink, allDrink, setDrinkData }: Props) {
  function decreaseCounter(drinkId: number) {
    console.log(allDrink);
    // if (counter <= 1) return;
    const updateOrder = allDrink.map((drink) => {
      if (drink.drink_id !== drinkId) {
        return drink;
      } else {
        if (drink.drink_order <= 0) {
          return drink;
        }
        return {
          ...drink,
          drink_order: drink.drink_order - 1,
        };
      }
    });
    console.log(updateOrder);
    setDrinkData(updateOrder);
  }
  function addCounter(drinkId: number) {
    const updateOrder = allDrink.map((drink) => {
      if (drink.drink_id !== drinkId) {
        return drink;
      } else {
        return {
          ...drink,
          drink_order: drink.drink_order + 1,
        };
      }
    });
    console.log(updateOrder);

    setDrinkData(updateOrder);
  }
  return (
    <div className="flex items-center">
      <span
        onClick={() => decreaseCounter(drink.drink_id)}
        className="cursor-pointer rounded-full flex items-center justify-center  bg-gray-200 h-[30px] w-[30px] text-center align-middle"
      >
        -
      </span>
      <span className="font-bold text-[0.8rem] text-center w-[1.5rem]">
        {drink.drink_order}
      </span>
      <span
        onClick={() => addCounter(drink.drink_id)}
        className="cursor-pointer rounded-full flex items-center justify-center text-white bg-blue-500 h-[30px] w-[30px] text-center align-middle"
      >
        +
      </span>
    </div>
  );
}

export default OrderCounter;
