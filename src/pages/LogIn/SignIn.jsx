import React from "react";
import { useForm } from "react-hook-form";
import { Button, Typography } from "@mui/material";
import { Link, useLocation, useNavigate } from "react-router-dom";
import FormField from "../../components/Reusable/FormField";
import { Toaster } from "../../components/Reusable/ToastNotification";
import { useSignIn } from "@clerk/react";

function SignIn() {
  const navigate = useNavigate();
  const location = useLocation();
  const { signIn } = useSignIn();
  const { control, handleSubmit, reset } = useForm({
    defaultValues: {
      email: "",
      password: "",
    },
  });
  const redirectLogin = location.state?.from || "/";
  const onSubmit = async (data) => {
    try {
      const { error } = await signIn.password({
        emailAddress: data.email,
        password: data.password,
      });
      if (error) {
        Toaster("error", error.message || "Unable to sign in.");
        return;
      }
      if (signIn.status === "complete") {
        const { error: finalizeError } = await signIn.finalize({
          navigate: ({ decorateUrl }) => {
            const url = decorateUrl(redirectLogin);
            if (url.startsWith("http")) {
              window.location.href = url;
            } else {
              navigate(redirectLogin, {
                replace: true,
                state: {
                  buyNowItem: location.state?.buyNowItem,
                },
              });
            }
          },
        });
        if (finalizeError) {
          Toaster(
            "error",
            finalizeError.message || "Unable to complete sign in.",
          );
          return;
        }
        reset();
        Toaster("success", "Welcome back! You are signed in.");
      } else {
        Toaster("error", `Additional verification required: ${signIn.status}`);
      }
    } catch (error) {
      Toaster("error", error?.message || "Something went wrong during login.");
    }
  };

  return (
    <main className="min-h-screen  flex items-center justify-center bg-[#F7F6F2] px-6 py-16 md:px-10 lg:px-16">
      <div className="mx-auto max-w-5xl overflow-hidden border-2 border-[#d33a11]/15 bg-white shadow-[10px_10px_0_#d33a11]">
        <div className="grid lg:grid-cols-[0.9fr_1.4fr]">
          <div className="bg-[#d33a11] p-8 text-white md:p-12">
            <p className="text-xs font-bold uppercase tracking-[0.35em] text-white/80">
              Welcome back
            </p>
            <h1 className="mt-5 text-4xl font-black uppercase tracking-[0.08em] md:text-5xl">
              [E-S-T] wear
            </h1>
            <p className="mt-6 max-w-sm text-sm leading-7 text-white/90">
              Sign in to manage your orders, track new arrivals, and keep your
              favorite pieces ready for checkout.
            </p>

            <div className="mt-10 space-y-4 text-sm text-white/80">
              <div className="border-l-2 border-white/80 pl-4">
                <p className="font-bold uppercase tracking-[0.2em] text-white">
                  Fast Checkout
                </p>
                <p className="mt-2">Save your details and shop in seconds.</p>
              </div>
              <div className="border-l-2 border-white/80 pl-4">
                <p className="font-bold uppercase tracking-[0.2em] text-white">
                  Exclusive Access
                </p>
                <p className="mt-2">
                  Receive early drops and member-only deals.
                </p>
              </div>
            </div>
          </div>
          <section className="border-2 border-[#d33a11]/15 bg-white p-6 shadow-[0_0_0_1px_rgba(211,58,17,0.08)] md:p-10">
            <p className="text-xs font-bold uppercase tracking-[0.35em] text-[#d33a11]">
              Account
            </p>
            <h2 className="mt-4 text-3xl font-black uppercase tracking-[0.08em] text-slate-900 md:text-4xl">
              Sign In
            </h2>

            <form
              onSubmit={handleSubmit(onSubmit)}
              className="mt-8 flex flex-col gap-5 "
            >
              <FormField
                name="email"
                control={control}
                label="Email Address"
                rules={{
                  required: "Email is required",
                  pattern: {
                    value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                    message: "Enter a valid email address",
                  },
                }}
                type="email"
              />

              <FormField
                name="password"
                control={control}
                label="Password"
                rules={{
                  required: "Password is required",
                  minLength: {
                    value: 6,
                    message: "Password must be at least 6 characters",
                  },
                }}
                type="password"
              />

              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{
                  backgroundColor: "#d33a11",
                  borderRadius: 0,
                  py: 1.5,
                  fontWeight: 800,
                  letterSpacing: "0.12em",
                  textTransform: "uppercase",
                  "&:hover": {
                    backgroundColor: "#b82f16",
                  },
                }}
              >
                Sign In
              </Button>

              <Typography
                className="gap-6 flex flex-row justify-between"
                variant="body2"
                className=""
                sx={{ textAlign: "center", color: "#475569" }}
              >
                <span> Don&apos;t have an account? </span>
                <Link
                  to="/signup"
                  className="font-bold text-[#d33a11] underline-offset-4 hover:underline"
                >
                  Create an account
                </Link>
              </Typography>
            </form>
          </section>
        </div>
      </div>
    </main>
  );
}

export default SignIn;
