import React from "react";
import Title from "../component-lib/Title";
import { Button } from "@/components/ui/button";

type Props = {};

function OrderSummary({}: Props) {
  return <div className="flex gap-4 flex-col">
    <Title title="Order Summary"/>
    <div className="w-full bg-slate-200 h-full rounded-lg p-4 flex flex-col gap-3">
        <div className="flex justify-between text-[0.8rem]">
            <span className="text-slate-500">Sub Totals</span>
            <span className="font-bold">5</span>
        </div>
        <div className="flex justify-between text-[0.8rem]">
            <span className="text-slate-500">Discount</span>
            <span className="font-bold">5</span>
        </div>
        <Button color="" className="w-full bg-blue-500 text-white">Process Transaction</Button>
    </div>
  </div>;
}

export default OrderSummary;
