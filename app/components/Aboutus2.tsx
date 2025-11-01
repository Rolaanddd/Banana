import Image from "next/image";
interface SectionProps {
  id: string;
}
export default function Aboutus2({ id }: SectionProps) {
  return (
    <div
      id={id}
      className="grid h-[850px] md:hidden overflow-hidden scroll-mt-10 grid-cols-100 grid-rows-95 w-full px-3 py-4 bg-[#f8f8f8]"
    >
      <h1 className="col-span-100 row-span-2 row-start-1 text-[#699C47] text-[18px] font-semibold">
        About us
      </h1>
      <h1 className="col-span-100 text-black row-span-12 row-start-4 font-black text-[32px]">
        We believe in pure and consistent quality
      </h1>
      <div className="col-span-50  flex relative items-center justify-center row-span-10 font-light italic rounded-tl-3xl text-white text-[12px] bg-[#699C47] px-4">
        <Image
          src="/assets/Vector.png"
          alt="About Us Image"
          width={27.92}
          height={19.92}
          className="absolute top-4 left-2 z-0"
        />
        6
        <p className="w-fit z-10 h-fit">
          &quot;Organic foods are very helpful to our human body&quot;
        </p>
      </div>
      <p className="col-span-50 mt-2 row-span-33 col-start-1 text-[14px] text-[#777777] leading-8">
        At SVP Banana Distributor, we&apos;ve built our reputation on an
        unwavering commitment to excellence. We understand that in the produce
        industry, consistency is king, and freshness is paramount.
      </p>
      <div className="col-span-46 ml-3 relative row-start-22 row-span-36 col-start-51">
        <video
          src="/assets/about-video.mp4"
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-70 rounded-lg"
        />
        <div className="w-[60px] h-[60px] absolute bottom-2 left-10 bg-[#699C47]"></div>
      </div>
      <Image
        src="/assets/aboutus.png"
        alt="About Us Image"
        width={500}
        height={300}
        className="hidden md:block"
      />
      <div className="col-span-100 row-start-63">
        <div className="flex items-center gap-3">
          <Image
            src="/assets/about-icon.png"
            alt="About Us Image"
            width={39}
            height={41}
          />
          <p className="text-[16px] text-black font-bold">
            100% Guaranteed Freshness
          </p>
        </div>
        <p className="text-[#777777] text-[14px] mt-3 leading-8">
          Our extensive network and meticulous processes guarantee that every
          banana we deliver is of premium quality, perfectly handled, and ready
          for your customers. We ensure freshness, every single time.
        </p>
      </div>

      <div className="col-span-100 row-start-87 flex justify-center row-span-7 items-center mt-2">
        <a
          href="#why"
          className="bg-[#699C47] py-4 px-8 text-white rounded-4xl"
        >
          Learn More
        </a>
      </div>
    </div>
  );
}
