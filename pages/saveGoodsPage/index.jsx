import React from 'react';
import Header from '../../components/headerPart/index';
import PropTypes from 'prop-types';
import './stylesheet.scss';
import ScrollToTop from '../../components/scrollToTop/scrollToTop';
import TabBar from '../../components/tabBar/index';
import * as Actions from '../../actions/actions';
import {connect} from 'react-redux';
import {firestoreConnect} from 'react-redux-firebase';
import {compose} from 'redux';
import {Redirect} from 'react-router-dom';
import {images} from '../../constants/pages';
import PreviewCard from '../../components/previewCard/previewCard';
const uuidv1 = require('uuid/v1');
import crown from '../../img/crown.png';
import {doSaved} from '../../components/save&bayFunc/save&bayFunc';

class SaveGoodsPage extends React.Component {

    render(){
        const {auth, saved} = this.props;
        let user = saved && saved.find(el => el.id === auth.uid);
        const content = user ? (
            !user.user.length ? (
                <div className='empty-page'>
                    <img src={crown} width='100px'></img> 
                    <div>It's empty, Your Majesty.</div>
                </div>
            ) : (
                user.user.map(el => <PreviewCard item={el} key={uuidv1()} src={images[el.category][`${el.id}`]}/>)
        )): (
            <div>Loading...</div>
        )

        return(
            <React.Fragment>
                <ScrollToTop />
                <Header title='Favorites'/>
                <main className='saveGoodsPage-content'>
                    {content}
                </main>
                <TabBar />
            </React.Fragment>
        )
    }
}
const mapStateToProps = (state) => {
    // console.log(state)
    return {
        auth: state.firebaseR.auth,
        saved: state.firestoreR.ordered.saved,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {

    }
}
export default compose(
    connect(mapStateToProps),
    firestoreConnect([{collection: 'saved'}])
)(SaveGoodsPage);

SaveGoodsPage.propTypes = {
};

// const content = user && user.user ? (
//     user.user.map(el => <PreviewCard item={el} key={uuidv1()} src={images[el.category][`${el.id}`]}/>)
// ) : (
//     <div>Loading post...</div>
// )