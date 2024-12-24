
import { NavBar } from "../shared/menu"

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

