import Image from "next/image";
interface SectionProps {
  id: string;
}
export default function Organic({ id }: SectionProps) {
  return (
    <div
      id={id}
      className="relative flex flex-col  justify-center items-center py-10 md:py-22 w-full bg-white overflow-hidden"
    >
      <Image
        src="/assets/organic.png"
        alt="Organic Image"
        width={300}
        height={200}
        className="w-[300px] md:w-[350px] lg:w-[450px] "
      />

      <h5 className="absolute left-3/7 md:left-49/100 mt-8 text-black text-lg">
        and pure product
      </h5>
    </div>
  );
}
