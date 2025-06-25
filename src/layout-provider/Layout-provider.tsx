"use client"
import React from "react";
import { Publiclayout } from "./Public-layout";
import { Privatelayout } from "./Private-layout";
import { usePathname } from "next/navigation";
const Layoutprovider = ({ children }: { children: React.ReactNode }) => {
  const pathName = usePathname();
  if (pathName.startsWith("/account")) {
    return <Privatelayout>{children}</Privatelayout>;
  }
  return <Publiclayout>{children}</Publiclayout>;
};
export { Layoutprovider };
