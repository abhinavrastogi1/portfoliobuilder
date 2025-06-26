"use client";
import SignOutButton from "@/components/FunctionalComponent/SignOutButton";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet";
import { Iuser } from "@/interfaces";
import userStore, { IuserStore } from "@/store/userStore";
import {
  Book,
  Home,
  LaptopMinimalCheck,
  Link,
  ListCheck,
  Menu,
  Presentation,
  User,
} from "lucide-react";
import { usePathname } from "next/navigation";
import { useRouter } from "next/navigation";
import { title } from "process";
import React, { useState } from "react";

const PrivateLayoutHeader = () => {
  const [opensideBar, setOpenSideBar] = useState<boolean>(false);
  const { user, setUser } = userStore() as IuserStore;
  const menuItems = [
    { title: "Home", path: "/account", icon: <Home size={14} /> },
    {
      title: "Profile",
      path: "/account/profile",
      icon: <User size={14} />,
    },
    {
      title: "Eductions",
      path: "/account/educations",
      icon: <Book size={14} />,
    },
    {
      title: "Skills",
      path: "/account/skills",
      icon: <LaptopMinimalCheck size={14} />,
    },
    {
      title: "Projects",
      path: "/account/projects",
      icon: <Presentation size={14} />,
    },
    {
      title: "Experiences",
      path: "/account/experiences",
      icon: <ListCheck size={14} />,
    },
  ];
  const router = useRouter();
  const pathname = usePathname();

  return (
    <>
      <div className="bg-primary flex justify-between p-5 px-28 items-center">
        <h1 className="text-4xl text-orange-600  font-bold">
          <b>P</b>.B
        </h1>
        <div className="flex gap-10 items-center">
          <span className="text-white text-lg ">{user?.name}</span>{" "}
          <Button
            onClick={() => {
              setOpenSideBar(!opensideBar);
            }}
          >
            <Menu className="text-white hover:cursor-pointer  " />
          </Button>
          {opensideBar && (
            <Sheet open={opensideBar} onOpenChange={setOpenSideBar}>
              <SheetContent className="min-w-[400px] ">
                <SheetHeader>
                  <SheetTitle></SheetTitle>
                </SheetHeader>
                <div className="flex flex-col gap-5 mt-10 p-2 ">
                  {menuItems.map((item) => (
                    <div
                      className={`flex gap-6 items-center p-4  hover:cursor-pointer
                    ${
                      pathname == item.path
                        ? "bg-gray-100 border-gray-400 rounded border-2"
                        : ""
                    }`}
                      key={item.title}
                      onClick={() => {
                        router.push(item.path);
                      }}
                    >
                      {item.icon}
                      <span className="text-sm"> {item.title}</span>
                    </div>
                  ))}
                  <SignOutButton />
                </div>
              </SheetContent>
            </Sheet>
          )}
        </div>{" "}
      </div>
    </>
  );
};

export { PrivateLayoutHeader };
