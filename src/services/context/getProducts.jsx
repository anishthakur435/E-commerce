import React, { createContext, useState, useEffect } from "react";
import AxiosApi from "../api";
import { useNavigate } from "react-router-dom";
import { Toaster } from "../../components/Reusable/ToastNotification";

export const ProductContext = createContext();

export default function ProductProvider({ children }) {
  const navigate = useNavigate();
  const [products, setProducts] = useState([]);
  const [receiptData, setReceiptData] = useState([]);
  const [cart, setCart] = useState([]);
  const [singleProduct, setSingleProduct] = useState(null);

  // Get Products initially from apiRequest
  const fetchProducts = async () => {
    try {
      const data = await AxiosApi.get("/products");
      setProducts(data);
    } catch (error) {
      console.error("Error fetching products:", error);
    }
  };

  //only to getproducts once
  useEffect(() => {
    fetchProducts();
  }, []);

  //
  const productCategory = Array.from(
    new Set(products.map((products) => products.category.name)),
  );

  // Function To Add Items to cart  with quantity
  const addToCart = (product, quantity) => {
    setCart((prev) => {
      const existingProduct = prev.find((item) => item.id === product.id);
      if (existingProduct) {
        return prev.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + (quantity || 1) }
            : item,
        );
      } else {
        return [...prev, { ...product, quantity: quantity || 1 }];
      }
    });
    Toaster(
      "success",
      `Item added to Cart ${product.title.split(" ").slice(1, 4).join(" ") + "..."}`,
    );
    // navigate("/cart");
  };

  // Function to update  single item quantity
  const updateCartItemQuantity = (productId, quantity) => {
    setCart((prev) =>
      prev.map((item) =>
        item.id === productId ? { ...item, quantity } : item,
      ),
    );
    Toaster("success", `Successfully Updated quantity to ${quantity}`);
    // navigate("/cart");
  };

  // Delete item form cart
  const deleteFromCart = (productId) => {
    setCart((prev) => prev.filter((item) => item.id !== productId));
    Toaster("error", "Item removed");
  };

  //cart items
  const cartCount = cart?.length;

  //  Total cart Value
  const cartTotal = cart.reduce((acc, product) => {
    return acc + product.price * (product.quantity || 1);
  }, 0);

  // increase quantity by 1
  const increaseQuantity = (productId) => {
    setCart((prev) =>
      prev.map((item) =>
        item.id === productId
          ? { ...item, quantity: (item.quantity || 1) + 1 }
          : item,
      ),
    );
    // Toaster("error", "Item removed");
  };

  // decrease by 1
  const decreaseQuantity = (productId) => {
    setCart((prev) =>
      prev.map((item) =>
        item.id === productId
          ? { ...item, quantity: Math.max(1, (item.quantity || 1) - 1) }
          : item,
      ),
    );
  };

  // total no of items in Cart
  const totalCartQuantity = cart
    .map((item) => item.quantity)
    .reduce((acc, quantity) => acc + quantity, 0);

  //get a product directly
  const getSingleProduct = (product) => {
    setSingleProduct(product);
    navigate("/view");
  };

  return (
    <ProductContext.Provider
      value={{
        products,
        productCategory,
        cart,
        addToCart,
        deleteFromCart,
        cartCount,
        cartTotal,
        increaseQuantity,
        decreaseQuantity,
        totalCartQuantity,
        getSingleProduct,
        singleProduct,
        updateCartItemQuantity,
        receiptData,
        setReceiptData,
      }}
    >
      {children}
    </ProductContext.Provider>
  );
}
