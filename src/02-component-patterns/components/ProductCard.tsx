import styles from "../styles/styles.module.css";
import { useProduct } from "../hooks/useProducts";
import { createContext } from "react";
import { ProductContextProps, ProductCardProps } from "../interfaces/interfaces";



export const ProductContext = createContext({} as ProductContextProps);
const { Provider } = ProductContext;

export const ProductCard = ({ children, product }: ProductCardProps) => {
  const { counter, increaseBy } = useProduct();

  return (
    <Provider
      value={{
        product,
        counter,
        increaseBy,
      }}
    >
      <div className={styles.productCard}>
        {children}

        {/* 
        <ProductImage img={ product.img } />  

        <ProductTitle title={ product.title } />

        <ProductButtons increaseBy={ increaseBy } counter={ counter }  />
        */}
      </div>
    </Provider>
  );
};
