import { createBrowserRouter } from "react-router-dom";
import inicioAdmin from "./router/admin"
import inicioUser from "./router/user"
import Error404 from "./pages/error";
import Animador from "./components/routes/Animador";

const router = createBrowserRouter([
    {
        element: <Animador/>, //Aqui el animador
        children: [
            inicioUser,
            inicioAdmin
        ],
        errorElement: <Error404/>
    }
])

export {router}