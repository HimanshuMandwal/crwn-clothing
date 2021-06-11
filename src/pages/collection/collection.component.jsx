import React from 'react';
import CollectionItem from '../../components/collection-item/collection-item.component';
import './collection.styles.scss';
import { connect } from 'react-redux';
import {selectCollection} from '../../redux/shop/shop.selector';

const CollectionPage = ({collection}) => {
    const {title , items} = collection;
    return(
        <div className='collection-page'>
            <h2 className='title '>{title}</h2>
            <div className='items'>
                {
                    items.map(
                        item => (<CollectionItem className='collection-item' key={item.id} item={item}/>)
                    )
                }
            </div>
        </div>
    )
}

const mapStatesToProps = (state , ownProps) =>({
    collection: selectCollection(ownProps.match.params.collectionId)(state),
})
// selectCollection(ownProps.match.params.collectionId) this returns a function that is a createSelector function for
// that we send state as params to that
export default connect(mapStatesToProps)(CollectionPage);