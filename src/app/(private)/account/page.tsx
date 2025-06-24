import { UserButton } from "@clerk/nextjs"
import { currentUser } from "@clerk/nextjs/server"
import SignOutButton from "../../../components/FucntionalComponent/SignOutButton.tsx"
 async function account(){
    const userInfo=await currentUser()
   return (<>

   <SignOutButton />
   </>)
}
export default account