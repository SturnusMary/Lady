import React from 'react';
import PropTypes from 'prop-types';
import {Header} from '../../components/headerPart/index';
import Banner from '../../img/banner.jpg';
import {TabBar} from '../../components/tabBar/index';
import {Loader} from '../../components/loader/loader';
import {ScrollToTop} from '../../components/scrollToTop/scrollToTop';
import './stylesheet.scss';

export class MainPage extends React.Component {
  
    render(){
        const {isLoading, scroll} = this.props;

        return (
            <React.Fragment>
                <ScrollToTop />
                <Loader isLoading={isLoading} />
                <Header scroll={scroll}/>
                <main className='mainPage-content' style={{display: isLoading ? 'none': 'flex'}}>
                    <div className='banner-block'>
                        <a href='#'>
                            <img src={Banner}></img>
                            <h2>Fashion sale</h2>
                            <div>Check</div>
                        </a>
                    </div>
                   <TabBar />
                </main>
            </React.Fragment>
        )
    }
}

MainPage.propTypes = {
    isLoading: PropTypes.bool,
    scroll: PropTypes.bool,
};