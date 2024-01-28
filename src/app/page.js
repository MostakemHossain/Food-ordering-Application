import Hero from "@/components/layout/Hero";
import HomeMenu from "@/components/layout/HomeMenu";
import SectionHeaders from "@/components/layout/SectionHeaders";

export default function Home() {
  return (
    <>
    
      <Hero/>
      <HomeMenu/>
      <section className="text-center my-16">
        <SectionHeaders subHeader={'Our Story'} mainHeader={'About'}/>
        <div className="max-w-md flex flex-col gap-4 mx-auto mt-8 text-gray-500">
        <p >
        Welcome to Pizza Box, where passion for pizza meets exceptional taste! We take pride in crafting delicious pizzas that are not just a meal but a culinary experience. Our journey began with a simple yet profound goal - to create the perfect pizza that brings people together over shared moments of joy and flavor.
        </p>
        <p>
        Our experienced chefs bring artistry to every pizza they create. From hand-tossed dough to the artful arrangement of toppings, each pizza is a testament to our commitment to craftsmanship. We pay attention to the details because we know that a great pizza is more than just a dish – it's an expression of culinary excellence.
        </p>
        </div>
        

      </section>

      <section className="text-center my-8">
      <SectionHeaders subHeader={'Don\'t hesitate'} mainHeader={'Contact us'}/>
      <div className="mt-8">
        <a className="text-4xl underline text-gray-500" href="tel:+880-1849545637">
          +880-1849545637
        </a>

      </div>
      </section>

     
    </>
  )
}
