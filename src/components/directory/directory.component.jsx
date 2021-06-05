import React from 'react';
import MenuItem from '../menu-item/menu-item.component';
import './directory.styles.scss';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectDirectorySections } from '../../redux/directory/directory.selector';
//as this is going to have the menu items as data in state so we use this as class components
const Directory  = ({section}) =>{
        return (
            <div className= "directory-menu">
                {section.map(({id, ...otherSectionProps}) =>
                    <MenuItem key ={id} {...otherSectionProps}/>)}
            </div>
        )
    }

const mapStateToProps = createStructuredSelector({
    section: selectDirectorySections
})

export default connect(mapStateToProps)(Directory);