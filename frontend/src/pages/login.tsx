import LoginView from "@/components/auth/login-view";

const LoginPage = () => {
  return (
    <div onContextMenu={(e) => e.preventDefault()} className="w-full h-screen">
      <LoginView />
    </div>
  );
};

export default LoginPage;
