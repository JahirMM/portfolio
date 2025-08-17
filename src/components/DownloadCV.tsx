import Download from "@/icons/Download";

function DownloadCV() {
  return (
    <a
      href="/CV/cv-jahir-jafet-machuca-martinez.pdf"
      download="cv-Jahir-jafet-Machuca-Martinez.pdf"
      className="mb-8 inline-flex items-center gap-3 px-4 py-2 text-sm transition-all duration-500 rounded-lg text-black bg-secondaryColorLightTheme hover:scale-[1.1]"
    >
      <Download className="text-black size-4" />
      Currículum
    </a>
  );
}

export default DownloadCV;
