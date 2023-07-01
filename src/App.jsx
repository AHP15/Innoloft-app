import { useEffect } from "react";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';

import { fetchConfig } from './slices/ConfigSlice';
import { fetchProduct } from './slices/ProductSlice';
import { fetchTRL } from './slices/TRLSlice';

import Home from './components/routes/Home';
import Product from './components/routes/Product';
import EditProduct from './components/routes/EditProduct';
import Loading from './components/utils/Loading';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    errorElement: "Error",
  },
  {
    path: "/product",
    element: <Product />,
    errorElement: "Error",
  },
  {
    path: "/product/edit",
    element: <EditProduct />,
    errorElement: "Error",
  },
]);

const App = () => {

  const dispatch = useDispatch();
  const config = useSelector(state => state.config);
  const product = useSelector(state => state.product);
  console.log(config, product);
  useEffect(() => {
    dispatch(fetchConfig());
    dispatch(fetchProduct());
    dispatch(fetchTRL());
  }, [dispatch]);

  if(config.pending || product.pending) return <Loading />;
  return <RouterProvider router={router}/>;
};

export default App;