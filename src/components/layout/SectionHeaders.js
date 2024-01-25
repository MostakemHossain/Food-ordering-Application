export default function SectionHeaders({ subHeader, mainHeader }) {
  return (
    <>
      <h3 className="uppercase leading-4 text-gray-500 font-semibold">
        {subHeader}
      </h3>
      <h2 className="text-primary font-bold text-4xl italic mb-10">
        {mainHeader}
      </h2>
    </>
  );
}
