
"use client"
import { Button } from "@/components/ui/button";
import { useAuth } from "@clerk/nextjs";
import { useRouter } from "next/navigation";
import {useState } from "react"
function SignOutButton(){
  const {signOut}=useAuth()
  const [loading,setLoading]=useState(false)
  const router=useRouter()
 async function handleSignOut(){
try {
    setLoading(true)
     await signOut()
      router.push("/")
} catch (error) {
    console.error(error)
}
finally{
    setLoading(false)
}}

return(<>
<Button  className="text-white"  disabled={loading}  onClick={handleSignOut}> SignOut </Button>
</>)
}

export default SignOutButton