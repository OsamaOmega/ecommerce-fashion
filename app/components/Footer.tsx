import Link from "next/link";
import Image from "next/image";
import React from "react";

function Footer() {
  return (
    <div className="flex flex-col items-center justify-between md:items-start gap-8 bg-gray-800 md:flex-row p-8 rounded-lg">
      <div className=" flex flex-col gap-4">
        <Link href="/" className="flex items-center ">
          <Image src="/logo.png" alt="logo" width={40} height={40} />
          <p className="font-medium tracking-wider text-amber-100">Omega</p>
        </Link>
        <p className="text-sm text-amber-50">© 2025 Omega Store </p>
        <p className="text-sm text-amber-50">All rights reserved </p>
      </div>

      <div className=" flex flex-col gap-4 text-sm text-amber-50">
        <p className=" text-amber-100">Links</p>
        <Link href="/">Homepage</Link>
        <Link href="/">Contact</Link>
        <Link href="/">Terms of Service</Link>
        <Link href="/">Privacy Policy</Link>
      </div>

      <div className=" flex flex-col gap-4 text-sm text-amber-50">
        <p className=" text-amber-100">Links</p>
        <Link href="/">All Products</Link>
        <Link href="/">New Arrivals</Link>
        <Link href="/">Best Sellers</Link>
        <Link href="/">Sale</Link>
      </div>

      <div className=" flex flex-col gap-4 text-sm text-amber-50">
        <p className=" text-amber-100">Links</p>
        <Link href="/">About</Link>
        <Link href="/">Contact</Link>
        <Link href="/">Blog</Link>
        <Link href="/">Affiliate </Link>
      </div>
    </div>
  );
}

export default Footer;
