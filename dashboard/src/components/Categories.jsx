import React from 'react'
import { useProducts } from '../hooks/useProducts'
import CardText from './CardText';
import Products from './Products';
import { useTheme } from '../hooks/theme';

function Categories() {
  const { products } = useProducts();
  const useproducts = products.slice(0, 6);
  const use = useProducts;
  const { theme } = useTheme();
  

  return (
    <div
      className={`flex flex-col gap-4 shadow-sm rounded-md px-6 py-4 ${
        theme === "light" ? "bg-white" : "bg-[#1e293b] border-1 border-gray-600"
      }`}
    >
      <p className=" font-bold text-xl pb-4">Electronics</p>
      <div className=" grid gap-3 items-center md:grid-cols-2 lg:grid-cols-3">
        {products.map((item) => (
          <CardText
            title={item.title}
            date={item.date}
            description={item.describtion}
            button={item.button}
            className={item.buttonClass}
          />
        ))}
      </div>
    </div>
  );
}

export default Categories
