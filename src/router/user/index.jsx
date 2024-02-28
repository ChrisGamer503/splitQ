import Login from "../../pages/UserPages/Login";
import UserIndex from "../../pages/UserPages/UserIndex";
import Register from "../../pages/UserPages/Register";

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
        {
            path: "register",
            element: <Register/>
        } 
        
    ]
}

export default router