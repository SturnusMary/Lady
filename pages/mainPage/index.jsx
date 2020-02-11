import React from 'react';
import PropTypes from 'prop-types';
import {ScrollToTop} from '../../components/scrollToTop/scrollToTop';
import {Header} from '../../components/headerPart/index';

import {TabBar} from '../../components/tabBar/index';
import {Loader} from '../../components/loader/loader';
import {HScrolling} from '../../components/hScrolling/hScrolling';
import {SimpleSlider } from '../../components/сarousel/сarousel';
import './stylesheet.scss';

export class MainPage extends React.Component {
  
    render(){
        const {isLoading, onGetList, onGetSaleList} = this.props;

        return (
            <React.Fragment>
                <ScrollToTop />
                <Loader isLoading={isLoading} />
                <Header />
                <main className='mainPage-content' style={{display: isLoading ? 'none': 'flex'}}>
                    <SimpleSlider  />
                    <HScrolling onGetSaleList={onGetSaleList} newPrice='New Price' color='#FA3572' label='Sale'>Super summer sale</HScrolling>
                    <HScrolling onGetList={onGetList} color='#A1A7DB' label='New'>You’ve never seen it before!</HScrolling>
                   <TabBar />
                </main>
            </React.Fragment>
        )
    }
}

MainPage.propTypes = {
    isLoading: PropTypes.bool,
    onGetList: PropTypes.func,
};