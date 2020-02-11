import React from 'react';
import PropTypes from 'prop-types';
import {Header} from '../../components/headerPart/index';
import {TabBar} from '../../components/tabBar/index';
import {ScrollToTop} from '../../components/scrollToTop/scrollToTop';
import {PreviewCard} from '../../components/previewCard/previewCard';
import bd from '../../bd.json';
import images from '../../img/bags/*.jpg';

export function BagsPage (props) {
    const bdOfBags = bd.bags;

    return (
        <React.Fragment>
            <ScrollToTop />
            <Header title='Bags'/>
            <div className='Page-content'>
                {bdOfBags.map(item => (
                    <PreviewCard category={item.category} key={item.id} id={item.id} src={images[`${item.id}`]} title={item.title} description = {item.description}/>
                ))}
            </div>
            {/* <TabBar /> */}
        </React.Fragment>
    )
}

BagsPage.propTypes = {
};