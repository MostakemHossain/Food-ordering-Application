import Image from "next/image";
import MenuItem from "../menu/menuItem";
import SectionHeaders from "./SectionHeaders";


export default function HomeMenu(){
    return (
        <section className="">
               <div className="absolute left-0 right-0 w-full justify-start">
        <div className="absolute left-0 -top-[70px] text-left -z-10">
          <Image src={'/sallad1.png'} width={109} height={189}  alt={'sallad'} />
        </div>
        <div className="absolute -top-[100px] right-0 -z-10">
          <Image src={'/sallad2.png'} width={107} height={195} alt={'sallad'} />
        </div>
      </div>

      <div className="text-center">
       <SectionHeaders subHeader={'checkout'} mainHeader={'menu'}/>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
      <MenuItem/>
      <MenuItem/>
      <MenuItem/>
      <MenuItem/>
      <MenuItem/>
      <MenuItem/>

      </div>

        </section>
    )
}