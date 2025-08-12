import Download from "@/icons/Download";

function DownloadCV() {
  return (
    <a
      href="/CV/cv-jahir-jafet-machuca-martinez.pdf"
      download="cv-Jahir-jafet-Machuca-Martinez.pdf"
      className="flex items-center gap-3 px-3 py-2 text-sm transition-all duration-500 border rounded-lg bg-gray-200/50 border-black/20 hover:bg-white/30 dark:hover:bg-white/10 dark:border-white/10 dark:bg-white/5 hover:scale-[1.1]"
    >
      <Download className="text-black size-3 dark:text-white" />
      Currículum
    </a>
  );
}

export default DownloadCV;
