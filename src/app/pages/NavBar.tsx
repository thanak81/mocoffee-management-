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

type Props = {};

function NavBar({}: Props) {
  const pathName = usePathname();
  console.log("mypath", typeof pathName);
  return (
    <div className="px-5 bg-white-500 flex items-center w-full border-y-2">
      <div className="text-2xl font-bold">Logo</div>
      <div className="flex gap-4 p-5 justify-center  w-full ">
        <Link
          href="/"
          className={`flex gap-2 hover:text-blue-600 ${
            pathName == "/" ? "text-green-500 font-bold" : ""
          } : `}
        >
          {" "}
          <HomeIcon />
          <Link href="/"> Home</Link>
        </Link>
        <Link href="/order" className="flex gap-2 hover:text-blue-600">
          {" "}
          <OrderIcon />
          <Link href="order"> Order List</Link>
        </Link>
        <Link href="/history" className="flex gap-2 hover:text-blue-600">
          <HistoryIcon />
          History
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
