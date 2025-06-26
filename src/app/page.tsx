"use client";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet";
import { SignUp, SignIn } from "@clerk/nextjs";
import { useSearchParams } from "next/navigation";
const menuItems = [
  { title: "Home", path: "/" },
  { title: "About", path: "/about" },
  { title: "Contact", path: "/contact" },
];

export default function Home() {
  const [openSheet, setOpenSheet] = useState(false);
  const searchParams = useSearchParams();
  const formtype = searchParams.get("formtype");
  return (
    <>
      <div className="flex flex-col min-h-screen">
        <div className="flex items-center justify-between bg-gray-200 px-20 py-4">
          <h1 className="text-3xl font-extrabold text-primary">
            {" "}
            <b className="text-orange-600 text-4xl">P . </b>B
          </h1>
          <div className="flex justify-end items-center gap-5">
            {menuItems.map((item) => (
              <span
                className=" text-base text-gray-600 font-bold"
                key={item.title}
              >
                {item.title}
              </span>
            ))}
            <Button
              className="rounded-md   text-white hover:cursor-pointer  "
              variant={"default"}
              onClick={() => setOpenSheet(!openSheet)}
            >
              {" "}
              signup
            </Button>
          </div>
        </div>
        <div className=" grid grid-cols-2 mt-10 gap-10 h-[70vh] px-20">
          <div className="flex flex-col items-start justify-center ">
            <h1 className=" font-bold text-4xl text-primary">
              <b className=" text-orange-600 text-5xl font-extrabold">
                PORTFOLIO
              </b>
              -BUILDER
            </h1>
            <p className="text-gray-600 text-wrap">
              Shey-Portfolio-Builder is a platform that allows you to create
              your own portfolio in minutes. It is easy to use and has a lot of
              features. You can create your own portfolio in minutes. You can
              add your own projects, skills, and experience
            </p>
          </div>

          <div className="flex flex-col items-start justify-center ">
            <img
              src="https://img.freepik.com/free-vector/portfolio-concept-illustration_114360-126.jpg"
              alt="hero"
              className="flex justify-center items-center"
            />
          </div>
        </div>
        {openSheet && (
          <Sheet open={openSheet} onOpenChange={setOpenSheet}>
            <SheetContent className="min-w-[500px] flex justify-center items-center">
              <SheetHeader>
                <SheetTitle></SheetTitle>
              </SheetHeader>
              {formtype === "sign-in" ? (
                <SignIn routing="hash" signUpUrl="/?formtype=sign-up" fallbackRedirectUrl="/account" />
              ) : (
                <SignUp routing="hash" signInUrl="/?formtype=sign-in" fallbackRedirectUrl="/account"/>
              )}
            </SheetContent>
          </Sheet>
        )}
      </div>
    </>
  );
}
