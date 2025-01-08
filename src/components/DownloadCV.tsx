import Download from "@/icons/Download";

function DownloadCV() {
  return (
    <a
      href="/src/data/CV/CV-jahir-jafet-machuca-martinez.pdf"
      download="CV-Jahir-Jafet-Machuca-Martinez.pdf"
      className="text-sm flex items-center gap-3 bg-gray-200/50 text-gray-800 rounded-full border border-black/20 py-[2px] px-3 dark:border-white/10 dark:bg-white/5 dark:text-white"
    >
      <Download className="size-3" />
      CV
    </a>
  );
}

export default DownloadCV;
