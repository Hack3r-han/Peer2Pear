import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import { Products,ProductForm, ProductLi } from "../Page/Crud";

const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        children: [
            {
                path: "/",
                element: <Products />

            }
           
        ]
    }
])

// problemas en el router 