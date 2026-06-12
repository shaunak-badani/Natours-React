import styles from "./GridComponents.module.scss";

const Row = ({children}: any) => {

    return (
        <div className={styles.row}>
            {children}
        </div>
    )
}

export default Row;