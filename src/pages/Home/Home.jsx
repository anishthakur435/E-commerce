import { useContext, useEffect, useState } from "react";
import {
  Button,
  Container,
  Typography,
  Box,
  Grid,
  Card,
  CircularProgress,
  TextField,
} from "@mui/material";
import imagebg1 from "../../assets/images/bgImg1.jpg";
import { motion } from "framer-motion";
import AxiosApi from "../../services/api";
import { ProductContext } from "../../services/context/getProducts";
import { Link, useNavigate } from "react-router-dom";
import { Add, Remove } from "@mui/icons-material";
import ButtonCard from "../../components/Reusable/ButtonCard";
import Newsletter from "../../components/layout/Newsletter";

export default function HomePage() {
  // router helpers
  const navigate = useNavigate();

  // product state and cart actions from context
  const {
    products,
    addToCart,
    getSingleProduct,
    cart,
    updateCartItemQuantity,
  } = useContext(ProductContext);

  // add the selected product to cart
  const handleAddToCart = (product) => {
    addToCart(product);
    // navigate("/cart");
  };

  // loading state while products are being fetched
  if (!products) {
    return (
      <>
        <main className="min-h-screen flex items-center justify-center">
          <div className="md:col-span-6 flex justify-center relative z-10 my-4 md:my-0">
            <img
              src={peace}
              alt="[E-S-T]"
              className="min-w-[700px] xs:max-w-2xl  max-w-sm md:max-w-md object-cover drop-shadow-md"
            />
          </div>
          <CircularProgress />
        </main>
      </>
    );
  }

  return (
    <>
      <main className="relative  bg-[#F7F6F2] text-slate-900 ">
        <div className="absolute top-5 left-0 right-0 z-10 text-center select-none pointer-events-none">
          <motion.div
            initial={{ opacity: 0, filter: "blur(10px)" }}
            animate={{ opacity: 2, filter: "blur(0px)" }}
            transition={{ duration: 1, ease: "easeIn" }}
          >
            <h1 className="text-[16vw]  font-black  text-[#d9381e] leading-none uppercase font-serif">
              [E-S-T]
            </h1>
          </motion.div>
        </div>
        <Container
          maxWidth="lg"
          className="relative z-0 py-12 flex flex-col justify-between gap-10 items-center "
        >
          <div className="grid grid-cols-1 lg:grid-cols-12 items-center w-full gap-8 lg:gap-6 lg:min-h-[100vh] justify-between px-4 lg:px-0">
            <div
             className="lg:col-span-3 flex flex-col items-center gap-1 z-20 relative lg:top-20 lg:-left-10 xl:-left-20 top-10"
             >
              {[
                "Raw Stitches",
                "And",
                "Unapologetic",
                "Fits",
                "Built For",
                "The",
                "Concrete",
                "Jungle",
              ].map((text, idx) => (
                <span
                  key={idx}
                  className="bg-black text-white font-semibold uppercase text-xl sm:text-2xl lg:text-3xl px-2"
                >
                  {text}
                </span>
              ))}
            </div>

            <div className="lg:col-span-6 flex justify-center relative z-10 my-6 lg:my-0 w-full">
              <img
                src={imagebg1}
                alt="[E-S-T]"
                className="w-full max-w-sm sm:max-w-md lg:max-w-none lg:min-w-[500px] xl:min-w-[700px] object-cover drop-shadow-md"
              />
            </div>

            <div className="lg:col-span-3 flex flex-col items-center lg:items-end gap-6 z-20 w-full">
              <div className="w-full flex justify-center lg:justify-end">
                <motion.div
                  className="text-center lg:text-right font-mono text-xs md:text-sm text-slate-800 tracking-wider w-fit"
                  animate={{ y: [0, -8, 8, -8, 8, 0] }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    repeatType: "loop",
                    ease: "easeInOut",
                  }}
                >
                  <p className="font-extrabold">
                    &nbsp; //&nbsp;RAW_STITCHES &nbsp;//&nbsp; UNAPOLOGETIC_FITS
                  </p>
                  <p className="font-extrabold">// CONCRETE JUNGLE</p>
                </motion.div>
              </div>

              <Button
                component={Link}
                variant="contained"
                to="/shop"
                disableElevation
                sx={{
                  backgroundColor: "#D13B19",
                  color: "#FFFFFF",
                  paddingX: { xs: 4, lg: 3 },
                  paddingY: 1.5,
                  fontSize: "0.8rem",
                  fontWeight: "bold",
                  letterSpacing: "0.05em",
                  "&:hover": {
                    backgroundColor: "#B12E12",
                  },
                }}
              >
                SHOP NEW DROPS
              </Button>
            </div>
          </div>
        </Container>

        {/*  */}
        <Box className="w-full  mt-4 z-20 overflow-hidden ">
          <Typography
            variant="h3"
            className="font-black mb-6 px-4 text-[#cc3300]"
          >
            Choose Your Fit
          </Typography>

          <div className="flex overflow-x-auto scrollbar-none  ">
            {products &&
              products.slice(0, 10).map((product, index) => {
                const isInCart = cart.find((item) => item.id === product.id);
                const qty = isInCart?.quantity;

                return (
                  <div
                    key={product.id || index}
                    className="flex flex-col justify-between min-w-[260px] max-w-[260px]  border border-[#aa2200] bg-white"
                  >
                    <div className="w-full h-64 bg-gray-100">
                      <img
                        onClick={() => getSingleProduct(product)}
                        src={product.images[0]}
                        alt={product.title || "Product Image"}
                        className="w-full h-full object-cover cursor-pointer"
                      />
                    </div>
                    <ButtonCard
                      product={product}
                      cart={cart}
                      addToCart={addToCart}
                    />

                    <div className="flex flex-col items-center justify-between p-4  flex-grow">
                      <Typography
                        onClick={() => getSingleProduct(product)}
                        variant="caption"
                        className="text-[#cc3300] text-sm md:text-base mb-2 uppercase text-center cursor-pointer hover:underline"
                      >
                        {product.title}
                      </Typography>
                      <span className="text-[#cc3300] text-lg">
                        ${product.price}
                      </span>
                    </div>
                  </div>
                );
              })}

            {products && products?.length > 10 && (
              <div className="flex flex-col justify-center items-center min-w-[260px] border border-[#cc3300] p-6 bg-white hover:bg-[#fff9f8] ">
                <span className="font-semibold text-[#cc3300] text-xl uppercase mb-6 text-center">
                  More Options
                </span>
                <Button
                  component={Link}
                  to="/shop"
                  variant="outlined"
                  sx={{
                    px: 4,
                    py: 1.5,
                    border: "2px solid #cc3300",
                    color: "#cc3300",
                    fontWeight: 600,
                    textTransform: "uppercase",
                    "&:hover": {
                      backgroundColor: "#cc3300",
                      color: "white",
                      border: "2px solid #cc3300",
                    },
                  }}
                >
                  VIEW ALL
                </Button>
              </div>
            )}
          </div>
        </Box>

        <div className="flex flex-row overflow-hidden whitespace-nowrap bg-black text-white uppercase text-5xl ">
          <motion.div
            className="flex flex-row w-max"
            animate={{ x: ["-50%", "0%"] }}
            transition={{ ease: "linear", duration: 10, repeat: Infinity }}
          >
            {[...Array(12)].map((_, index) => (
              <Typography
                className="flex flex-row items-center"
                key={index}
                sx={{
                  text: "30px",
                  fontWeight: 900,
                  letterSpacing: "0.1rem",
                  color: "#ffffff",
                  textDecoration: "none",
                  fontFamily: "monospace",
                  padding: 2,
                  flexShrink: 0,
                }}
              >
                [E-S-T] wear &nbsp;&nbsp;&nbsp;&nbsp;
                <span className="flex flex-col text-xs">
                  <span>E</span>
                  <span>S</span>
                  <span>T</span>
                </span>
              </Typography>
            ))}
          </motion.div>
        </div>

        {/*  */}
        <Newsletter />
      </main>
    </>
  );
}
