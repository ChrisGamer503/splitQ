import Login from "../../pages/UserPages/Login";
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
        } ,
        {
            path: "login",
            element: <Login/>
        },
        /*{
            path: "register",
            element: <Register/>
        } */
        
    ]
}

export default router