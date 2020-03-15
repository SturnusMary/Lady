import React from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import Header from '../../components/headerPart/index';
import TabBar from '../../components/tabBar/index';
import ScrollToTop from '../../components/scrollToTop/scrollToTop';
import PreviewCard from '../../components/previewCard/previewCard';
import {images} from '../../constants/pages';
const uuidv1 = require('uuid/v1');
import {firestoreConnect} from 'react-redux-firebase';
import {compose} from 'redux';

function SalePage ({saleList}) {
    return (
        <React.Fragment>
            <ScrollToTop />
            <Header title='Sale'/>
            <div className='Page-content'>
                {saleList && saleList[0].array.map(el => <PreviewCard item={el} key={uuidv1()} src={images[el.category][`${el.id}`]}/>)}
            </div>
            <TabBar />
        </React.Fragment>
    )
}

const mapStateToPropsSalePage = (state) => {
    return {
        saleList: state.firestoreR.ordered.saleList
    }
}

export default compose(
    connect(mapStateToPropsSalePage),
    firestoreConnect([{collection: 'saleList'}])
)(SalePage);

SalePage.propTypes = {
    saleList: PropTypes.array,
};