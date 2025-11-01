import Image from "next/image";
interface SectionProps {
  id: string;
}
export default function Head({ id }: SectionProps) {
  return (
    <>
      <div id={id} className="bg-[#F8F8F8] md:hidden scroll-mt-10">
        <div className=" relative h-[600px] pt-15 bg-black]">
          <div className="bg-[#699C47] pl-5 pt-5  w-full flex items-start h-65/100">
            <Image
              src="/assets/head-veg.png"
              alt="Head Image"
              width={150}
              height={100}
              className="absolute right-3 top-3"
            />
            <Image
              src="/assets/head2.png"
              alt="Head Image"
              width={200}
              height={100}
              className="absolute left-5 top-83"
            />
            <h1 className="w-4/10  font-bold text-[32px] text-white text-center">
              The Global Standard in Fresh Produce
            </h1>
          </div>
          <div className="mt-21 px-3 flex justify-around items-start">
            <h1 className="w-3/6 text-[14px] text-md text-[#777777] ">
              We deliver consistent supply and perfect ripeness, on time, every
              time.
            </h1>

            <a
              href="#contact"
              className="bg-[#699C47] py-4 px-6 text-sm mt-2 font-bold rounded-full text-white inline-block"
            >
              Book an Enquiry
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
