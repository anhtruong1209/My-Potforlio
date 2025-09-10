"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";

import { CanvasRevealEffect } from "@/components/ui/canvas-reveal-effect";
import { MagicButton } from "@/components/ui/magic-button";

export const Approach = () => {
  return (
    <section className="w-full py-20">
      <h1 className="heading">
        Phương pháp <span className="text-purple">làm việc</span>
      </h1>

      <div className="my-20 flex flex-col items-center justify-center gap-4 lg:flex-row">
        <Card
          title="Lập kế hoạch & Chiến lược"
          icon={<MagicButton title="Giai đoạn 1" asChild />}
          description="Tôi sẽ hợp tác để lập kế hoạch mục tiêu website, đối tượng mục tiêu và các chức năng chính. Thảo luận về cấu trúc trang, điều hướng và yêu cầu nội dung."
        >
          <CanvasRevealEffect
            animationSpeed={5.1}
            containerClassName="bg-emerald-900"
          />
        </Card>

        <Card
          title="Triển khai & Cập nhật tiến độ"
          icon={<MagicButton title="Giai đoạn 2" asChild />}
          description="Sau khi thống nhất kế hoạch, tôi sẽ bắt đầu lập trình. Từ bản phác thảo ban đầu đến code hoàn chỉnh, tôi sẽ cập nhật tiến độ cho bạn từng bước."
        >
          <CanvasRevealEffect
            animationSpeed={3}
            containerClassName="bg-black"
            colors={[
              [236, 72, 153],
              [232, 121, 249],
            ]}
            dotSize={2}
          />
        </Card>

        <Card
          title="Phát triển & Ra mắt"
          icon={<MagicButton title="Giai đoạn 3" asChild />}
          description="Đây là nơi phép màu xảy ra! Dựa trên thiết kế đã được phê duyệt, tôi sẽ chuyển đổi mọi thứ thành code chức năng, xây dựng website từ đầu."
        >
          <CanvasRevealEffect
            animationSpeed={3}
            containerClassName="bg-sky-600"
            colors={[[125, 211, 252]]}
          />
        </Card>
      </div>
    </section>
  );
};

type CardProps = {
  title: string;
  description: string;
  icon: React.ReactNode;
  children?: React.ReactNode;
};

const Card = ({ title, description, icon, children }: CardProps) => {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="group/canvas-card relative mx-auto flex w-full max-w-sm items-center justify-center rounded-3xl border border-black/[0.2] p-4 dark:border-white/[0.2] lg:h-[35rem]"
    >
      <Icon className="absolute -left-3 -top-3 h-6 w-6 text-black dark:text-white" />
      <Icon className="absolute -bottom-3 -left-3 h-6 w-6 text-black dark:text-white" />
      <Icon className="absolute -right-3 -top-3 h-6 w-6 text-black dark:text-white" />
      <Icon className="absolute -bottom-3 -right-3 h-6 w-6 text-black dark:text-white" />

      <AnimatePresence>
        {hovered && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="absolute inset-0 h-full w-full"
          >
            {children}
          </motion.div>
        )}
      </AnimatePresence>

      <div className="relative z-20">
        <div className="absolute left-[50%] top-[50%] mx-auto flex w-full -translate-x-[50%] -translate-y-[50%] items-center justify-center text-center transition duration-200 group-hover/canvas-card:-translate-y-4 group-hover/canvas-card:opacity-0">
          {icon}
        </div>

        <h2 className="relative z-10 mt-4 text-3xl font-bold text-black opacity-0 transition  duration-200 group-hover/canvas-card:-translate-y-2 group-hover/canvas-card:text-white group-hover/canvas-card:opacity-100 dark:text-white">
          {title}
        </h2>

        <p
          className="relative z-10 mt-4 text-sm font-bold text-black opacity-0 transition  duration-200 group-hover/canvas-card:-translate-y-2 group-hover/canvas-card:text-white group-hover/canvas-card:opacity-100 dark:text-white"
          style={{
            color: "#e4ecff",
          }}
        >
          {description}
        </p>
      </div>
    </div>
  );
};

export const Icon = ({ className, ...props }: any) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth="1.5"
      stroke="currentColor"
      className={className}
      {...props}
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m6-6H6" />
    </svg>
  );
};
