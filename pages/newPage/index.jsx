import React from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import Header from '../../components/headerPart/index';
import {TabBar} from '../../components/tabBar/index';
import ScrollToTop from '../../components/scrollToTop/scrollToTop';
import {PreviewCard} from '../../components/previewCard/previewCard';
import {images} from '../../constants/pages';
const uuidv1 = require('uuid/v1');

function NewPage (props) {
    const {newList} = props;
    return (
        <React.Fragment>
            <ScrollToTop />
            <Header title='New'/>
            <div className='Page-content'>
                {newList.map(el => (
                    <PreviewCard category={el.category} key={uuidv1()} id={el.id} src={images[el.category][`${el.id}`]} title={el.title} description={el.description}/>
                ))}
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