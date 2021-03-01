import React from 'react';
import './custom-button.styles.scss';


const CustomButton = ({children, ...otherProps}) => (
    <button className='custom-button' { ...otherProps}>
        {children}
        {/* this children prop contains the the value of html indside the opening
         and closing of this tag wherever this is used */}
    </button>
);


export default CustomButton;