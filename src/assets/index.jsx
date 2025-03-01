import { createHashRouter } from "react-router-dom";
import FrontLayout from "../layouts/FrontLayout";
import HomePage from "../pages/HomePage";
import ProductsPage from "../pages/ProductsPage";
import CartPage from "../pages/CartPage";
import ProductDetailPage from "../pages/ProductDetailPage";

const router = createHashRouter([
    {
        path: '/',
        element: <FrontLayout />,
        children: [
            {
                path: '',
                element: <HomePage />
            },
            {
                path: 'products',
                element: <ProductsPage />
            },
            {
                path: 'products/:id',
                element: <ProductDetailPage />
            },
            {
                path: 'cart',
                element: <CartPage />
            }
        ]
        // errorElement: <ErrorPage />
    }
])

export default router;