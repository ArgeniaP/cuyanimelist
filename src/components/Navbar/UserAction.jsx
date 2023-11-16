import { userAuthSession } from "@/libs/authLibs"
import Link from "next/link"

const UserAction = async () => {
  const user = await userAuthSession()

  const actionLabel = user ? "Sign Out" : "Sign In"
  const actionUrl = user ? "/api/auth/signout" : "/api/auth/signin"

  return (
    <div className="flex justify-between gap-2">
      {user ? <Link href="/users/dashboard" className="py-1">Dashbord</Link> : null}
      <Link href={actionUrl} className="bg-color-dark text-color-accent py-1 px-12 inline-block">{actionLabel}</Link>
    </div>
  )
}

export default UserAction
