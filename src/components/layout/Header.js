import Link from "next/link"

export default function Header ()  {
  return (
    <><header className="flex items-center justify-between">
    <Link className="text-primary font-semibold text-3xl" href="/">PIZZA BOX</Link>
    <nav className=" flex gap-8 items-center text-gray-500 font-bold">
      <Link href="/">Home</Link>
      <Link href="/">Menu</Link>
      <Link href="/">About</Link>
      <Link href="/">Contact</Link>
      <Link className="bg-primary rounded-xl text-white px-8 py-2 hover:bg-red-600  " href="/">Login</Link>

    </nav>
</header></>
  )
}

