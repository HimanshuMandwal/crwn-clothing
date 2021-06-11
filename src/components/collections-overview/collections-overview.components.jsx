import React from 'react';

import './collections-overview.styles.scss';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectCollectionForPreview } from '../../redux/shop/shop.selector'
import CollectionPreview from '../collection-preview/collection-preview.component';

const CollectionsOverview = ({collections}) => {
   return( <div className="collection-overview">
        {
            collections.map(({ id, ...otherCollectionProps }) => (
                <CollectionPreview  key={id} {...otherCollectionProps} />
            ))
        }
    </div>)
}

const mapStateToProps = createStructuredSelector({
    collections: selectCollectionForPreview
})

export default connect(mapStateToProps)(CollectionsOverview);
