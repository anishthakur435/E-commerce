import React, { useContext, useState } from "react";
import { Typography, Grid, Card, CardMedia, Box } from "@mui/material";
import { ProductContext } from "../../services/context/getProducts";
import ButtonCard from "../../components/Reusable/ButtonCard";
import ProductGallery from "./ProductGallery";

function Shop() {
  const { products, addToCart, getSingleProduct, cart } =
    useContext(ProductContext);
  const [brokenImages, setBrokenImages] = useState(new Set());

  return (
    <main className="min-h-screen bg-[#f7f6f2] px-4 py-10 sm:px-6 lg:px-10">
      <div className="mx-auto max-w-7xl">
        <div className="mb-8 text-center">
          <p className="text-xs font-bold uppercase tracking-[0.35em] text-[#d33a11]">
            Curated Drop
          </p>
          <Typography
            variant="h3"
            component="h1"
            className="mt-4 font-black uppercase tracking-[0.06em] text-[#d33a11]"
          >
            All Products
          </Typography>
        </div>

        <ProductGallery />
        {/* <Grid container spacing={3}>
          {products.slice(0, 48).map((product) => {
            if (!product.images?.[0] || brokenImages.has(product.id)) {
              return null;
            }

            return (
              <Grid size={{ xs: 12, sm: 6, md: 4 , lg:3 }} key={product.id}>
                <Card className="h-full overflow-hidden border border-[#e7dfd4] bg-white shadow-[0_0_0_1px_rgba(211,58,17,0.04)] transition-shadow duration-200 hover:shadow-lg">
                  <Box className="flex h-full flex-col justify-between">
                    <div className="group overflow-hidden bg-[#f5f1eb]">
                      <CardMedia
                        component="img"
                        onClick={() => getSingleProduct(product)}
                        image={
                          product.images?.[0] ||
                          product?.images?.[1] ||
                          product?.category?.image
                        }
                        onError={() => {
                          setBrokenImages((prev) => {
                            const updated = new Set(prev);
                            updated.add(product.id);
                            return updated;
                          });
                        }}
                        alt={product.title}
                        className="h-[360px] w-full cursor-pointer object-cover  group-hover:scale-105  transition-transform duration-700 "
                      />
                    </div>

                    <ButtonCard
                      product={product}
                      cart={cart}
                      addToCart={addToCart}
                    />

                    <div className="border-t border-[#e7dfd4] bg-[#fffdfb] p-5 text-center">
                      <Typography
                        onClick={() => getSingleProduct(product)}
                        variant="body1"
                        className="mb-2 cursor-pointer font-mono text-base font-semibold text-[#d33a11] hover:underline line-clamp-1"
                      >
                        {product?.title}
                      </Typography>
                      <Typography
                        variant="body1"
                        className="font-mono text-[#d33a11]"
                      >
                        ${product?.price}
                      </Typography>
                    </div>
                  </Box>
                </Card>
              </Grid>
            );
          })}
        </Grid> */}
      </div>
    </main>
  );
}

export default Shop;
