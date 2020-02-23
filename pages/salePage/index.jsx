import React from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import Header from '../../components/headerPart/index';
import {TabBar} from '../../components/tabBar/index';
import ScrollToTop from '../../components/scrollToTop/scrollToTop';
import {PreviewCard} from '../../components/previewCard/previewCard';
import {images} from '../../constants/pages';
const uuidv1 = require('uuid/v1');

function SalePage ({saleList}) {
    return (
        <React.Fragment>
            <ScrollToTop />
            <Header title='Sale'/>
            <div className='Page-content'>
                {saleList.map(el => <PreviewCard item={el} key={uuidv1()} src={images[el.category][`${el.id}`]}/>)}
            </div>
            <TabBar />
        </React.Fragment>
    )
}

const mapStateToPropsSalePage = (state) => {
    return {
        saleList: state.hScrollingR.saleList,
    }
}

export default connect(mapStateToPropsSalePage)(SalePage);

SalePage.propTypes = {
    saleList: PropTypes.array,
};