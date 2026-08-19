import React, { useState } from "react";
import peace from "../../assets/images/peace.jpg";
import { Box, FormControlLabel, Typography } from "@mui/material";
import { useForm } from "react-hook-form";
import { CheckBox } from "@mui/icons-material";

function Newsletter() {
  const [successMessage, setSuccessMessage] = useState("");

  const {
    control,
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    defaultValues: {
      email: "",
      agree: true,
    },
  });

  const submitNewsLetter = (data) => {
    console.log("Newsletter signup:", data);
    setSuccessMessage("Thank you! You have been subscribed.");
    reset();
  };

  return (
    <section
      className="relative w-full min-h-[400px] sm:min-h-[500px] md:min-h-[600px] flex items-center justify-center overflow-hidden bg-clip-content"
      style={{
        backgroundImage: `url(${peace})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed",
      }}
    >
      <Box className="relative z-10 w-full max-w-xl bg-[#d9381e] text-white p-5 sm:p-8 md:p-10 mx-3 sm:mx-4 shadow-2xl">
        <h2 className="text-xl sm:text-2xl md:text-3xl font-bold mb-3 sm:mb-4 text-center md:text-left">
          Stay Updated!
        </h2>
        <p className="mb-4 sm:mb-6 text-xs sm:text-sm md:text-base text-center md:text-left text-white/90">
          Join our mailing list to get the latest news and offers directly to
          your inbox.
        </p>

        <form
          onSubmit={handleSubmit(submitNewsLetter)}
          className="flex flex-col gap-3 w-full"
        >
          <div className="flex flex-col gap-2 sm:gap-3">
            <label htmlFor="email" className="text-sm sm:text-base md:text-lg font-semibold">
              Email
            </label>
            <input
              id="email"
              type="email"
              placeholder="Enter your email"
              className="bg-transparent text-white text-sm sm:text-base border-b border-white outline-none py-1.5 sm:py-2 placeholder:text-white/60 focus:border-white/80 transition-colors"
              {...register("email", {
                required: "Email is required",
                pattern: {
                  value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                  message: "Invalid email address",
                },
              })}
            />
            {errors.email && (
              <p className="text-xs sm:text-sm text-white/80 mt-1 ml-1">
                {errors.email.message}
              </p>
            )}
          </div>
          <div className="flex flex-col sm:flex-row gap-2 sm:gap-3 w-full mt-1 sm:mt-2 sm:items-center sm:justify-between">
            <label className="flex items-center gap-1.5 sm:gap-2 text-xs sm:text-sm cursor-pointer">
              <CheckBox
                name="agree"
                id="agree"
                type="checkbox"
                sx={{
                  color: "#ffffff",
                  "&.Mui-checked": { color: "#d9381e" },
                  "& svg": { fontSize: { xs: "1.25rem", sm: "1.5rem" } },
                }}
              />
              <span>I agree to receive newsletter updates.</span>
            </label>

            <button
              type="submit"
              className="bg-white hover:bg-white/90 text-black px-4 sm:px-6 py-1.5 sm:py-2 h-9 sm:h-10 shadow-none transition-colors font-mono text-xs sm:text-sm font-semibold whitespace-nowrap"
            >
              Subscribe
            </button>
          </div>
          {errors.agree && (
            <p className="text-sm text-white/90 mt-1 ml-1">
              {errors.agree.message}
            </p>
          )}
          {successMessage && (
            <p className="text-sm text-white/90 mt-2">{successMessage}</p>
          )}
        </form>
      </Box>
    </section>
  );
}

export default Newsletter;
