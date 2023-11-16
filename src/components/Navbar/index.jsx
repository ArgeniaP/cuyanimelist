import Link from "next/link"
import Search from "@/components/Search"
import UserAction from "./UserAction"

const Navbar = () => {
  return (
    <header className="bg-color-accent">
      <div className="flex md:flex-row flex-col justify-between md:items-center p-4 gap-2">
        <Link href={'/'} className="font-bold text-2xl">CUYANIMELIST</Link>
        <Search />
        <UserAction />
      </div>
    </header>
  )
}

export default Navbar
