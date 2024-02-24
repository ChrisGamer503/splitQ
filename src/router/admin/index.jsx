import AdminIndex from "../../pages/AdminPages/AdminIndex"

const router = {
    caseSensitive: true,
    path: "/",
    children: [
        {
            index: true,
            element: (
                <AdminIndex/>
            )
        }
    ]
}
export default router