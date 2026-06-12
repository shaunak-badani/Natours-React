import type { ReactNode } from "react";
import styles from "./Button.module.scss";

const Button = (props: any) => {

    let btnText = props.text || "Default button message.";

    return (
        <a href="#" className={[styles.btn, styles.btnWhite].join(" ")}>
            {btnText}
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

export { SecondaryButton };