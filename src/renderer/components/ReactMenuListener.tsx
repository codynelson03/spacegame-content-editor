import { useEffect } from "react"
import { useNavigate } from "react-router-dom"

const menuNavigateDestinations : Record<string, string> = {
    "content/items": "items"
}

export default function ReactMenuListener() {
    const navigate = useNavigate()

    useEffect(() => {
        const listener = (ev : Event) => {
            const customEv = ev as CustomEvent
            const detail = customEv.detail as {
                "menu-item": string
            }

            const menuItemName = detail["menu-item"]

            if (menuItemName in menuNavigateDestinations) {                
                navigate(menuNavigateDestinations[menuItemName])
            }
        }
        document.addEventListener("electron-menu", listener)

        return () => {
            document.removeEventListener("electron-menu", listener)
        }
    }, [])
    return <></>
}