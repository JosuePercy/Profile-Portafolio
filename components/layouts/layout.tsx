
import { useEffect } from "react"
import { NavBar } from "../ui"

export const Layout = () => {
    useEffect(() => {
        console.log("Width: " + window.innerWidth)
        console.log("Height: " + window.innerHeight)
    }, [])

    return (
        <>
            <NavBar />
        </>
    )
}

