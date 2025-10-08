import Link from "next/link";
import { HiHome } from "react-icons/hi";
import React from "react";
import Image from "next/image";
import './Menu.css'

const menuitems = [
  {
    tittle: "MENU",
    items: [
      {
        icon: "/h.jpg",
        label: "Home",
        href: "/Dashboardfinal/Admind",
      },
      {
        icon: "/user.png",
        label: "User",
        href: "/Dashboardfinal/Parent",
      },
      {
        icon: "/account.png",
        label: "Partydetails",
        href: "/Dashboardfinal/Votedetails",
      },
      {
        icon: "/account.png",
        label: "Vote details",
        href: "/Dashboardfinal/Partydetails",
      },
      {
        icon: "/events.png",
        label: "Events",
        href: "",
      },
       {
        icon: "/a.png",
        label: "Announcements",
        href: "",
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
        icon: "/settings.png",
        label: "Setting",
        href: "/Homeai",
      },
      {
        icon: "/logout.png",
        label: "Logout",
        href: "/Admin",
      },
      
      
    ],
  },
];
export default function menu() {
  return (
    <div className=" text-sm ">
      
      {menuitems.map((menu) => (
        <div className=" list-top" key={menu.tittle}>
          <span className=" menuother font-light">{menu.tittle}</span>
          {menu.items.map((item) => (
            <Link
              className="text-decoration-none flex  hoverback  items-center  gap-4 py-2 px-3 rounded-md  "
              href={item.href}
              key={item.label}
            >
              {/* <Image src={item.icon} alt={item.label} width={20} height={20}/> */}
              {item.icon && (
                <Image
                
                  className="rounded icon"
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
