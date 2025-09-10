import Image from "next/image";
import Link from "next/link";
import { FaLocationArrow } from "react-icons/fa6";

import { MagicButton } from "@/components/ui/magic-button";
import { links } from "@/config";
import { socialMedia } from "@/data";

export const Footer = () => {
  return (
    <footer id="contact" className="mb-[100px] w-full pb-10 md:mb-auto">
      <div className="absolute -bottom-72 left-0 min-h-96 w-full">
        <Image
          src="/footer-grid.svg"
          alt="grid"
          className="h-full w-full opacity-50"
          width={1260}
          height={863}
          priority
          unoptimized
        />
      </div>

      <div className="flex flex-col items-center">
        <h1 className="heading lg:max-w-[45vw]">
          Sẵn sàng đưa <span className="text-purple">sự hiện diện số</span> của bạn lên một tầm cao mới?
        </h1>

        <p className="my-5 text-center text-white-200 md:mt-10">
          Hãy liên hệ với tôi ngay hôm nay để thảo luận về cách tôi có thể giúp bạn đạt được mục tiêu của mình.
        </p>

        <Link
          href={`mailto:${links.ownerEmail}`}
          target="_blank"
          rel="noreferrer noopener"
          className="md:mt-10"
        >
          <MagicButton
            title="Hãy liên hệ"
            icon={<FaLocationArrow />}
            position="right"
            asChild
          />
        </Link>
      </div>

      <div className="relative z-[999] mt-16 flex flex-col items-center justify-between md:flex-row">
        <p className="text-sm font-light md:text-base md:font-normal">
          Bản quyền &copy; {new Date().getFullYear()}{" "}
          <Link
            href="https://github.com/anhtruong1209"
            target="_blank"
            rel="noreferrer noopener"
            className="text-purple"
          >
            Nguyễn Đinh Anh Trường
          </Link>{" "}
        </p>

        <div className="flex items-center gap-6 md:gap-3">
          {socialMedia.map((profile) => (
            <Link
              key={profile.name}
              href={profile.link}
              target="_blank"
              rel="noreferrer noopener"
              className="saturate-180 flex size-10 items-center justify-center rounded-lg border border-black-300 bg-black-200 bg-opacity-75 backdrop-blur-lg backdrop-filter"
              title={profile.name}
            >
              <Image
                src={profile.img}
                alt={`profile-${profile.name}`}
                width={20}
                height={20}
              />
            </Link>
          ))}
        </div>
      </div>
    </footer>
  );
};
