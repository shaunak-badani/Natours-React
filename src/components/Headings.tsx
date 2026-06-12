import "../styles/_typography.scss";

import { type ReactNode } from "react";

type PropType = { 
    children: ReactNode; 
    classNames?: string[]; 
};

const HeadingTertiary = ({children, classNames = []}: PropType) => {

    const allClasses: string = `headingTertiary ${classNames.join(' ')}`; 

    return (
        <h3 className={allClasses}>
            {children}
        </h3>
    )
};

const HeadingSecondary = ({children, classNames = []}: PropType) => {

    const allClasses: string = `headingSecondary ${classNames.join(' ')}`; 

    return (
        <h2 className={allClasses}>
            {children}
        </h2>
    )
};

export { HeadingSecondary, HeadingTertiary };