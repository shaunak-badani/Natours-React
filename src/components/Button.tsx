import type { ComponentProps, ReactNode } from "react";
import styles from "./Button.module.scss";

const ColorSchemes: Record<string, string> = { White: styles.btnWhite, Green: styles.btnGreen };
type ColorSchemeKey = keyof typeof ColorSchemes;

const Button = ({scheme, children, ...props}: ComponentProps<'a'> & { scheme?: ColorSchemeKey, children? : ReactNode}) => {

    const colorScheme: string = scheme || "White";
    return (
        <a className={[styles.btn, ColorSchemes[colorScheme]].join(" ")} {...props} >
            {children || "Default button message"}
        </a>
    )
};

const SecondaryButton = ({children} : {children : ReactNode}) => {
    return (
        <a href="#" className={styles.btnText}>
            {children}
        </a>

    )
}

export default Button;

export { SecondaryButton, type ColorSchemeKey };