import { createContext, useState } from "react";
import Orders from "../Pages/Account/Orders";

export const Context = createContext();

export const MyContextProvider = ({ children }) => {

  const [data, setData] = useState([])
  const [product, setProduct] = useState()
  const [quory, setQuory] = useState('')
  const [wishlistOn, setWishListOn] = useState(false)
  const [cartOn, SetCartOn] = useState(false)
  const [wishlist, setWishList] = useState([])
  const [cart, setCart] = useState([])
  const [quantity, setQuantity] = useState(1);
  const [searched, setSearched] = useState(false);
  const [user, setUser] = useState(false);
  const [defaultEmail, setDefaultEmail] = useState('ar885209@gmail.com');
  const [defaultPassword, setDefaultPassword] = useState('Ar12ju34ra@#');
  const [defaultUsername, setDefaultUsername] = useState('Arjun Rathod');
  const [allOrders, setAllOrders] = useState([]);
  const [userEmail, setUserEmail] = useState('');
  const [userPassword, setUserPassword] = useState('');
  const [userContact, setUserContact] = useState('');
  const [userName, setUserName] = useState('');
  const [userAddress, setUserAddress] = useState('');
  const [relatedProductCategory,setRelatedProductCategory] = useState('')

  return (
    <Context.Provider
      value={{ data, setData, cart, setCart, product, setProduct, quantity, setQuantity, quory, setQuory, searched, setSearched, wishlist, setWishList, wishlistOn, setWishListOn, cartOn, SetCartOn, user, setUser, defaultEmail, setDefaultEmail, defaultPassword, setDefaultPassword, defaultUsername, setDefaultUsername, allOrders, setAllOrders,userName,setUserName,userEmail,setUserEmail,userContact,setUserContact,userPassword,setUserPassword,userAddress,setUserAddress,relatedProductCategory,setRelatedProductCategory }}
    >
      {children}
    </Context.Provider>
  );
};