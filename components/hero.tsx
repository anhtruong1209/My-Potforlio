import Link from "next/link";
import { FaLocationArrow } from "react-icons/fa6";

import { Spotlight } from "@/components/ui/spotlight";
import { TextGenerateEffect } from "@/components/ui/text-generate-effect";
import { MagicButton } from "@/components/ui/magic-button";
import { links } from "@/config";

export const Hero = () => {
  return (
    <div className="pb-20 pt-36">
      <div>
        <Spotlight
          className="-left-10 -top-40 h-screen md:-left-32 md:-top-20"
          fill="white"
        />
        <Spotlight
          className="left-full top-10 h-[80vh] w-[50vw]"
          fill="purple"
        />
        <Spotlight className="left-80 top-28 h-[80vh] w-[50vw]" fill="blue" />
      </div>

      <div className="absolute left-0 top-0 flex h-screen w-full items-center justify-center bg-white bg-grid-black/[0.2] dark:bg-black-100 dark:bg-grid-white/[0.03]">
        <div className="pointer-events-none absolute inset-0 flex items-center justify-center bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)] dark:bg-black-100" />
      </div>

      <div className="relative z-10 my-20 flex justify-center">
        <div className="flex max-w-[98vw] flex-col items-center justify-center md:max-w-5xl lg:max-w-[80vw]">
          <h2 className="max-w-80 text-center text-xs uppercase tracking-widest text-blue-100">
            Chuyên viên Phát triển Phần mềm với 4 năm kinh nghiệm
          </h2>

          <TextGenerateEffect
            className="text-center text-[40px] md:text-5xl lg:text-6xl"
            words="Thành công lớn nhất là biết cách đứng dậy sau những lần vấp ngã"
          />

          <p className="mb-4 text-center text-sm md:text-lg md:tracking-wider lg:text-2xl">
            Xin chào, tôi {links.ownerName}, hiện là chuyên viên tại Công ty TNHH MTV Thông tin Điện tử Hàng hải Việt Nam.
          </p>

          <div className="mt-6 grid w-full grid-cols-1 gap-4 md:grid-cols-1">
            <img src="/b0.png" alt="showcase-1" className="h-[50rem] w-full rounded-2xl object-cover opacity-90" />
            {/* <img src="/b1.png" alt="showcase-2" className="h-50 w-full rounded-2xl opacity-90" /> */}
          </div>

          <Link href="#about" className="md:mt-10">
            <MagicButton
              title="Xem công việc của tôi"
              icon={<FaLocationArrow />}
              position="right"
              asChild
            />
          </Link>
        </div>
      </div>
    </div>
  );
};
