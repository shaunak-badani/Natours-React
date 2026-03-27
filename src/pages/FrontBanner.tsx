import React from 'react';
import styles from './FrontBanner.module.css';
import logo from "../assets/img/logo-white.png";

const FrontBanner = () => {
    return (
        <header className={styles.header}>
            <div className={styles.logoBox}>
                <img src={logo} alt="Logo" className={styles.logo} />
            </div>
            <div className={styles.textBox}>
                <h1 className={styles.headingPrimary}>
                    <span className={styles.headingPrimaryMain}>Outdoors </span>
                    <span className={styles.headingPrimarySub}>is where life happens</span>
                </h1>
            </div>
        </header> 
    );
};

export default FrontBanner;