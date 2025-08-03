import { useContext } from "react";
import { ProductContext} from "../context/ProductsContext";

export const useProducts = () => {
  const context = useContext(ProductContext);
  if (!context) {
    throw new Error("useUser must be used within a UserProvider");
  }
  return context;
};
