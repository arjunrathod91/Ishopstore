import './App.scss';
import { createBrowserRouter, RouterProvider,Outlet } from 'react-router-dom';
import Navbar from './Components/Navbar/Navbar';
import Home from './Pages/Home/Home';
import Products from './Pages/Products/Products';
import Product from './Pages/Product/Product';
import Footer from './Components/Footer/Footer';

function App() {

  const Layout = ()=>{
    return(
      <div className='app'>
        <Navbar/>
        <Outlet/>
        <Footer/>
      </div>
    )
  }

  const router = createBrowserRouter([
    {
      path:"/",
      element:<Layout/>,
      children:[
        {
          path:"/",
          element:<Home/>,
        },
        {
          path:"/products/:id",
          element:<Products/>,
        },
        {
          path:"/product/:id",
          element:<Product/>,
        }
      ]
    }
  ])
  
  return (
    <div className="App">
      {/* <Navbar/> */}
      
      <RouterProvider router={router}/>
    </div>
  );
}

export default App;
