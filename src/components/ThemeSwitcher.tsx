import { useChangeTheme } from "@/hooks/useChangeTheme";

function ThemeSwitcher() {
  const { handleChangeTheme, theme } = useChangeTheme();
  return (
    <div
      onClick={handleChangeTheme}
      className="cursor-pointer w-11 h-6 rounded-xl relative flex items-center bg-secondaryColorLightTheme dark:bg-[#1D3CBE]"
    >
      <span
        className={`absolute h-5 w-5 rounded-full transition-transform duration-500 ease-in-out transform ${
          theme === "light" ? "translate-x-[3px]" : "translate-x-full"
        } bg-slate-300 dark:bg-blue-200`}
      ></span>
    </div>
  );
}

export default ThemeSwitcher;
