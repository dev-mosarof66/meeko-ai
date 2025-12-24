import { Eye, EyeOff } from "lucide-react";
import { Button } from "../ui/button";
import { Link } from "react-router";
import { FaGoogle, FaGithub } from "react-icons/fa";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "../ui/card";
import { Field, FieldGroup, FieldLabel } from "../ui/field";
import { Input } from "../ui/input";
import { useState } from "react";
import z from 'zod';
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { cn } from "@/lib/utils";
import { Spinner } from "../ui/spinner";

const registerSchema = z.object({
  name: z.string().min(6, "Full Name must be at least 6 characters"),
  email: z.string().email("Invalid email address"),
  password: z.string().min(8, "Password must be at least 8 characters"),
});


type RegisterSchema = z.infer<typeof registerSchema>;


const RegisterView = () => {
  const [showPassword, setShowPassword] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<RegisterSchema>({
    resolver: zodResolver(registerSchema),
    defaultValues: {
      name: "",
      email: "",
      password: ""
    }
  });

  const onSubmit = (data: RegisterSchema) => {
    console.log("Form Data:", data);
    // Handle API call here
  };

  return (
    <div className="w-full flex items-center bg-background">
      <div className="min-h-screen w-full flex items-center justify-center  relative overflow-hidden">
        {/* Background Glowing Orbs */}
        <div className="absolute top-0 -left-20 w-96 h-96 bg-purple-600/20 rounded-full blur-[120px]" />
        <div className="absolute bottom-0 -right-20 w-96 h-96 bg-green-600/10 rounded-full blur-[120px]" />

        <Card className="w-full max-w-md py-4 overflow-hidden z-10 bg-background shadow-2xl border border-purple-600/40">
          {/* Header */}
          <CardHeader className="py-0">
            <div className="text-center flex flex-col">
              <CardTitle className="text-3xl font-bold">Create Account</CardTitle>
              <CardDescription className="text-slate-700 dark:text-slate-400">
                Join Meeko AI and start your journey
              </CardDescription>
            </div>
          </CardHeader>

          {/* Registration Form */}
          <CardContent>
            <form onSubmit={handleSubmit(onSubmit)} className="w-full flex flex-col">
              <FieldGroup className="w-full flex flex-col gap-4">
                <Field>
                  <FieldLabel>
                    Full Name
                  </FieldLabel>
                  <Input type="text"
                    placeholder="John Doe"
                    {...register('name')}
                    className={cn("w-full border border-foreground/10 rounded-sm", errors.name && 'border-red-500')} />
                </Field>

                <Field>
                  <FieldLabel>
                    Email
                  </FieldLabel>
                  <Input type="email"
                    placeholder="johndoe@example.com"
                    {...register("email")}
                    className={cn("w-full border border-foreground/10 rounded-sm", errors.name && 'border-red-500')}
                  />
                </Field>



                <Field>
                  <FieldLabel>
                    Password
                  </FieldLabel>
                  <div className="w-full relative">
                    <Input type={showPassword ? "text" : "password"}
                      placeholder="••••••••"
                      {...register('password')}
                      className={cn("w-full border border-foreground/10 rounded-sm py-2", errors.name && 'border-red-500')}
                    />
                    <div
                      onClick={() => setShowPassword(!showPassword)} className="absolute right-3 top-2 text-sm text-foreground hover:text-foreground/70 cursor-pointer transition">
                      {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                    </div>
                  </div>
                </Field>


                {Object.keys(errors).length > 0 && (
                  <div className="bg-red-400/10 border border-red-400/20 py-2 px-4 rounded-sm">
                    <p className="text-center text-sm text-red-400 font-medium">
                      {/* Shows the first error found in the object */}
                      {Object.values(errors)[0]?.message}
                    </p>
                  </div>
                )}


                <Button disabled={isSubmitting && true} className="w-full rounded-sm" type="submit">
                  {isSubmitting ? <Spinner /> : "Register"}
                </Button>
              </FieldGroup>
            </form>
          </CardContent>

          <CardFooter>
            <div className="w-full flex flex-col gap-4">
              <div className="w-full flex items-center justify-between">
                <span className="flex-1 h-px bg-primary" />
                <span className="px-2 font-semibold">Continue With</span>
                <span className="flex-1 h-px bg-primary" />
              </div>
              {/* Social Auth Group */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <Button className="rounded-sm">
                  <FaGoogle />
                  <p>Google</p>
                </Button>
                <Button className="rounded-sm" variant={'outline'}>
                  <FaGithub />
                  <p>Github</p>
                </Button>
              </div>

              {/* Footer Link */}
              <p className=" text-slate-700 dark:text-slate-400 text-sm">
                Already have an account?{" "}
                <Link
                  to="/login"
                  className="text-foreground hover:text-foreground/70 active:scale-95 cursor-pointer transition"
                >
                  Log in
                </Link>
              </p>
            </div>
          </CardFooter>
        </Card>
      </div>
    </div>
  );
};

export default RegisterView;
