import { currentUser } from "@clerk/nextjs/server"

 async function account(){
    const userInfo=await  currentUser()
    console.log(userInfo)
   return (<>
   <div>account</div>
   </>)
}
export default account