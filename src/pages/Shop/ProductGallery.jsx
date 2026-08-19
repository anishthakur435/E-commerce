import React, { useContext, useState, useMemo } from "react";
import { ProductContext } from "../../services/context/getProducts";
import { Box, Typography } from "@mui/material";
import ButtonCard from "../../components/Reusable/ButtonCard";

function ProductGallery() {
  const { products, productCategory, getSingleProduct, cart, addToCart } =
    useContext(ProductContext);
  const [brokenImages, setBrokenImages] = useState(new Set());
  const [selectedCategory, setSelectedCategory] = useState("All");

  const categories = useMemo(
    () => ["All", ...(productCategory || [])],
    [productCategory],
  );

  const filteredProducts =
    selectedCategory === "All"
      ? products
      : products?.filter(
          (product) => product.category?.name === selectedCategory,
        );

  return (
    <Box className="w-full mt-12 z-20 overflow-hidden px-4 lg:px-0">
      <div className="flex flex-wrap gap-2 justify-center mb-10">
        {categories.map((category, index) => (
          <button
            key={index}
            onClick={() => setSelectedCategory(category)}
            className={`p-1 rounded-sm font-bold uppercase transition-colors ${
              selectedCategory === category
                ? "bg-[#cc3300] text-white border-2 border-[#cc3300]"
                : "bg-white text-[#cc3300] border-2 border-[#cc3300] hover:bg-[#ffe5e0]"
            }`}
          >
            {category}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 justify-items-center max-w-7xl mx-auto">
        {filteredProducts?.map((product, index) => {
          if (!product.images?.[0] || brokenImages.has(product.id)) {
            return null;
          }
          return (
            <div
              key={product.id || index}
              className="flex flex-col justify-between w-full max-w-[260px] border border-[#aa2200] bg-white transition-transform hover:-translate-y-1 group"
            >
              <div className="w-full h-64 bg-gray-100 overflow-hidden">
                <img
                  onClick={() => getSingleProduct(product)}
                  src={
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
                  className="h-64 w-full cursor-pointer object-cover group-hover:scale-105 transition-transform duration-700"
                />
              </div>

              <ButtonCard product={product} cart={cart} addToCart={addToCart} />

              <div className="flex flex-col items-center justify-between p-4 flex-grow">
                <Typography
                  onClick={() => getSingleProduct(product)}
                  variant="caption"
                  className="text-[#cc3300] text-sm md:text-base mb-2 uppercase text-center cursor-pointer hover:underline font-semibold"
                >
                  {product.title}
                </Typography>
                <span className="text-[#cc3300] text-lg font-bold">
                  ${product.price}
                </span>
              </div>
            </div>
          );
        })}
      </div>

      {filteredProducts?.length === 0 && (
        <div className="text-center py-12 text-[#cc3300] uppercase tracking-widest font-bold w-full">
          No products available in this category.
        </div>
      )}
    </Box>
  );
}

export default ProductGallery;
