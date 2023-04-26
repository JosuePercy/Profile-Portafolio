
import { useEffect } from "react"
import { NavBar } from "../ui"
type Props = {
    children: any
}
export const Layout = ({ children }: Props) => {
    // useEffect(() => {
    //     console.log("Width : movil: App" + window.innerWidth)
    //     console.log("Height : movil App" + window.innerHeight)
    //     alert("Width: " + window.innerWidth)
    //     alert("Height: " + window.innerHeight)
    // }, [])

    return (
        <>
            <NavBar />
            {children}
        </>
    )
}

