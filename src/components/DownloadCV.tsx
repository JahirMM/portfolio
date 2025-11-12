import Download from "@/icons/Download";

function DownloadCV() {
  return (
    <a
      href="https://drive.google.com/file/d/19WqvLgAknTOak0VH24mE1mUxsJDvU1CO/view?usp=drive_link"
      target="_blank"
      rel="noopener noreferrer"
      className="flex items-center gap-3 px-3 py-2 text-sm transition-all duration-500 border rounded-lg bg-gray-200/50 border-black/20 hover:bg-white/30 dark:hover:bg-white/10 dark:border-white/10 dark:bg-white/5 hover:scale-[1.1]"
    >
      <Download className="text-black size-3 dark:text-white" />
      Currículum
    </a>
  );
}

export default DownloadCV;
