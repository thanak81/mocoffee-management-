
import React from "react";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import { Button } from "@/components/ui/button";
import DetailIcon from "../icons/DetailIcon";
import PrintIcon from "../icons/PrintIcon";
type Props = {};
type orderType = {
  order_id: number;
  order_name: string;
  order_price: number;
  order_date: Date;
  order_quantity: number;
  order_sugarPercentage: string;
  order_description: string;
  order_status: string;
};

function OrderList({}: Props) {
  const orderListData: Array<orderType> = [
    {
      order_id: 1,
      order_name: "Ice Latte",
      order_price: 1.25,
      order_date: new Date(),
      order_quantity: 5,
      order_sugarPercentage: "50",
      order_description: "to hrd",
      order_status: "Ready",
    },
    {
      order_id: 2,
      order_name: "Ice Latte",
      order_price: 1.25,
      order_date: new Date(),
      order_quantity: 5,
      order_sugarPercentage: "50",
      order_description: "to hrd",
      order_status: "In Progress",
    },
    {
      order_id: 3,
      order_name: "Ice Latte",
      order_price: 1.25,
      order_date: new Date(),
      order_quantity: 5,
      order_sugarPercentage: "50",
      order_description: "to hrd",
      order_status: "Canceled",
    },
    {
      order_id: 4,
      order_name: "Ice Latte",
      order_price: 1.25,
      order_date: new Date(),
      order_quantity: 5,
      order_sugarPercentage: "50",
      order_description: "to hrd",
      order_status: "Canceled",
    },
    {
      order_id: 5,
      order_name: "Ice Latte",
      order_price: 1.25,
      order_date: new Date(),
      order_quantity: 5,
      order_sugarPercentage: "50",
      order_description: "to hrd",
      order_status: "Canceled",
    },
  ];
  function orderPriceFinal(qty: number, price: number): number{
    return qty * price
  }
  function orderInKhCurrency(qty:number, price: number): number{
    return (qty*price)*4000
  }
  return (
    <main>
      <section className="my-5">
        <div className="flex gap-4 flex-wrap">
          {orderListData.map((order) => (
            <div
              key={order.order_id}
              className="border-2 p-2 shadow-lg flex flex-col gap-4 h-[120px] w-[350px] rounded-md justify-between"
            >
              <div>
                <div className="flex justify-between">
                  <div className="font-semibold">{order.order_name}</div>
                  <div className="text-gray-400">
                    Qty:{" "}
                    <span className="font-bold">{order.order_quantity}</span>
                  </div>
                </div>
                <div className="text-[0.8rem] text-gray-500">
                  Price: ${order.order_price}
                </div>
              </div>

              <div className="text-[0.8rem] font-bold flex justify-between items-center">
                {order.order_status === "Ready" ? (
                  <div className="inline-block text-white bg-green-500 px-2 py-1 rounded-lg">
                    Ready
                  </div>
                ) : order.order_status === "In Progress" ? (
                  <div className="inline-block text-white bg-yellow-500 px-2 py-1 rounded-lg">
                    In Progress
                  </div>
                ) : (
                  <div className="text-white bg-red-500 inline-block px-2 py-1 rounded-lg">
                    Canceled
                  </div>
                )}
                <div>
                  <Drawer>
                    <DrawerTrigger className="cursor-pointer">
                      <DetailIcon />
                    </DrawerTrigger>
                    <DrawerContent className="py-2 pb-8">
                      <div className="mx-auto w-full max-w-lg border-2 rounded bg-slate-100 flex flex-col">
                        {" "}
                        <DrawerHeader>
                          <div className="flex items-center justify-between">
                            <div className="flex gap-2 flex-col">
                              <DrawerTitle>Order Details</DrawerTitle>
                              <DrawerDescription>
                                Order Number : {order.order_id}
                              </DrawerDescription>
                            </div>
                            <DrawerDescription>
                              {order.order_status === "Ready" ? (
                                <div className="inline-block text-white bg-green-500 px-2 py-1 rounded-lg">
                                  Ready
                                </div>
                              ) : order.order_status === "In Progress" ? (
                                <div className="inline-block text-white bg-yellow-500 px-2 py-1 rounded-lg">
                                  In Progress
                                </div>
                              ) : (
                                <div className="text-white bg-red-500 inline-block px-2 py-1 rounded-lg">
                                  Canceled
                                </div>
                              )}
                            </DrawerDescription>
                          </div>
                        </DrawerHeader>
                        <div className="p-4 pb-0">
                          <div className="flex justify-between">
                            <div className="mt-3">
                              <div className="font-bold">Order Name</div>
                              <div>{order.order_name}</div>
                            </div>
                            <div className="mt-3 self-end text-right">
                              <div className="font-bold">
                                Sugar Percentage{" "}
                              </div>
                              <div>{order.order_sugarPercentage}% - Normal</div>
                            </div>
                          </div>

                          <div className="mt-3">
                            <div className="font-bold">Order Quantity</div>
                            <div>{order.order_quantity}</div>
                          </div>
                          <div className="mt-3">
                            <div className="font-bold">Price per X</div>
                            <div>${order.order_price}</div>
                          </div>
                          <div className="mt-3">
                            <div className="font-bold">Order Date</div>
                            <div>{order.order_date.toISOString()}</div>
                          </div>
                          <div className="mt-3">
                            <div className="font-bold">Description</div>
                            <div>{order.order_description}</div>
                          </div>
                          <div className="mt-3 text-center border-y-2 py-2">
                            <div className="font-bold">Total Price</div>
                            <div>
                            <div>${orderPriceFinal(order.order_quantity,order.order_price)}</div>
                              <div>{orderInKhCurrency(order.order_quantity,order.order_price)} Riels</div>
                            </div>
                          </div>
                        </div>
                        <DrawerFooter>
                          <Button>
                            <PrintIcon />
                            <span>Print Order</span>
                          </Button>
                          <DrawerClose asChild>
                            <Button variant="outline">Cancel</Button>
                          </DrawerClose>
                        </DrawerFooter>
                      </div>
                    </DrawerContent>
                  </Drawer>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}

export default OrderList;
