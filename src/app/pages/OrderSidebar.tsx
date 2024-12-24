import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarHeader,
  SidebarMenu,
} from "@/components/ui/sidebar";
import React, { Dispatch, SetStateAction } from "react";
import OrderTab from "./OrderTab";

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
//   drink: drinkData;
};
function OrderSidebar({setDrinkData,allDrink}: Props) {
  return (
    <Sidebar side="right">
      <SidebarHeader />
      <SidebarContent />
      <SidebarGroup />
      <SidebarMenu>
      </SidebarMenu>
    </Sidebar>
  );
}

export default OrderSidebar;
