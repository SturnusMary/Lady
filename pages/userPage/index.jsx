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

class UserPage extends React.Component {
    render(){
        const {auth} = this.props;
        const {initials, name, username} = this.props.profile;

        if(!auth.uid) return <Redirect to='/' />
        return(
            <React.Fragment>
                <ScrollToTop />
                <Header />
                <main className='userPage-content'>
                    <div className='initials'>
                        <span>{initials}</span>
                    </div>
                    <div className='profile-data'>
                        <div className='profile-data__block'>
                            <span>Name</span>
                            <p>{name}</p>
                        </div>
                        <div className='profile-data__block'>
                            <span>UserName</span>
                            <p>{username}</p>
                        </div>
                    </div>
                    <TabBar />
                </main>
            </React.Fragment>
        )
    }
}
const mapStateToProps = (state) => {
    return {
        auth: state.firebaseR.auth,
        profile: state.firebaseR.profile,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {

    }
}
export default connect(mapStateToProps)(UserPage);

UserPage.propTypes = {
};