import React, { Dispatch, SetStateAction } from "react";
import Title from "../component-lib/Title";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import OrderDetail from "./OrderDetail";
import OrderSummary from "./OrderSummary";
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

function OrderTab({allDrink,setDrinkData}: Props) {
  return (
    <div className=" p-4 w-full flex flex-col gap-2">
      <Title title="Order Lists" />
      <Input type="customer-name" placeholder="Customer Name" />
      <Select defaultValue="place">
        <SelectTrigger className="w-[180px]">
          <SelectValue placeholder="Theme" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="delivery">Delivery</SelectItem>
          <SelectItem value="place">Place</SelectItem>
        </SelectContent>
      </Select>
      <hr />
      <Title title="Order Details" />
      <OrderDetail setDrinkData={setDrinkData} allDrink={allDrink} />
      <OrderSummary/>
    </div>
  );
}

export default OrderTab;
