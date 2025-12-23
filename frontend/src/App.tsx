import ThemeSwitcher from "./components/theme-switcher";

const App = () => {
  return (
    <div className="w-full flex items-center justify-between p-3">
      <p className="text-xl">App</p>
      <ThemeSwitcher />
    </div>
  );
};

export default App;
