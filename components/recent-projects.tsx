import Image from "next/image";

import { projects } from "@/data";

import { PinContainer } from "./ui/3d-pin";

export const RecentProjects = () => {
  return (
    <section id="projects" className="py-20">
      <h1 className="heading">
        Một số dự án{" "}
        <span className="text-purple"> gần đây</span>
      </h1>

      <div className="mt-10 grid grid-cols-1 gap-10 px-4 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map(
          ({ id, des, iconLists, img, link, sourceCode, title }) => (
            <div
              key={id}
              className="flex h-[33rem] w-full items-center justify-center sm:h-[36rem] lg:h-[34rem]"
            >
              <PinContainer title="Visit" href={link}>
                <div className="relative mb-6 flex h-[21rem] w-full items-center justify-center overflow-hidden sm:h-[23rem]">
                  <div className="relative h-full w-full overflow-hidden bg-[#13162d] lg:rounded-3xl">
                    <Image
                      fill
                      src="/bg.png"
                      alt="bg-img"
                      className="object-cover"
                      priority
                    />
                  </div>

                  <Image
                    fill
                    src={img}
                    alt={title}
                    className="absolute bottom-0 z-10 object-contain sm:object-cover"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    priority
                  />
                </div>

                <h1 className="line-clamp-1 text-lg font-bold md:text-xl lg:text-2xl">
                  {title}
                </h1>

                <p className="line-clamp-2 text-base font-light lg:text-lg lg:font-normal">
                  {des}
                </p>

                <div className="mb-3 mt-7 flex items-center justify-between">
                  <div className="flex items-center">
                    {iconLists.map((icon, i) => (
                      <div
                        key={icon}
                        className="flex h-8 w-8 items-center justify-center rounded-full border border-white/[0.2] bg-black lg:h-10 lg:w-10"
                        style={{
                          transform: `translateX(-${5 * i * 2}px)`,
                          width: '100px',
                        }}
                      >
                        <Image
                          height={100}
                          width={100}
                          src={icon}
                          alt={icon}
                          className="p-2"
                        />
                      </div>
                    ))}
                  </div>
                </div>
              </PinContainer>
            </div>
          )
        )}
      </div>
    </section>
  );
};
