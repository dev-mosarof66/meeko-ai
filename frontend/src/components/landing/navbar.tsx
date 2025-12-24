import { useNavigate } from "react-router";
import ThemeSwitcher from "../theme-switcher";
import { Button } from "../ui/button";
import Logo from "@/assets/logo.svg";

const Navbar = () => {
  const navigate = useNavigate();
  return (
    <nav className="w-full fixed top-0 left-0 z-50">
      <div className="w-full max-w-7xl mx-auto backdrop-blur-md flex items-center justify-between p-3">
        {/* logo + brand name  */}
        <div
          onClick={() => navigate("/")}
          className="flex items-center gap-2 group active:scale-95 cursor-pointer transition duration-300 delay-75"
        >
          <img src={Logo} alt="logo" width={25} />
          <h1 className="hidden sm:block text-lg bg-linear-to-r from-lime-600 via-lime-700 to-purple-600 bg-clip-text text-transparent font-semibold group-hover:opacity-90">
            Meeko AI
          </h1>
        </div>

        {/* auth button  */}
        <div className="flex items-center gap-2">
          <ThemeSwitcher />
          <Button onClick={() => navigate("/register")} size={"sm"}>
            Register
          </Button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
