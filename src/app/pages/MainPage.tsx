import { Button } from "@/components/ui/button";
import React from "react";
import OrderList from "./OrderList";
import Link from "next/link";
import Title from "../component-lib/Title";

type HeaderProps = {
  title: string;
};

export default function MainPage({}: HeaderProps) {
  return (
    <div className="">
      <div className="flex justify-between items-center">
        <Title title="Order Lists"/>
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
    </div>
  );
}
