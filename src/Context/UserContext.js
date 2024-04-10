import { createContext, useState } from "react";

export const Context = createContext();

export const MyContextProvider = ({ children }) => {

    const [data,setData] = useState([])
    const [product, setProduct] = useState()
    const [quory, setQuory] = useState('')
    const [wishlistOn, setWishListOn] = useState(false)
    const [wishlist, setWishList] = useState([])
    const [cart,setCart] = useState([
      
    ])
    const [quantity, setQuantity] = useState(1);
    const [searched,setSearched] = useState(false)

  return (
    <Context.Provider
      value={{data,setData,cart,setCart,product, setProduct,quantity, setQuantity,quory,setQuory,searched,setSearched,wishlist, setWishList,wishlistOn, setWishListOn}}
    >
      {children}
    </Context.Provider>
  );
};