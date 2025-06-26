import React, { useEffect, useState } from "react";
import { PrivateLayoutHeader } from "./components/PrivateLayoutHeader";
import { Iuser } from "@/interfaces";
import axios from "axios";
import { Spinner } from "@/components/ui/spinner";
import toast from "react-hot-toast";
import userStore, { IuserStore } from "@/store/userStore";
const Privatelayout = ({ children }: { children: React.ReactNode }) => {
  const { user, setUser } = userStore() as IuserStore;

  const [loading, setLoading] = useState<boolean>(false);
  async function fetchUsers() {
    try {
      setLoading(true);
      const response = await axios.get("/api/get-user");
      if (response?.data?.success) {
        setUser(response?.data?.data);
      } else {
        throw new Error("Error while fetching user data");
      }
    } catch (error: any) {
      toast.error(error.message);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    fetchUsers();
  }, []);

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <Spinner />
      </div>
    );
  }

  return (
    <>
      <PrivateLayoutHeader  />
      <div className="p-5">{children}</div>
    </>
  );
};

export { Privatelayout };
