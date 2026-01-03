"use client";
import { useState } from "react";
import { ProductType } from "../types";
import Link from "next/link";
import Image from "next/image";
import { ShoppingBagIcon, ShoppingCart, ShoppingCartIcon } from "lucide-react";

function ProductCard({ product }: { product: ProductType }) {
  const [ProductType, setProductType] = useState({
    size: product.sizes[0],
    color: product.colors[0],
  });

  function handleChange({
    type,
    value,
  }: {
    type: "size" | "color";
    value: string;
  }) {
    setProductType((prev) => ({
      ...prev,
      [type]: value,
    }));
    console.log(ProductType);
  }

  {
    /* function handleChange(value: string){
      setProductType({...ProductType,size:value })
      console.log("from Size",ProductType)
    }
    function handleChangeColor(value:string){
      setProductType({...ProductType,color:value})
      console.log("from Color",ProductType)
    } 
   */
  }

  return (
    <div className=" rounded-lg shadow-sm overflow-hidden m-1">
      <Link href={`/products/${product.id}`}>
        {/* Image of Product*/}
        <div className="relative aspect-8/9 md:aspect-3/4 sm:7/8">
          <Image
            src={product.images[ProductType.color]}
            alt={product.name}
            fill
            sizes="auto"
            className="object-cover hover:scale-105 transition-all duration-300 "
          />
        </div>
      </Link>
      {/* details of Product*/}
      <div className="flex flex-col gap-4 p-2">
        <h1 className="font-medium text-gray-600">{product.name}</h1>
        <p className="text-sm text-gray-400 ">{product.shortDescription}</p>

        <div className="flex justify-items-center gap-6 text-sm ">
          {/* sizes of Product*/}
          <div className="flex flex-col gap-1">
            <span>Sizes</span>
            <select
              name="size"
              className="ring ring-gray-300 rounded-md px-2 py-1"
              onChange={(e) =>
                handleChange({ type: "size", value: e.target.value })
              }
            >
              {product.sizes.map((size) => (
                <option key={size} value={size}>
                  {size.toUpperCase()}
                </option>
              ))}
            </select>
          </div>
          {/* colors of Product*/}
          <div className="flex flex-col gap-1">
            <span>Color</span>
            <div className="flex items-center gap-2">
              {product.colors.map((color) => (
                <div
                  key={color}
                  className={`cursor-pointer border-[1.5] ${
                    ProductType.color === color
                      ? "border-gray-400"
                      : "border-gray-200"
                  } rounded-full p-[2.5]`} 
                >
                  <div
                    className="w-[25] h-[25] rounded-full  "
                    style={{ backgroundColor: color }}
                    onClick={() =>
                      handleChange({ type: "color", value: color })
                    }
                  ></div>
                </div>
              ))}
            </div>
          </div>
        </div>
        {/* price of Product*/}
        <div className="flex justify-between items-center">
          <span>${product.price.toFixed(2)}</span>
          <button className="flex gap-1 ring-1 ring-gray-200 shadow-md rounded-md px-2 py-1 text-sm cursor-pointer hover:text-white hover:bg-black ">
            <ShoppingCart className="w-4 h-4 " />
            add to cart
          </button>
        </div>
      </div>
    </div>
  );
}

export default ProductCard;
