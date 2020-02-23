import React from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import Header from '../../components/headerPart/index';
import {TabBar} from '../../components/tabBar/index';
import ScrollToTop from '../../components/scrollToTop/scrollToTop';
import {PreviewCard} from '../../components/previewCard/previewCard';
import {images} from '../../constants/pages';
const uuidv1 = require('uuid/v1');

function NewPage ({newList}) {
    return (
        <React.Fragment>
            <ScrollToTop />
            <Header title='New'/>
            <div className='Page-content'>
                {newList.map(el => <PreviewCard item={el} key={uuidv1()} src={images[el.category][`${el.id}`]}/>)}
            </div>
            <TabBar />
        </React.Fragment>
    )
}

const mapStateToPropsNewPage = (state) => {
    return {
        newList: state.hScrollingR.newList,
    }
}

export default connect(mapStateToPropsNewPage)(NewPage);

NewPage.propTypes = {
    newList: PropTypes.array,
};