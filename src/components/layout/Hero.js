import Image from "next/image";
import Right from "../icons/Right";

export default function Hero() {
  return (
    <>
      <section className="md:flex justify-between mt-4">
        <div className="py-12">
          <h1 className="text-4xl font-semibold">Everything <br /> is better <br /> with <span className="text-primary">
          pizza.</span></h1>
          <p className="my-6 text-gray-500 text-sm">
            Pizza is the missing piece that makes every day complete, a simple yet delicious joy in life
          </p>
          <div className="flex gap-4 text-sm mt-4">
            <button className="bg-primary text-white px-4 py-2 rounded-full flex gap-2 items-center">Order now
              <Right/>
            </button>
            <button className="flex items-center gap-2 py-2 text-gray-600 font-bold">Learn more
              <Right/>
            </button>
          </div>
        </div>
        <div className="relative">
          
          <Image src="/pizza.png" width={600} height={600} objectFit="contain" alt="pizza" />
        </div>
      </section>
    </>
  );
}
