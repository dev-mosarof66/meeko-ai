import { Moon, Sun } from "lucide-react";
import { useTheme } from "@/components/theme-provider";
import { Button } from "./ui/button";

const ThemeSwitcher = () => {
  const { setTheme, theme } = useTheme();

  const handleTheme = () => {
    if (theme === "dark") {
      setTheme("light");
    } else {
      setTheme("dark");
    }
  };

  return (
    <Button
      onClick={handleTheme}
      size={"icon-sm"}
      className="active:scale-95 cursor-pointer transition duration-300"
    >
      {theme === "dark" ? <Sun /> : <Moon />}
    </Button>
  );
};

export default ThemeSwitcher;
