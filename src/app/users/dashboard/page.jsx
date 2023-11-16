import { userAuthSession } from "@/libs/authLibs"
import Image from "next/image"

const Page = async () => {
  const user = await userAuthSession()
  return (
    <div className="text-color-primary">
      <h3>DASHBORD</h3>
      <p>Welcome, {user.name}</p>
      <Image src={user.image} alt="..." width={250} height={250} />
    </div>
  )
}

export default Page
