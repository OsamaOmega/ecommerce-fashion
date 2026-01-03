import Image from "next/image";
import ProductList from "./components/ProductList";

export default async function Home({
  searchParams,
}: {
  searchParams: Promise<{ category: string }>;
}) {
  const category = (await searchParams).category;
  return (
    <div className=" ">
      <div className="relative aspect-3/1 mb-10">
        <Image src="/featured.png" loading="lazy" alt="image" fill />
      </div>
      <ProductList category={category} filterType="home" />
    </div>
  );
}
