import { UserButton } from "@clerk/nextjs";
import { currentUser } from "@clerk/nextjs/server";
import SignOutButton from "@/components/FucntionalComponent/SignOutButton";
import { getCurrentUser } from "@/app/actions/users";
import { Menu } from "lucide-react";
async function account() {
  const {data}=await getCurrentUser()
  return (
    <>
    <Menu/>
    <h1>{data?.name}</h1>
    <h1>{data?.email}</h1>
    <h1>{data?.clerk_user_id}</h1>

      <SignOutButton />
    </>
  );
}
export default account;
