import React, { createContext } from "react";

// Sample product data
  const products = [
    {
      title: "MacBook Pro 16",
      date: "Dec 10, 2024 ",
      describtion: "Laptops",
      button: "In Stock",
      buttonClass:
        "bg-green-100 h-fit px-2 py-[2px] text-[10px] rounded-2xl text-green-500",
    },
    {
      title: "Dell XPS 13",
      date: "Dec 9, 2024",
      describtion: "Laptops",
      button: "In Stock",
      buttonClass:
        "bg-green-100 h-fit px-2 py-[2px] text-[10px] rounded-2xl text-green-500",
    },
    {
      title: "iPhone 15 Pro ",
      date: "Dec 8, 2024",
      describtion: "Mobile",
      button: "Low Stock",
      buttonClass:
        "bg-amber-100 text-amber-900 h-fit px-2 py-[2px] text-[10px] rounded-2xl",
    },
    {
      title: "iPad Air ",
      date: "Dec 7, 2024",
      describtion: "Tablets",
      button: "In Stock ",
      buttonClass:
        "bg-green-100 h-fit px-2 py-[2px] text-[10px] rounded-2xl text-green-500",
    },
    {
      title: "Surface Pro 9",
      date: "Dec 6, 2024",
      describtion: "Tablets",
      button: "Out of Stock",
      buttonClass:
        "bg-red-200 text-red-900 h-fit px-2 py-[2px] text-[10px] rounded-2xl text-green-500",
    },

    {
      title: "MacBook Pro 16",
      date: "Dec 10, 2024 ",
      describtion: "Laptops",
      button: "In Stock",
      buttonClass:
        "bg-green-100 h-fit px-2 py-[2px] text-[10px] rounded-2xl text-green-500",
    },
    {
      title: "Dell XPS 13",
      date: "Dec 9, 2024",
      describtion: "Laptops",
      button: "In Stock",
      buttonClass:
        "bg-green-100 h-fit px-2 py-[2px] text-[10px] rounded-2xl text-green-500",
    },
    {
      title: "iPhone 15 Pro ",
      date: "Dec 8, 2024",
      describtion: "Mobile",
      button: "Low Stock",
      buttonClass:
        "bg-amber-100 text-amber-900 h-fit px-2 py-[2px] text-[10px] rounded-2xl",
    },
    {
      title: "iPad Air ",
      date: "Dec 7, 2024",
      describtion: "Tablets",
      button: "In Stock ",
      buttonClass:
        "bg-green-100 h-fit px-2 py-[2px] text-[10px] rounded-2xl text-green-500",
    },
    {
      title: "Surface Pro 9",
      date: "Dec 6, 2024",
      describtion: "Tablets",
      button: "Out of Stock",
      buttonClass:
        "bg-red-200 text-red-900 h-fit px-2 py-[2px] text-[10px] rounded-2xl text-green-500",
    },
  ];

// Create context
// eslint-disable-next-line react-refresh/only-export-components
export const ProductContext = createContext();

// Context provider component
export const ProductProvider = ({ children }) => {
  return (
    <ProductContext.Provider value={{ products }}>
      {children}
    </ProductContext.Provider>
  );
};
