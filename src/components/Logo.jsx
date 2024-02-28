import { useTheme } from "./theme-provider"

export const Logo = ({width = 128}) => {
    const {theme} = useTheme()
    if(theme=='dark') return <img width={width} src="/logo_dark.svg" alt="" />
    return <img width={width} src="/logo.svg" alt="" />
}