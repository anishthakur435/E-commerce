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
      className="relative w-full min-h-[600px] flex items-center justify-center overflow-hidden bg-clip-content"
      style={{
        backgroundImage: `url(${peace})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed",
      }}
    >
      {/* <img
        // src={peace}
        alt="Subscribe to our newsletter"
        className="absolute inset-0 w-full h-full object-cover overflow-clip"
      /> */}

      <Box className="relative z-10 w-full max-w-xl bg-[#d9381e] text-white p-8 md:p-10 mx-4 shadow-2xl">
        <h2 className="text-3xl font-bold mb-4 text-center md:text-left">
          Stay Updated!
        </h2>
        <p className="mb-6 text-center md:text-left text-white/90">
          Join our mailing list to get the latest news and offers directly to
          your inbox.
        </p>

        <form
          onSubmit={handleSubmit(submitNewsLetter)}
          className="flex flex-col gap-3 w-full"
        >
          <div className="flex flex-col gap-3 ">
            <label htmlFor="email" className="text-xl">
              Email
            </label>
            <input
              id="email"
              type="email"
              placeholder="Enter your email"
              className="bg-transparent text-white border-b border-white outline-none py-1"
              {...register("email", {
                required: "Email is required",
                pattern: {
                  value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                  message: "Invalid email address",
                },
              })}
            />
            {errors.email && (
              <p className="text-sm text-white/90 mt-1 ml-1">
                {errors.email.message}
              </p>
            )}
          </div>
          <div className="flex flex-col gap-3 sm:flex-row sm:items-center w-full mt-2 justify-between">
            <label>
              <CheckBox
                name="agree"
                id="agree"
                type="checkbox"
                sx={{
                  color: "#ffffff",
                  "&.Mui-checked": { color: "#d9381e" },
                }}
              />
              <span> I agree to receive newsletter updates.</span>
            </label>

            <button
              type="submit"
              className="bg-white hover: text-black px-6 py-2 h-10  shadow-none transition-colors font-mono"
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
