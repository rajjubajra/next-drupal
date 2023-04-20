import getUser from "@/lib/getUser"
import getUserPosts from "@/lib/getuserPost"
import { Suspense } from "react"
import UserPosts from "./components/UserPosts"
import Link from 'next/link';

type Params = {
  params: {
    userId: string
  }
}

export default async function UserPage({params: {userId}}: Params) {

  console.log("WHAT IS USER ID? : ",userId);
  const userData: Promise<User> = getUser(userId) 
  const userPostsData: Promise<Post[]> = getUserPosts(userId)

  //const [user, userPosts] = await Promise.all([userData, userPostsData])

  const user = await userData

  return (
    <div className="m-4">
      <Link href="/users" className="py-2 px-4 border mb-2 ">Back</Link>

      <h2 className="uppercase mt-6 mb-4">{user.name}</h2>
      <Suspense fallback={<h2>Loading...</h2>}>
      {/* @ts-expect-error Async Server Component */}
      <UserPosts promise={userPostsData} />
      </Suspense>
      
    </div>
  )
} 
