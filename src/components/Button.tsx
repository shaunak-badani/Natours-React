import styles from "./Button.module.scss";

const Button = (props: any) => {

    let btnText = props.text || "Default button message.";

    console.log(btnText);

    console.log(props.text);
    return (
        <a href="#" className={[styles.btn, styles.btnWhite].join(" ")}>
            {btnText}
        </a>
    )
};

export default Button;