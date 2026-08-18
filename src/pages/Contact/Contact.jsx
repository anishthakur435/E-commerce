import React from "react";
import { useForm } from "react-hook-form";
import { Button } from "@mui/material";
import FormField from "../../components/Reusable/FormField";
import { Toaster } from "../../components/Reusable/ToastNotification";

function Contact() {
  const {
    control,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      subject: "",
      message: "",
    },
  });

  const onSubmit = (data) => {
    console.log("Contact submitted:", data);
    Toaster("info", "Thank you! We received your message.");
    reset();
  };

  return (
    <main className="min-h-fit bg-[#F7F6F2] px-6 py-16 md:px-10 lg:px-16">
      <div className="mx-auto max-w-6xl">
        <div className="grid items-start gap-8 lg:grid-cols-[0.9fr_1.4fr]">
          <aside className="relative overflow-hidden border-2 border-[#d33a11]/20 bg-[#f4f1eb] p-8 shadow-[10px_10px_0_#d33a11] md:p-10">
            <div className="mb-6">
              <p className="text-xs font-bold uppercase tracking-[0.35em] text-[#d33a11]">
                Let&apos;s Talk
              </p>
              <h1 className="mt-4 text-5xl font-black tracking-[0.08em] text-[#d33a11] md:text-6xl">
                [E-S-T]
              </h1>
            </div>

            <div className="space-y-6 text-sm text-slate-800">
              <div>
                <p className="mb-2 font-bold uppercase tracking-[0.2em] text-slate-900">
                  Email
                </p>
                <a
                  href="mailto:anishthakur435@gmail.com"
                  className="font-mono text-base text-[#d33a11] hover:underline"
                >
                  est@wear.com
                </a>
              </div>

              <div>
                <p className="mb-2 font-bold uppercase tracking-[0.2em] text-slate-900">
                  Phone
                </p>
                <a
                  href="tel:+911234509876"
                  className="font-mono text-base text-[#d33a11] hover:underline"
                >
                  +91 12345-09876
                </a>
              </div>
            </div>
          </aside>

          <section className="border-2 border-[#d33a11]/15 bg-white p-6 shadow-[0_0_0_1px_rgba(211,58,17,0.08)] md:p-10">
            <div className="mb-8">
              <p className="text-xs font-bold uppercase tracking-[0.35em] text-[#d33a11]">
                Contact Us
              </p>
              <h2 className="mt-3 text-3xl font-black uppercase tracking-[0.08em] text-slate-900 md:text-4xl">
                Send A Message
              </h2>
            </div>

            <form
              onSubmit={handleSubmit(onSubmit)}
              className="flex flex-col gap-5"
            >
              <div className="grid gap-5 md:grid-cols-2">
                <FormField
                  name="firstName"
                  control={control}
                  label="First Name"
                  rules={{ required: "First name is required" }}
                />

                <FormField
                  name="lastName"
                  control={control}
                  label="Last Name"
                  rules={{ required: "Last name is required" }}
                />
              </div>

              <FormField
                name="email"
                control={control}
                label="Email Address"
                rules={{
                  required: "Email address is required",
                  pattern: {
                    value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                    message: "Enter a valid email address",
                  },
                }}
                type="email"
              />

              <FormField name="subject" control={control} label="Subject" />

              <FormField
                name="message"
                control={control}
                label="Message"
                rules={{ required: "Please enter a message" }}
                multiline
                minRows={4}
              />

              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{
                  backgroundColor: "#d33a11",
                  borderRadius: 0,
                  py: 1.5,
                  mt: 2,
                  fontWeight: 800,
                  letterSpacing: "0.12em",
                  textTransform: "uppercase",
                  "&:hover": {
                    backgroundColor: "#b82f16",
                  },
                }}
              >
                Send Message
              </Button>
            </form>
          </section>
        </div>
      </div>
    </main>
  );
}

export default Contact;
