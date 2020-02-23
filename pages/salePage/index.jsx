import React from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import Header from '../../components/headerPart/index';
import {TabBar} from '../../components/tabBar/index';
import ScrollToTop from '../../components/scrollToTop/scrollToTop';
import {PreviewCard} from '../../components/previewCard/previewCard';
import {images} from '../../constants/pages';
const uuidv1 = require('uuid/v1');

function SalePage (props) {
    const {saleList} = props;
    return (
        <React.Fragment>
            <ScrollToTop />
            <Header title='Sale'/>
            <div className='Page-content'>
                {saleList.map(el => (
                    <PreviewCard category={el.category} key={uuidv1()} id={el.id} src={images[el.category][`${el.id}`]} title={el.title} description={el.description}/>
                ))}
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