import { UserButton } from "@clerk/nextjs";
import { currentUser } from "@clerk/nextjs/server";
import SignOutButton from "@/components/FucntionalComponent/SignOutButton";
import { getCurrentUser } from "@/actions/users";
import { Menu } from "lucide-react";
async function account() {
  return (
    <>
      <Menu />

      <SignOutButton />
    </>
  );
}
export default account;
