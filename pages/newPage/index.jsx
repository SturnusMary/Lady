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

function NewPage ({newList}) {
    return (
        <React.Fragment>
            <ScrollToTop />
            <Header title='New'/>
            <div className='Page-content'>
                {newList && newList[0].array.map(el => <PreviewCard item={el} key={uuidv1()} src={images[el.category][`${el.id}`]}/>)}
            </div>
            <TabBar />
        </React.Fragment>
    )
}

const mapStateToProps = (state) => {
    return {
        newList: state.firestoreR.ordered.newList
    }
}

export default compose(
    connect(mapStateToProps),
    firestoreConnect([{collection: 'newList'}])
)(NewPage);

NewPage.propTypes = {
    newList: PropTypes.array,
};