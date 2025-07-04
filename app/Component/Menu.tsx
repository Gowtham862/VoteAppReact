import Link from "next/link";
import { HiHome } from "react-icons/hi";
import React from "react";
import Image from "next/image";

const menuitems = [
  {
    tittle: "MENU",
    items: [
      {
        icon: "/house-key.png",
        label: "home",
        href: "/",
      },
      {
        icon: "/account.png",
        label: "user",
        href: "/",
      },
      {
        icon: "/account.png",
        label: "Voter",
        href: "/",
      },
      {
        icon: "/account.png",
        label: "Total",
        href: "/",
      },
      {
        icon: "/account.png",
        label: "users",
        href: "/",
      },
    ],
  },
  {
    tittle: "OTHERS",
    items: [
      {
        icon: "/account.png",
        label: "Profile",
        href: "/profile",
      },
      {
        icon: "/account.png",
        label: "Setting",
        href: "/profile",
      },
      {
        icon: "/account.png",
        label: "Logout",
        href: "/profile",
      },
    ],
  },
];
export default function menu() {
  return (
    <div className="mt-4 text-sm ">
      {menuitems.map((menu) => (
        <div className="flex  flex-col gap-2" key={menu.tittle}>
          <span className="hidden lg:block font-light">{menu.tittle}</span>
          {menu.items.map((item) => (
            <Link
              className="text-decoration-none flex text-white  items-center  gap-4 py-2 "
              href={item.href}
              key={item.label}
            >
              {/* <Image src={item.icon} alt={item.label} width={20} height={20}/> */}
              {item.icon && (
                <Image
                  className=""
                  src={item.icon}
                  alt={item.label}
                  width={20}
                  height={20}
                />
              )}
              <span className="hidden lg:block">{item.label}</span>
            </Link>
          ))}
        </div>
      ))}
    </div>
  );
}
