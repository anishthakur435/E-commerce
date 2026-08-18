import React, { useContext, useEffect } from "react";
import {
  Typography,
  Tooltip,
  IconButton,
  Button,
  FormControl,
  FormLabel,
  RadioGroup,
  FormControlLabel,
  Radio,
} from "@mui/material";
import { Edit } from "@mui/icons-material";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useForm, Controller } from "react-hook-form";
import { useUser } from "@clerk/react";

import FormField from "../../components/Reusable/FormField";
import { ProductContext } from "../../services/context/getProducts";
import { Toaster } from "../../components/Reusable/ToastNotification";

function CheckOut() {
  const { cart, cartCount, cartTotal, getSingleProduct, setReceiptData } =
    useContext(ProductContext);

  const { isLoaded, isSignedIn, user } = useUser();
  const location = useLocation();
  const navigate = useNavigate();
  const {
    handleSubmit,
    control,
    formState: { errors },
    reset,
  } = useForm({
    defaultValues: {
      fullName: "",
      email: "",
      phone: "",
      address: "",
      city: "",
      postalCode: "",
      country: "",
      paymentType: "Cash on Delivery",
    },
  });

  useEffect(() => {
    if (!isLoaded || !isSignedIn || !user) {
      return;
    }

    const fullName = [user.firstName, user.lastName].filter(Boolean).join(" ");

    reset({
      fullName,
      email: user.primaryEmailAddress?.emailAddress || "",
      phone: user.primaryPhoneNumber?.phoneNumber || "",
      address: "",
      city: "",
      postalCode: "",
      country: "",
      paymentType: "Cash on Delivery",
    });
  }, [isLoaded, isSignedIn, user, reset]);
  const buyNowItem = location.state?.buyNowItem;
  const displayCart = buyNowItem ? [buyNowItem] : cart;
  const displayCount = buyNowItem ? buyNowItem.quantity || 1 : cartCount;
  const displayTotal = buyNowItem
    ? buyNowItem.price * (buyNowItem.quantity || 1)
    : cartTotal;
  const onSubmit = (data) => {
    if (!data || !user) {
      return;
    }

    try {
      const order = {
        id: `ORD-${Date.now()}`,
        date: new Date().toISOString(),
        userId: user.id,
        items: displayCart,
        total: displayTotal,
        itemCount: displayCount,
        paymentType: data.paymentType,
        customer: {
          ...data,
          clerkUserId: user.id,
        },
      };
      setReceiptData(order);
      navigate("/receipt");
      Toaster("success", `Order Placed — ${order.id}`);
    } catch (error) {
      Toaster("error", "Error placing order");
    }
  };
  if (!isLoaded) {
    return (
      <main className="min-h-screen flex items-center justify-center bg-[#f7f6f2]">
        <p className="text-sm uppercase tracking-widest">Loading checkout...</p>
      </main>
    );
  }
  if (!isSignedIn) {
    return <NavigateToSignIn location={location} />;
  }

  if (!displayCart || displayCart.length === 0) {
    return (
      <main className="min-h-screen bg-[#f7f6f2] px-4 py-12">
        <div className="mx-auto max-w-4xl rounded-none border-2 border-dashed border-[#d33a11]/40 bg-white p-10 text-center shadow-sm">
          <p className="text-xs font-bold uppercase tracking-[0.35em] text-[#d33a11]">
            Checkout
          </p>

          <Typography
            variant="h4"
            className="mt-4 font-black uppercase tracking-[0.08em] text-slate-900"
          >
            Nothing to checkout
          </Typography>

          <Typography
            component={Link}
            to="/shop"
            className="mt-5 inline-block border border-[#d33a11] px-8 py-3 text-sm font-bold uppercase tracking-[0.2em] text-[#d33a11] transition hover:bg-[#d33a11] hover:text-white"
          >
            Continue Shopping
          </Typography>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-full text-slate-900">
      <div className="mx-auto flex max-w-7xl flex-col md:flex-row">
        <div className="w-fit bg-white p-8 md:w-1/2 md:border-r md:border-[#eadfd5] md:p-12">
          <p className="text-xs font-bold uppercase tracking-[0.35em] text-[#d33a11]">
            Checkout
          </p>

          <Typography
            variant="h4"
            component="h1"
            className="mt-3 font-black uppercase tracking-[0.08em] text-slate-900"
          >
            Checkout Details
          </Typography>

          <form
            className="mt-8 w-full max-w-lg flex flex-col gap-4"
            onSubmit={handleSubmit(onSubmit)}
          >
            <FormField
              name="fullName"
              control={control}
              label="Full Name"
              rules={{
                required: "Full name is required",
              }}
            />

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

            <FormField
              name="phone"
              control={control}
              label="Phone Number"
              type="number"
            />

            <FormField
              name="address"
              control={control}
              label="Street Address"
              rules={{
                required: "Street address is required",
              }}
            />

            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              <FormField
                name="city"
                control={control}
                label="City"
                rules={{
                  required: "City is required",
                }}
              />

              <FormField
                name="postalCode"
                control={control}
                type="number"
                label="Postal Code"
                rules={{
                  required: "Postal code is required",
                  minLength: {
                    value: 6,
                    message: "Must be exactly 6 characters",
                  },
                  maxLength: {
                    value: 6,
                    message: "Must be exactly 6 characters",
                  },
                }}
              />
            </div>

            <FormField
              name="country"
              control={control}
              label="Country"
              rules={{
                required: "Country is required",
              }}
            />

            <Button
              type="submit"
              variant="contained"
              className="mt-6 w-full bg-[#d33a11] hover:bg-[#b62b12]"
              sx={{
                borderRadius: 0,
                py: 1.5,
                fontWeight: 800,
                letterSpacing: "0.12em",
                backgroundColor: "#d9381e",
              }}
            >
              Place Order
            </Button>
          </form>
        </div>

        <div className="w-full p-8 md:w-1/2 md:p-12 lg:px-20">
          <div className="flex items-center justify-between border-b border-[#e7dfd4] pb-4">
            <Typography
              variant="h6"
              className="font-black uppercase tracking-[0.08em] text-slate-900"
            >
              Order Summary ({displayCount} items)
            </Typography>

            {!buyNowItem && (
              <Tooltip title="Edit">
                <IconButton
                  component={Link}
                  to="/cart"
                  size="small"
                  sx={{
                    color: "#d33a11",
                  }}
                >
                  <Edit fontSize="small" />
                </IconButton>
              </Tooltip>
            )}
          </div>

          <div className="max-h-[350px] mt-6 space-y-6 container overflow-auto scrollbar-none">
            {displayCart.map((product) => {
              const qty = product?.quantity || 1;

              const lineTotal = (product?.price * qty).toFixed(2);

              return (
                <div
                  key={product.id || product.sku}
                  className="flex items-center justify-between gap-4 border-b border-[#e7dfd4] pb-5"
                >
                  <div className="flex items-center gap-4">
                    <div className="relative h-20 w-20 shrink-0 overflow-hidden bg-[#f5f1eb]">
                      <span className="absolute -right-1 -top-1 flex h-5 w-5 items-center justify-center bg-slate-900 text-[10px] font-bold text-white">
                        {qty}
                      </span>

                      <img
                        onClick={() => getSingleProduct(product)}
                        src={product?.images?.[0]}
                        alt={product?.title || "Product Image"}
                        className="h-full w-full object-cover cursor-pointer"
                      />
                    </div>

                    <div className="flex flex-col">
                      <Typography
                        variant="body1"
                        className="font-semibold text-slate-900"
                      >
                        {product?.title || "Unknown Product"}
                      </Typography>

                      {product?.sku && (
                        <Typography
                          variant="caption"
                          className="mt-1 text-slate-500"
                        >
                          SKU: {product.sku}
                        </Typography>
                      )}

                      {product?.size && (
                        <Typography
                          variant="caption"
                          className="text-slate-500"
                        >
                          Size: {product.size}
                        </Typography>
                      )}
                    </div>
                  </div>

                  <Typography
                    variant="body1"
                    className="font-mono font-semibold text-slate-900"
                  >
                    ${lineTotal}
                  </Typography>
                </div>
              );
            })}
          </div>

          <div className="mt-6 rounded-sm border border-[#e7dfd4] p-4">
            <FormControl>
              <FormLabel>Payment Type</FormLabel>

              <Controller
                name="paymentType"
                control={control}
                rules={{
                  required: "Payment type is required",
                }}
                render={({ field }) => (
                  <RadioGroup {...field}>
                    <FormControlLabel
                      value="Cash on Delivery"
                      control={<Radio />}
                      label="Cash on Delivery"
                    />
                  </RadioGroup>
                )}
              />
            </FormControl>
          </div>

          <div className="mt-5 border-t border-[#e7dfd4] py-5">
            <div className="mb-2 flex justify-between font-mono text-slate-700">
              <span>Subtotal</span>

              <span>${displayTotal?.toFixed(2) || "0.00"}</span>
            </div>

            <div className="flex justify-between text-xl font-mono font-bold text-slate-900">
              <span>Total</span>

              <span>${displayTotal?.toFixed(2) || "0.00"}</span>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

function NavigateToSignIn({ location }) {
  const redirectUrl = `${location.pathname}${location.search}`;

  window.location.href = `/signin?redirect=${encodeURIComponent(redirectUrl)}`;

  return null;
}

export default CheckOut;
