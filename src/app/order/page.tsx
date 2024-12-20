import React from "react";
import OrderList from "../pages/OrderList";
import Title from "../component-lib/Title";

type Props = {};

function OrderPage({}: Props) {
  return (
    <section className="">
    <Title title="Order Lists"/>
    <OrderList />
    </section>
  );
}

export default OrderPage;
