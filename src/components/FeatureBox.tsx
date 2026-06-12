import type { ReactNode } from "react";
import "./FeatureBox.scss";


const FeatureBox = ({ children } : { children : ReactNode }) => {
    return (
        <div className="featureBox">
            {children}
        </div>
    )
}

const FeatureIcon = ({ iconName } : { iconName : string }) => {

    const allClasses: string = `featureBoxIcon ${iconName}`;

    return (
        <i className={allClasses} />
    )
}

const FeatureBoxText = ({ children } : { children : ReactNode }) => {
    return (
        <p className="featureBoxText">{children}</p>
    )
}

export default FeatureBox;

export { FeatureIcon, FeatureBoxText };

