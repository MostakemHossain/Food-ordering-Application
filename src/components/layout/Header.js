import Link from "next/link"

export default function Header ()  {
  return (
    <><header className="flex items-center justify-between">
    
    <nav className=" flex gap-8 items-center text-gray-500 font-bold">
    <Link className="text-primary font-semibold text-3xl" href="/">PIZZA BOX</Link>
      <Link href="/">Home</Link>
      <Link href="/">Menu</Link>
      <Link href="/">About</Link>
      <Link href="/">Contact</Link>
      

    </nav>
    <nav className="flex items-center gap-4 text-gray-500 font-semibold">

    <Link href={'/login'}>Login</Link>
    <Link className="bg-primary rounded-xl text-white px-8 py-2 hover:bg-red-600  " href={'/register'}>Register</Link>
    </nav>

</header></>
  )
}

