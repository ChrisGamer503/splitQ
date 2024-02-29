import Login from "../../pages/UserPages/Login";
import UserIndex from "../../pages/UserPages/UserIndex";
import VerificarCuenta from "../../pages/UserPages/VerificarCuenta";

const router = {
    caseSensitive: true,
    path: "/",
    children: [
        {
            index: true,
            element: (
                <UserIndex/>
            )
        } ,
        {
            path: "login",
            element: <Login/>
        },
        /*{
            path: "register",
            element: <Register/>
        } */
        
        {
            path: "verificarCuenta",
            element: <VerificarCuenta />
        },
        
    ]
}

export default router