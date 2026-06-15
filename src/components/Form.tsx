import type { ReactNode } from "react";
import { type ComponentProps } from "react";
import "./Form.scss"

const Form = ({children, classNames = []}: PropType) => {

    const allClasses: string = `form ${classNames.join(' ')}`; 

    return (
        <form action="#" className={allClasses}>
            {children}
        </form>
    )
}

type PropType = { 
    children: ReactNode; 
    classNames?: string[]; 
};

const FormGroup = ({children, classNames = []}: PropType) => {
    
    const allClasses: string = `formGroup ${classNames.join(' ')}`; 

    return (
        <div className={allClasses}>
            {children}
        </div>
    )
}

const Input = ({classNames = [], type = "text", ...props}: ComponentProps<'input'> & { 
    classNames?: string[];
    type: string;
}) => {

    const allClasses: string = `formInput ${classNames.join(' ')}`; 

    return (
        <input type={type} className={allClasses} {...props} />
    )
}

const FormLabel = ({children, classNames = []}: ComponentProps<'label'> & PropType) => {

    const allClasses: string = `formLabel ${classNames.join(' ')}`; 

    return (
        <label className={allClasses}>
            {children}
        </label>
    )
}

type RadioPropType = { 
    classNames?: string[];
    label: string;
    labelFor: string;
    name: string;

};

const RadioInput = ({classNames = [], name, labelFor, label } : RadioPropType) => {

    const allClasses: string = `formRadioGroup ${classNames.join(' ')}`; 

    return (
        <div className={allClasses}>
            <input type="radio" className="formRadioInput" id={labelFor} name={name} />
            <label htmlFor={labelFor} className="formRadioLabel">
                <span className="formRadioButton"></span>
                {label}
            </label>
        </div>
    )

}



export default Form;

export { FormGroup, FormLabel, Input, RadioInput };