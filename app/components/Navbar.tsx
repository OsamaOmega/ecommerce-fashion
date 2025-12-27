import { Bell, Home, Search, ShoppingCart } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
function Navbar() {
  return (
    <header className="flex justify-between py-3 border-b border-gray-200">
      <Link href="/" className="flex items-center px-2">
        <Image src="/logo.png" alt="logo" width={45} height={45} />
        <p className="font-medium text-gray-600 tracking-wider">Omega</p>
      </Link>
      <div className="flex items-center gap-4 cursor-pointer text-gray-600">
        <div className="flex items-center gap-2 ring-1 ring-gray-300 rounded-sm shadow-md ">
          <Search className="h-4 w-4 text-gray-300 " />
          <input
            id="search"
            placeholder="Search.."
            className="outline-none text-sm"
          />
        </div>
        <Link href="/">
          <Home />
        </Link>

        <Bell />
        <ShoppingCart />
        <Link href="/login">Sign in</Link>
      </div>
    </header>
  );
}

export default Navbar;
