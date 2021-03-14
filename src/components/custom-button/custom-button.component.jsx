import React from 'react';
import './custom-button.styles.scss';


const CustomButton = ({children, isGoogleSignIn ,inverted ,...otherProps}) => (
    <button className={`${inverted?'inverted':''} custom-button`} { ...otherProps}>
        {children}
        {/* this children prop contains the the value of html indside the opening
         and closing of this tag wherever this is used */}
    </button>
);


export default CustomButton;