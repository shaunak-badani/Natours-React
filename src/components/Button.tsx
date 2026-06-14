import type { ReactNode } from "react";
import styles from "./Button.module.scss";

const ColorSchemes: Record<string, string> = { White: styles.btnWhite, Green: styles.btnGreen };
type ColorSchemeKey = keyof typeof ColorSchemes;

const Button = (props: { scheme?: ColorSchemeKey, children? : ReactNode}) => {

    const colorScheme: string = props.scheme || "White";
    return (
        <a href="#" className={[styles.btn, ColorSchemes[colorScheme]].join(" ")}>
            {props.children || "Default button message"}
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