import styles from "./GridComponents.module.scss";

const Col = ({length, total, children} : any) => {

    const attributeName: string = `col${length}of${total}`;

    return (
        <div className={styles[attributeName]}>
            {children}
        </div>    
    )
}

export default Col;