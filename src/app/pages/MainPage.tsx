import { Button } from "@/components/ui/button";
import React from "react";
import OrderList from "./OrderList";
import Link from "next/link";

type HeaderProps = {
  title: string;
};

export default function MainPage({}: HeaderProps) {
  return (
    <div className="p-5">
      <div className="flex justify-between items-center">
        <div className="font-bold">Order List</div>
          <Link href="/order" className="border p-2 px-4 rounded text-[0.8rem] bg-black text-white">More....</Link>
      </div>

      <OrderList />
    </div>
  );
}
