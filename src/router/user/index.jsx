/* import Login from "../../pages/Login";
import Register from "../../pages/Register"; */
import UserIndex from "../../pages/UserPages/UserIndex";

const router = {
    caseSensitive: true,
    path: "/",
    children: [
        {
            index: true,
            element: (
                <UserIndex/>
            )
        }/* ,
        {
            path: "login",
            element: <Login/>
        },
        {
            path: "register",
            element: <Register/>
        } */
        
    ]
}

export default router