import "../styles/UtilityClasses.scss"

import { type ReactNode } from "react";

type PropType = { 
    children: ReactNode; 
    classNames?: string[]; 
};

const CenterText = ({ children, classNames = []}: PropType) => {

    const allClasses: string = `uCenterText ${classNames.join(' ')}`; 

    return (
        <div className={allClasses}>
            {children}
        </div>
    )
}

export default CenterText;