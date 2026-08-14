import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { Button, TextField, Typography } from "@mui/material";
import { Link, useLocation, useNavigate } from "react-router-dom";
import FormField from "../../components/Reusable/FormField";
import { Toaster } from "../../components/Reusable/ToastNotification";
import { useSignUp } from "@clerk/react";

function SignUp() {
  const navigate = useNavigate();
  const location = useLocation();

  const [isVerificationStep, setIsVerificationStep] = useState(false);
  const [code, setCode] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const { signUp } = useSignUp();

  const { control, handleSubmit, watch } = useForm({
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      password: "",
      confirmPassword: "",
    },
  });

  const password = watch("password");

  //
  const onSubmit = async (data) => {
    if (isSubmitting) return;
    setIsSubmitting(true);
    try {
      const { error } = await signUp.password({
        firstName: data.firstName,
        lastName: data.lastName,
        emailAddress: data.email,
        password: data.password,
      });
      if (error) {
        console.error("signup error:", error);
        Toaster("error", error.message || "Unable to create account.");
        return;
      }
      const { error: verificationError } =
        await signUp.verifications.sendEmailCode();
      if (verificationError) {
        console.error("Verification  error:", verificationError);
        Toaster(
          "error",
          verificationError.message || "Unable to send verification code.",
        );
        return;
      }
      setIsVerificationStep(true);
      Toaster("success", "Verification code sent to email.");
    } catch (error) {
      console.error("Signup error:", error);

      Toaster("error", error?.message || "Something went wrong.");
    } finally {
      setIsSubmitting(false);
    }
  };

  //
  const onPressVerify = async (event) => {
    event.preventDefault();
    if (!code.trim()) {
      Toaster("error", "Please enter the verification code.");
      return;
    }
    if (isSubmitting) return;
    setIsSubmitting(true);
    try {
      const { error } = await signUp.verifications.verifyEmailCode({
        code: code.trim(),
      });

      if (error) {
        console.error("Verification error:", error);
        Toaster("error", error.message || "Invalid verification code.");
        return;
      }

      if (signUp.status === "complete") {
        const { error: finalizeError } = await signUp.finalize({
          navigate: ({ session, decorateUrl }) => {
            const redirectUrl = location.state?.from || "/";
            const url = decorateUrl(redirectUrl);
            if (url.startsWith("http")) {
              window.location.href = url;
            } else {
              navigate(redirectUrl, {
                replace: true,
                state: {
                  buyNowItem: location.state?.buyNowItem,
                },
              });
            }
          },
        });
        if (finalizeError) {
          console.error("Finalize  error:", finalizeError);
          Toaster(
            "error",
            finalizeError.message || "Unable to signup.",
          );
          return;
        }
        Toaster("success", "Account successfully created.");
      } else {
        Toaster(
          "error",
          "email  verified, but  signup is not complete.",
        );
      }
    } catch (error) {
      console.error("Verification error:", error);
      Toaster("error", error?.message || "Unable to verify your email.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleBackToSignup = () => {
    setIsVerificationStep(false);
    setCode("");
  };

  return (
    <main className="min-h-screen flex items-center justify-center bg-[#F7F6F2] px-6 py-16 md:px-10 lg:px-16">
      <div className="mx-auto max-w-5xl overflow-hidden border-2 border-[#d33a11]/15 bg-white shadow-[10px_10px_0_#d33a11]">
        <div className="grid md:grid-cols-2">
          {/*  */}
          <div className="bg-[#d33a11] p-8 text-white md:p-12">
            <p className="text-xs font-bold uppercase tracking-[0.35em] text-white/80">
              Join the club
            </p>

            <h1 className="mt-5 text-4xl font-black uppercase tracking-[0.08em] md:text-5xl">
              Create Your Account
            </h1>

            <p className="mt-6 max-w-sm text-sm leading-7 text-white/90">
              Shop the latest drops, save your favorites, and enjoy a smoother
              checkout experience with your own EST account.
            </p>

            <div className="mt-10 space-y-4 text-sm text-white/80">
              <div className="border-l-2 border-white/80 pl-4">
                <p className="font-bold uppercase tracking-[0.2em] text-white">
                  Members Only
                </p>

                <p className="mt-2">
                  Get access to curated drops and private offers.
                </p>
              </div>

              <div className="border-l-2 border-white/80 pl-4">
                <p className="font-bold uppercase tracking-[0.2em] text-white">
                  Easy Orders
                </p>

                <p className="mt-2">
                  Track your purchases and save delivery details.
                </p>
              </div>
            </div>
          </div>

          {!isVerificationStep ? (
            /* 
              SIGNUP FORM
             *  */
            <div className="bg-white p-8 md:p-12 min-w-lg">
              <p className="text-xs font-bold uppercase tracking-[0.35em] text-[#d33a11]">
                Register
              </p>

              <h2 className="mt-4 text-3xl font-black uppercase tracking-[0.08em] text-slate-900 md:text-4xl">
                Sign Up
              </h2>

              <form
                onSubmit={handleSubmit(onSubmit)}
                className="mt-8 flex flex-col gap-5"
              >
                {/* NAME */}
                <div className="grid gap-5 md:grid-cols-2">
                  <FormField
                    name="firstName"
                    control={control}
                    label="First Name"
                    rules={{
                      required: "First name is required",
                    }}
                  />

                  <FormField
                    name="lastName"
                    control={control}
                    label="Last Name"
                    rules={{
                      required: "Last name is required",
                    }}
                  />
                </div>

                {/* EMAIL */}
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

                {/* PASSWORD */}
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
                    maxLength: {
                      value: 16,
                      message: "Password must be less than 16 characters",
                    },
                  }}
                  type="password"
                />

                {/* CONFIRM PASSWORD */}
                <FormField
                  name="confirmPassword"
                  control={control}
                  label="Confirm Password"
                  rules={{
                    required: "Please confirm your password",
                    validate: (value) =>
                      value === password || "Passwords do not match",
                  }}
                  type="password"
                />

                {/* SUBMIT */}
                <Button
                  type="submit"
                  fullWidth
                  variant="contained"
                  disabled={isSubmitting}
                  sx={{
                    backgroundColor: "#d33a11",
                    borderRadius: 0,
                    py: 1.5,
                    mt: 1,
                    fontWeight: 800,
                    letterSpacing: "0.12em",
                    textTransform: "uppercase",

                    "&:hover": {
                      backgroundColor: "#b82f16",
                    },
                  }}
                >
                  {isSubmitting ? "Creating Account..." : "Create Account"}
                </Button>

                {/* SIGN IN */}
                <Typography
                  variant="body2"
                  sx={{
                    textAlign: "center",
                    color: "#475569",
                  }}
                >
                  <span>Already have an account? </span>

                  <Link
                    to="/signin"
                    className="font-bold text-[#d33a11] underline-offset-4 hover:underline"
                  >
                    Sign in here
                  </Link>
                </Typography>
              </form>
            </div>
          ) : (
            <div className="bg-white p-8 md:p-12 min-w-lg">
              <p className="text-xs font-bold uppercase tracking-[0.35em] text-[#d33a11]">
                Verification
              </p>

              <h2 className="mt-4 text-3xl font-black uppercase tracking-[0.08em] text-slate-900 md:text-4xl">
                Check Email
              </h2>

              <p className="mt-4 text-sm leading-6 text-gray-600">
                We sent a verification code to your email. Enter the code below
                to finish creating your account.
              </p>

              <form
                onSubmit={onPressVerify}
                className="mt-8 flex flex-col gap-5"
              >
                <TextField
                  label="Verification Code"
                  variant="outlined"
                  value={code}
                  onChange={(event) => setCode(event.target.value)}
                  required
                  fullWidth
                  autoComplete="one-time-code"
                />

                <Button
                  type="submit"
                  fullWidth
                  variant="contained"
                  disabled={isSubmitting}
                  sx={{
                    backgroundColor: "#d33a11",
                    borderRadius: 0,
                    py: 1.5,
                    mt: 1,
                    fontWeight: 800,
                    letterSpacing: "0.12em",
                    textTransform: "uppercase",

                    "&:hover": {
                      backgroundColor: "#b82f16",
                    },
                  }}
                >
                  {isSubmitting ? "Verifying..." : "Verify & Create Account"}
                </Button>

                <Button
                  type="button"
                  variant="text"
                  disabled={isSubmitting}
                  onClick={handleBackToSignup}
                  sx={{
                    color: "#d33a11",
                    fontWeight: 700,
                  }}
                >
                  Back to Sign Up
                </Button>
              </form>
            </div>
          )}
        </div>
      </div>
    </main>
  );
}

export default SignUp;
