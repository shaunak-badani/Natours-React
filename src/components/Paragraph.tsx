import "../styles/_typography.scss";

import { type ReactNode } from "react";

type PropType = { 
    children: ReactNode; 
    classNames?: string[]; 
};

const Paragraph = ({children, classNames = []}: PropType) => {

    const allClasses: string = `paragraph ${classNames.join(' ')}`; 

    return (
        <p className={allClasses}>
            {children}
        </p>
    )
};

export default Paragraph;