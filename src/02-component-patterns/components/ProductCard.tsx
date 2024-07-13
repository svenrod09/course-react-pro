import styles from "../styles/styles.module.css";
import { useProduct } from "../hooks/useProducts";
import { createContext, CSSProperties, ReactElement } from "react";
import { Product, ProductContextProps } from "../interfaces/interfaces";

export const ProductContext = createContext({} as ProductContextProps);
const { Provider } = ProductContext;

export interface Props {
  product: Product;
  children?: ReactElement | ReactElement[];
  className?: string;
  style?: CSSProperties;
}

export const ProductCard = ({ children, product, className, style }: Props) => {
  const { counter, increaseBy } = useProduct();

  return (
    <Provider
      value={{
        product,
        counter,
        increaseBy,
      }}
    >
      <div className={ `${styles.productCard} ${ className }` } style={ style }>
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
