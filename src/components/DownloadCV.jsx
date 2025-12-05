import { Download } from "lucide-react";

const DownloadCV = () => {
  return (
    <div className="flex justify-center mt-6">
      <a
        href="file:///C:/Users/kkeer/OneDrive/Documents/Kiruthika-Resume.pdf" //
        download="Keerthika-CV.pdf"
        className="flex items-center gap-2 px-6 py-3 rounded-2xl bg-gradient-to-r from-purple-500 to-pink-500 text-white font-semibold shadow-lg hover:scale-105 transition-transform duration-300"
      >
        <Download className="w-5 h-5" />
        Download CV
      </a>
    </div>
  );
};

export default DownloadCV;
