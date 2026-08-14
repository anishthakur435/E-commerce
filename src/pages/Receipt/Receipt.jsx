import React, { useContext } from "react";
import { useLocation, Link } from "react-router-dom";
import { Typography, Button } from "@mui/material";
import { Print } from "@mui/icons-material";
import { ProductContext } from "../../services/context/getProducts";

function Receipt() {
  const { receiptData } = useContext(ProductContext);

  if (
    !receiptData ||
    (Array.isArray(receiptData) && receiptData.length === 0) ||
    (typeof receiptData === "object" && Object.keys(receiptData).length === 0)
  ) {
    return (
      <main className="min-h-screen bg-[#f7f6f2] px-4 py-12 sm:px-8">
        <div className="mx-auto max-w-4xl">
          <div className="rounded-none border-2 border-dashed border-[#d33a11]/40 bg-white p-10 text-center shadow-sm">
            <p className="mb-3 text-xs font-bold uppercase tracking-[0.35em] text-[#d33a11]">
              Receipt
            </p>
            <Typography
              variant="h4"
              className="mb-5 font-black uppercase tracking-[0.08em] text-slate-900"
            >
              No Item Purchased
            </Typography>

            <Typography
              component={Link}
              to="/shop"
              className="inline-block rounded-none border border-[#d33a11] px-8 py-3 text-sm font-bold uppercase tracking-[0.2em] text-[#d33a11] transition hover:bg-[#d33a11] hover:text-white"
            >
              Continue Shopping
            </Typography>
          </div>
        </div>
      </main>
    );
  }

  //
  const order = receiptData;
  const userData = order?.customer;
  const items = order?.items || [];
  const handlePrint = () => {
    window.print();
  };
  return (
    <main className="min-h-screen text-slate-900 ">
      <div className="mx-auto max-w-4xl bg-white p-8 md:p-12 border border-[#d9381e]/10 shadow-2xl m-5 rounded-2xl">
        <div>
          {/*  */}
          <div className="flex flex-row w-full border-slate-300 border-b border-[#5a656591]/40 justify-between items-center">
            <div className="flex flex-col justify-between ">
              <Typography
                variant="cap"
                className="font-bold uppercase tracking-widest text-[#d9381e] mb-1"
              >
                Receipt
              </Typography>

              <Typography
                variant="h6"
                className="font-black uppercase text-slate-900 "
              >
                Thank you for your order
              </Typography>
            </div>
            <div className="print:hidden">
              <Button
                variant="contained"
                startIcon={<Print />}
                size="small"
                onClick={handlePrint}
                sx={{ backgroundColor: "#d9381e" }}
              >
                Print Page
              </Button>
            </div>
          </div>
          {/*  */}
          <div className="flex flex-col sm:flex-row justify-between w-full p-2">
            <Typography className=" font-mono text-sm">
              <strong className="text-slate-800 uppercase tracking-wide text-xs">
                Order #
              </strong>
              <br />
              {order?.id}
            </Typography>

            <Typography className=" font-mono text-sm mt-3 sm:mt-0 sm:text-right">
              <strong className="text-slate-800 uppercase text-xs">Date</strong>
              <br />
              {order?.date ? new Date(order?.date).toLocaleDateString() : "N/A"}
            </Typography>
          </div>
        </div>

        {/*  */}
        <div className="flex flex-row sm:flex-row justify-between p-6 bg-slate-50 rounded-lg mt-4 border border-slate-100">
          <div className="flex flex-col">
            <Typography
              variant="h6"
              className="font-extrabold  uppercase  py-2 text-[#d33a11] "
            >
              Billing Details
            </Typography>
            <Typography variant="body1" className="text-slate-900 ">
              <strong>Name:</strong> {userData?.fullName}
            </Typography>
            <Typography variant="body1">
              <strong>Email: </strong>
              {userData?.email}
            </Typography>
            <Typography variant="body1">
              <strong>Contact: </strong>
              {userData?.phone}
            </Typography>
            <Typography variant="body1" className=" mt-2">
              <strong>Address: </strong>
              {userData?.address}
            </Typography>
            <Typography variant="body1">
              <strong>City: </strong>
              {userData?.city} {userData?.postalCode}
            </Typography>
            <Typography variant="body1">
              <strong>Country: </strong>

              {userData?.country}
            </Typography>
          </div>

          <div className="mt-6 sm:mt-0 sm:text-right flex flex-col  ">
            <Typography
              component="h6"
              className="font-extrabold uppercase   py-2 text-[#d33a11]"
            >
              Order Summary
            </Typography>
            <Typography variant="body1">
              <strong> Items : </strong>
              <span className="font-medium text-slate-900">
                {order?.itemCount || items.length}
              </span>
            </Typography>
            <Typography variant="body1" className="flex flex-col">
              <strong>Payment: </strong>
              <span className="font-mono font-medium text-slate-900">
                {order?.paymentType}
              </span>
            </Typography>
            <Typography variant="body1">
              <strong>Total: </strong>
              <span className="font-mono font-medium text-slate-900">
                ${Number(order?.total || 0).toFixed(2)}
              </span>
            </Typography>
          </div>
        </div>

        {/*  */}
        <div className="mt-8 space-y-4">
          {items.map((p) => {
            const qty = p.quantity || 1;
            const lineTotal = ((p.price || 0) * qty).toFixed(2);
            return (
              <div
                key={p.id}
                className="flex items-center justify-between gap-4 border-b border-[#e7dfd4] pb-5"
              >
                <div className="flex items-center gap-4">
                  <div className="relative h-20 w-20 shrink-0 overflow-hidden bg-[#f5f1eb] rounded-md">
                    <img
                      src={p?.images?.[0]}
                      alt={p?.title}
                      className="h-full w-full object-cover"
                    />
                  </div>
                  <div className="flex flex-col">
                    <Typography className="font-semibold text-slate-800">
                      {p.title}
                    </Typography>
                    {p.sku && (
                      <Typography variant="caption" className="text-slate-500">
                        SKU: {p.sku}
                      </Typography>
                    )}
                    {p.size && (
                      <Typography variant="caption" className="text-slate-500">
                        Size: {p.size}
                      </Typography>
                    )}
                  </div>
                </div>

                <div className="text-right">
                  <Typography className="font-mono font-semibold text-slate-800">
                    ${lineTotal}
                  </Typography>
                  <Typography variant="caption" className="text-slate-500">
                    Qty: {qty}
                  </Typography>
                </div>
              </div>
            );
          })}
        </div>

        {/*  */}
        <div className="  pt-6">
          <div className="flex flex-row justify-between items-center bg-[#fcf8f7] p-5 rounded-lg border border-[#f5e3df]">
            <Typography
              variant="h5"
              className="font-extrabold uppercase tracking-wide text-[#d33a11]"
            >
              Subtotal
            </Typography>
            <Typography
              variant="h6"
              className="font-mono font-black text-2xl text-[#d33a11]"
            >
              ${Number(order?.total || 0).toFixed(2)}
            </Typography>
          </div>
        </div>
      </div>
    </main>
  );
}

export default Receipt;
