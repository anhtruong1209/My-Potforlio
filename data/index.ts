import { links } from "@/config";

export const navItems = [
  { name: "Bản thân", link: "#about" },
  { name: "Dự án", link: "#projects" },
  { name: "Học vấn", link: "#education" },
  { name: "Thành tựu", link: "#achievements" },
  { name: "Đánh giá", link: "#testimonials" },
  { name: "Liên hệ", link: "#contact" },
] as const;

export const gridItems = [
  {
    id: 1,
    title: "Chuyên viên tại Công ty TNHH MTV Thông tin Điện tử Hàng hải Việt Nam với 4+ năm kinh nghiệm phát triển phần mềm",
    description: "",
    className: "lg:col-span-3 md:col-span-6 md:row-span-4 lg:min-h-[60vh]",
    imgClassName: "w-full h-full",
    titleClassName: "justify-end",
    img: "/b1.png",
    spareImg: "",
  },
  {
    id: 2,
    title: "Báo khoa học ICCCM '22 về giáo dục trẻ em",
    description: "Nghiên cứu và phát triển công nghệ AI cho giáo dục",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "",
    spareImg: "",
  },
  {
    id: 3,
    title: "Full-stack",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-center",
    img: "",
    spareImg: "",
  },
  {
    id: 4,
    title: "",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "/grid.png",
    spareImg: "/b4.svg",
  },

  {
    id: 5,
    title: "Phát triển hệ thống AIS và nền tảng giáo dục số tại Vishipel",
    description: "",
    className: "md:col-span-3 md:row-span-2",
    imgClassName: "absolute right-0 bottom-0 md:w-96 w-60",
    titleClassName: "justify-center md:justify-start lg:justify-center",
    img: "/p1.png",
    spareImg: "/p2.png",
  },
  {
    id: 6,
    title: "Bạn có muốn bắt đầu một dự án cùng nhau không?",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-center md:max-w-full max-w-60 text-center",
    img: "",
    spareImg: "",
  },
] as const;

export const projects = [
  {
    id: 1,
    title: "Hệ thống Quản lý Tàu AIS - Vishipel",
    des: "Hệ thống quản lý và giám sát tàu biển sử dụng công nghệ AIS, bao gồm theo dõi vị trí, lịch sử hành trình và quản lý dữ liệu tàu.",
    img: "/p1.png",
    iconLists: ["/next.svg", "/tail.svg", "/ts.svg", "/three.svg", "/fm.svg"],
    link: "https://quanlytau.ais.vishipel.vn/",
    sourceCode: "https://quanlytau.ais.vishipel.vn/",
  },
  {
    id: 2,
    title: "Bình dân học vụ số - Vishipel",
    des: "Nền tảng giáo dục số cho chương trình bình dân học vụ, cung cấp các khóa học và tài liệu học tập trực tuyến.",
    img: "/p2.png",
    iconLists: ["/next.svg", "/tail.svg", "/ts.svg", "/stream.svg", "/c.svg"],
    link: "https://binhdanhocvuso.vishipel.vn/",
    sourceCode: "https://binhdanhocvuso.vishipel.vn/",
  },

  {
    id: 3,
    title: "Doji Smart Showroom - FPT Software",
    des: "Ứng dụng Virtual try-on cho vàng, bạc và đá quý sử dụng AI, cho phép khách hàng trải nghiệm sản phẩm qua iPad với công nghệ nhận diện khuôn mặt và cơ thể.",
    img: "/p4.png",
    iconLists: ["/next.svg", "/tail.svg", "/ts.svg", "/three.svg", "/gsap.svg"],
    link: "#",
    sourceCode: "#",
  },
] as const;

export const testimonials = [
  {
    quote: `Làm việc với ${links.ownerName} là một trải nghiệm tuyệt vời. Sự chuyên nghiệp, tận tâm và cam kết của anh ấy trong việc mang lại kết quả xuất sắc được thể hiện rõ trong suốt dự án. Nhiệt huyết của ${links.ownerName} với mọi khía cạnh phát triển thực sự nổi bật.`,
    name: "Nguyễn Văn A",
    title: "Giám đốc Công ty TNHH MTV Thông tin Điện tử Hàng hải Việt Nam",
  },
  {
    quote: `${links.ownerName} là một developer tài năng với 4 năm kinh nghiệm và có báo khoa học được công bố. Anh ấy luôn mang lại những giải pháp sáng tạo và hiệu quả cho các dự án phức tạp.`,
    name: "Trần Thị B",
    title: "Trưởng phòng Phát triển Phần mềm",
  },
  {
    quote: `Với kinh nghiệm làm việc tại Công ty TNHH MTV Thông tin Điện tử Hàng hải Việt Nam, ${links.ownerName} đã chứng minh khả năng phát triển các hệ thống phần mềm chuyên nghiệp và đáng tin cậy.`,
    name: "Lê Văn C",
    title: "Chuyên gia Công nghệ Thông tin",
  },
  {
    quote: `${links.ownerName} không chỉ là một developer giỏi mà còn là một nhà nghiên cứu tài năng. Báo khoa học của anh ấy trên ACM Digital Library cho thấy khả năng nghiên cứu và phát triển công nghệ mới.`,
    name: "Phạm Thị D",
    title: "Giáo sư Khoa Công nghệ Thông tin",
  },
  {
    quote: `Tôi đánh giá cao sự chuyên nghiệp và tận tâm của ${links.ownerName} trong công việc. Anh ấy luôn hoàn thành dự án đúng hạn với chất lượng cao và sẵn sàng hỗ trợ đồng nghiệp.`,
    name: "Hoàng Văn E",
    title: "Đồng nghiệp",
  },
] as const;

export const companies = [
  {
    id: 1,
    name: "cloudinary",
    img: "/cloud.svg",
    nameImg: "/cloudName.svg",
  },
  {
    id: 2,
    name: "appwrite",
    img: "/app.svg",
    nameImg: "/appName.svg",
  },
  {
    id: 3,
    name: "HOSTINGER",
    img: "/host.svg",
    nameImg: "/hostName.svg",
  },
  {
    id: 4,
    name: "stream",
    img: "/s.svg",
    nameImg: "/streamName.svg",
  },
  {
    id: 5,
    name: "docker.",
    img: "/dock.svg",
    nameImg: "/dockerName.svg",
  },
] as const;

export const workExperience = [
  {
    id: 1,
    title: "Chuyên viên Phòng Nghiên cứu Phát triển - Công ty TNHH MTV Thông tin Điện tử Hàng hải Việt Nam",
    desc: "02/2025 - Hiện tại | Phát triển hệ thống quản lý tàu AIS, lĩnh vực đổi mới sáng tạo chuyển đổi số của Công ty",
    className: "md:col-span-2",
    thumbnail: "/exp1.svg",
  },
  {
    id: 2,
    title: "Lập trình viên phần mềm - Soundton VN",
    desc: "08/2023 - 11/2024 | Phát triển hệ thống quản lý bảng chấm công cho quân đội, bao gồm tính lương sĩ quan, quân nhân chuyên nghiệp và báo cáo số liệu.",
    className: "md:col-span-2",
    thumbnail: "/exp2.svg",
  },
  {
    id: 3,
    title: "Lập trình viên phần mềm - FPT Software",
    desc: "07/2021 - 07/2023 | Phát triển giải pháp AI cho website xử lý hình ảnh, Doji Smart Showroom với Virtual try-on, và hệ thống SaleMan với speech-to-text AWS.",
    className: "md:col-span-2",
    thumbnail: "/exp3.svg",
  },
  {
    id: 4,
    title: "Sinh viên nghiên cứu phát triển - SapLab Đại học FPT",
    desc: "03/2021 - 07/2021 | Giải nhất FPT HN - HoaLac Resfest 2021, có báo khoa học về giáo dục trẻ em được công bố tại ICCCM '22.",
    className: "md:col-span-2",
    thumbnail: "/exp4.svg",
  },
] as const;

export const socialMedia = [
  {
    name: "GitHub",
    img: "/git.svg",
    link: "https://github.com/anhtruong1209",
  },
  {
    name: "Facebook",
    img: "/facebook.svg",
    link: "https://www.facebook.com/truong.truong.276673",
  },
] as const;

export const techStack = {
  stack1: ["React.js", "Next.js", "TypeScript", "Node.js"],
  stack2: ["Python", "AWS", "MongoDB", "AI/ML"],
  stack3: ["AIS Technology", "Computer Vision", "Speech-to-Text", "Virtual Try-on"],
} as const;
