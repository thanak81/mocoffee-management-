"use client";
import React from "react";
import HomeIcon from "../icons/HomeIcon";
import OrderIcon from "../icons/OrderIcon";
import { HistoryIcon } from "lucide-react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import clsx from "clsx";
import ProfileIcon from "../icons/ProfileIcon";
import BellIcon from "../icons/BellIcon";
import MenuIcon from "../icons/MenuIcon";

type Props = {};

function NavBar({}: Props) {
  const pathName = usePathname();
  console.log("mypath", typeof pathName);
  return (
    <div className="px-5 bg-white-500 flex items-center w-full ">
      <div className="text-2xl font-bold">Logo</div>
      <div className="flex gap-4 p-5 justify-center  w-full ">
        <Link
          href="/"
          className={`flex items-center gap-2 hover:text-blue-600 ${
            pathName == "/" ? "text-green-500 font-bold" : ""
          } : `}
        >
          {" "}
          <HomeIcon />
          <div className="text-[0.8rem]">Home</div>
        </Link>
        <Link
          href="/menu"
          className={`flex items-center gap-2 hover:text-blue-600 ${
            pathName == "/menu" ? "text-green-500 font-bold" : ""
          } : `}
        >
          <MenuIcon />
          <div className="text-[0.8rem]">Menu</div>
        </Link>
        <Link
          href="/order"
          className={`flex items-center gap-2 hover:text-blue-600 ${
            pathName == "/order" ? "text-green-500 font-bold" : ""
          } : `}
        >
          {" "}
          <OrderIcon />
          <div className="text-[0.8rem]">Order List</div>
        </Link>
        <Link
          href="/history"
          className={`flex items-center gap-2 hover:text-blue-600 ${
            pathName == "/history" ? "text-green-500 font-bold" : ""
          } : `}
        >
          <HistoryIcon />
          <div className="text-[0.8rem]">History</div>
        </Link>
      </div>
      <div className="flex gap-4 items-center">
        <Link href="/notification">
          <BellIcon />
        </Link>
        <Link href="/profile">
          <ProfileIcon />
        </Link>
      </div>
    </div>
  );
}

export default NavBar;
