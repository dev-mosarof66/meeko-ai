import RegisterView from "@/components/auth/register-view";

const RegisterPage = () => {
  return (
    <div onContextMenu={(e) => e.preventDefault()} className="w-full h-screen">
      <RegisterView />
    </div>
  );
};

export default RegisterPage;
