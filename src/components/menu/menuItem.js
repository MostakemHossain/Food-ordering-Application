import Image from "next/image";

export default function MenuItem() {
  return (
    <div className="card card-compact w-full h-full bg-base-100 shadow-2xl hover:bg-gray-300 rounded-2xl">
      <figure>
        <Image src="/pizza.png" alt="pizza" width={160} height={160} className="w-40 h-full object-cover" />
      </figure>
      <div className="card-body">
        <h2 className="font-bold text-3xl text-center">Pepperoni Pizza</h2>
        <p className="text-gray-600 text-center">Pizza is the key to my heart and my happiness.</p>
        <div className="card-actions justify-center">
          <button className="btn bg-primary text-white hover:bg-orange-700">Add to Cart $12</button>
        </div>
      </div>
    </div>
  );
}
