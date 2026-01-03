'use client'
import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import React from 'react'

function Filter() {
    const router = useRouter();
    const searchParams = useSearchParams();
    const params = new URLSearchParams(searchParams);
    const pathname = usePathname();
   
    const handleSort = (value :string )=>{
    params.set("sort", value );
    router.push(`${pathname}?${params.toString()}`,{scroll:false});
}
  return (
    <div className='flex justify-end item-center text-sm text-gray-500 gap-1 p-2 my-2'>
        <span>Filter By</span>
        <select name="sort" className='ring ring-gray-300 rounded-sm shadow-sm ' onChange={(e)=>handleSort(e.target.value)}>
            <option value="new">Newest</option>
            <option value="old">Oldest</option>
            <option value="des">From Low To High</option>
            <option value="asc">From High To Low</option>
            
        </select>
    </div>
  )
}

export default Filter