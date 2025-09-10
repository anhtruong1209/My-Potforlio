import { FaGraduationCap, FaCertificate, FaTrophy } from "react-icons/fa";
import { links } from "@/config";

export const Education = () => {
  return (
    <div id="education" className="py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          Học vấn & Chứng chỉ
        </h2>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Education */}
          <div className="bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-blue-900/20 dark:to-indigo-900/20 p-8 rounded-2xl border border-blue-200 dark:border-blue-800">
            <div className="flex items-center mb-6">
              <FaGraduationCap className="text-blue-600 text-3xl mr-4" />
              <h3 className="text-2xl font-semibold text-blue-900 dark:text-blue-100">
                Học vấn
              </h3>
            </div>
            <div className="space-y-4">
              <div className="bg-white dark:bg-gray-800 p-4 rounded-lg">
                <h4 className="font-semibold text-lg text-gray-900 dark:text-gray-100">
                  Đang theo học - Thạc sĩ Công nghệ Thông tin
                </h4>
                <p className="text-gray-600 dark:text-gray-300">
                  Đại học Hàng Hải Việt Nam | 2025 - nay
                </p>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  Chuyên ngành: Công nghệ thông tin
                </p>
              </div>
              <div className="bg-white dark:bg-gray-800 p-4 rounded-lg">
                <h4 className="font-semibold text-lg text-gray-900 dark:text-gray-100">
                  Cử nhân Công nghệ Thông tin
                </h4>
                <p className="text-gray-600 dark:text-gray-300">
                  Đại học FPT Hà Nội | 2018 - 2024
                </p>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  Chuyên ngành: Công nghệ thông tin | GPA: 3.0
                </p>
              </div>
              <div className="bg-white dark:bg-gray-800 p-4 rounded-lg">
                <h4 className="font-semibold text-lg text-gray-900 dark:text-gray-100">
                  Chương trình Little UK Global
                </h4>
                <p className="text-gray-600 dark:text-gray-300">
                  Ngoại ngữ: Tiếng Anh
                </p>
              </div>
            </div>
          </div>

          {/* Certificates */}
          <div className="bg-gradient-to-br from-green-50 to-emerald-100 dark:from-green-900/20 dark:to-emerald-900/20 p-8 rounded-2xl border border-green-200 dark:border-green-800">
            <div className="flex items-center mb-6">
              <FaCertificate className="text-green-600 text-3xl mr-4" />
              <h3 className="text-2xl font-semibold text-green-900 dark:text-green-100">
                Chứng chỉ
              </h3>
            </div>
            <div className="space-y-3">
              <div className="bg-white dark:bg-gray-800 p-3 rounded-lg hover:shadow-md transition-shadow">
                <a
                  href="https://www.coursera.org/account/accomplishments/specialization/certificate/85L9GQ9ATR35"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block"
                >
                  <p className="text-gray-900 dark:text-gray-100 font-medium hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                    Natural Language Processing - Coursera
                  </p>
                </a>
              </div>
              <div className="bg-white dark:bg-gray-800 p-3 rounded-lg hover:shadow-md transition-shadow">
                <a
                  href="https://www.coursera.org/account/accomplishments/specialization/certificate/DPBKYM4NW2U4"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block"
                >
                  <p className="text-gray-900 dark:text-gray-100 font-medium hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                    AI for Everybody - Coursera
                  </p>
                </a>
              </div>
              <div className="bg-white dark:bg-gray-800 p-3 rounded-lg hover:shadow-md transition-shadow">
                <a
                  href="https://www.coursera.org/account/accomplishments/specialization/certificate/JWWG7W4AH3MP"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block"
                >
                  <p className="text-gray-900 dark:text-gray-100 font-medium hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                    Writing English - Coursera
                  </p>
                </a>
              </div>
              <div className="bg-white dark:bg-gray-800 p-3 rounded-lg">
                <a
                  href="https://phocap.ai/vi/user/yNHz4VuUUUyNkyZi/certificate/5Z4bLArC5Raxhh0e"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block"
                >
                  <p className="text-gray-900 dark:text-gray-100 font-medium">
                    Chương trình phổ cập AI - Trung ương Đoàn TNCS Hồ Chí Minh
                  </p>
                </a>
              </div>
              <div className="bg-white dark:bg-gray-800 p-3 rounded-lg">
                <a
                  href="https://phocap.ai/vi/user/yNHz4VuUUUyNkyZi/certificate/zMlW56htJyRH9Rpo"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block"
                >
                  <p className="text-gray-900 dark:text-gray-100 font-medium">
                    Thanh niên tình nguyện hỗ trợ chính quyền địa phương - Trung ương Đoàn TNCS Hồ Chí Minh
                  </p>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Awards */}
        <div className="mt-12">
          <div className="bg-gradient-to-r from-yellow-50 to-orange-50 dark:from-yellow-900/20 dark:to-orange-900/20 p-8 rounded-2xl border border-yellow-200 dark:border-yellow-800">
            <div className="flex items-center mb-6">
              <FaTrophy className="text-yellow-600 text-3xl mr-4" />
              <h3 className="text-2xl font-semibold text-yellow-900 dark:text-yellow-100">
                Giải thưởng & Thành tích
              </h3>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-white dark:bg-gray-800 p-6 rounded-lg">
                <h4 className="font-semibold text-lg text-gray-900 dark:text-gray-100 mb-2">
                  Giải nhất FPT HN - HoaLac Resfest 2021
                </h4>
                <p className="text-gray-600 dark:text-gray-300">
                  Cuộc thi nghiên cứu khoa học tại Đại học FPT
                </p>
                <a
                  href={links.cvLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-3 inline-block text-purple hover:underline"
                >
                  Xem chi tiết
                </a>
              </div>
              <div className="bg-white dark:bg-gray-800 p-6 rounded-lg">
                <h4 className="font-semibold text-lg text-gray-900 dark:text-gray-100 mb-2">
                  Báo khoa học ICCCM 22 Proceedings of the 10th International Conference on Computer and Communications Management
                </h4>
                <p className="text-gray-600 dark:text-gray-300">
                  A Deep Learning Based Application for Recognition and Preventing Sensitive Image
                </p>
                <a
                  href={links.researchPaper}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-3 inline-block text-purple hover:underline"
                >
                  Đọc bài báo
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
