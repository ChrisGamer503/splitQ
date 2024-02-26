import { useTheme } from "./theme-provider"

export const Logo = () => {
    const {theme} = useTheme()
    if(theme=='dark') return <img src="/logo_dark.svg" alt="" />
    return <img src="/logo.svg" alt="" />
}