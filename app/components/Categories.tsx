"use client";
import { usePathname, useSearchParams, useRouter } from "next/navigation";

import {
  Footprints,
  Glasses,
  Briefcase,
  Shirt,
  ShoppingBasket,
  Hand,
  Venus,
} from "lucide-react";

const categories = [
  {
    name: "All",
    icon: <ShoppingBasket className="w-4 h-4" />,
    slug: "all",
  },
  {
    name: "T-shirts",
    icon: <Shirt className="w-4 h-4" />,
    slug: "t-shirts",
  },
  {
    name: "Shoes",
    icon: <Footprints className="w-4 h-4" />,
    slug: "shoes",
  },
  {
    name: "Accessories",
    icon: <Glasses className="w-4 h-4" />,
    slug: "accessories",
  },
  {
    name: "Bags",
    icon: <Briefcase className="w-4 h-4" />,
    slug: "bags",
  },
  {
    name: "Dresses",
    icon: <Venus className="w-4 h-4" />,
    slug: "dresses",
  },
  {
    name: "Jackets",
    icon: <Shirt className="w-4 h-4" />,
    slug: "jackets",
  },
  {
    name: "Gloves",
    icon: <Hand className="w-4 h-4" />,
    slug: "gloves",
  },
];
function Categories() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const params = new URLSearchParams(searchParams);
  const pathname = usePathname();
  const selected = searchParams.get("category");

  function handleClick(value: string) {
    params.set("category", value);
    router.push(`${pathname}?${params.toString()}`, { scroll: false });
  }

  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-8  gap-1 cursor-pointer bg-zinc-100 mb-5 rounded-lg p-2 text-sm">
      {categories.map((category) => (
        <div
          key={category.name}
          onClick={() => handleClick(category.slug)}
          className={`flex items-center justify-center gap-1 py-1 px-2 ${
            category.slug == selected ? "bg-white " : "text-gray-500 "
          } `}
        >
          {category.icon}
          {category.name}
        </div>
      ))}
    </div>
  );
}

export default Categories;
