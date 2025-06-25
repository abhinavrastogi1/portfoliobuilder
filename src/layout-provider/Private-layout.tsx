import React, { useEffect, useState } from "react";
import { PrivateLayoutHeader } from "./components/PrivateLayoutHeader";
import { Iuser } from "@/interfaces";
import axios from "axios";
const Privatelayout = ({ children }: { children: React.ReactNode }) => {
  const [user, setUser] = useState<Iuser | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  async function fetchUsers() {
    try {
      setLoading(true);
      const response=await axios.get("/api/get-user")
      setUser(response?.data?.data)
    } catch (error: any) {
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    fetchUsers();
  }, []);
  return (
    <>
      <PrivateLayoutHeader />
      {children}
    </>
  );    

};

export { Privatelayout };
