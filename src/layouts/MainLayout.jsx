// importa outlet module da react-router
import { Outlet } from "react-router-dom"

// importa header
import Header from "./../components/Header"

export default function MainLayout() {

    return (
        <>
            <Header />
            <main className="container">
                <Outlet />
            </main>
        </>


    )
}