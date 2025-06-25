'use client'
import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";
import React from "react";

const PrivateLayoutHeader = () => {
  return (
    <>
      <div className="bg-primary flex justify-between p-5 px-28 items-center">
        <h1 className="text-4xl text-orange-600  font-bold">
          <b>P</b>.B
        </h1>
        <div className="flex gap-10 items-center">
          <span className="text-white text-lg ">user name</span>
            {" "}
            <Menu size={24} className="text-white hover:cursor-pointer" />
        </div>{" "}
      </div>
    </>
  );
};

export { PrivateLayoutHeader };
