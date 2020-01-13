import React from 'react';
import PropTypes from 'prop-types';
import {Header} from '../../components/headerPart/index';
import {TabBar} from '../../components/tabBar/index';
import {ScrollToTop} from '../../components/scrollToTop/scrollToTop';
import {PreviewCard} from '../../components/previewCard/previewCard';
import bd from '../../bd.json';
import images from '../../img/jewelry/*.jpg';

export function  JewelryPage (props) {
    const bdOfJewelry = bd.jewelry;
    const {scroll} = props;

    return (
        <React.Fragment>
            <ScrollToTop />
            <Header scroll={scroll} title='Jewelry'/>
            <div className='Page-content'>
                {bdOfJewelry.map(item => (
                    <PreviewCard category={item.category} key={item.id} id={item.id} src={images[`${item.id}`]} title={item.title} description = {item.description}/>
                ))}
            </div>
            {/* <TabBar /> */}
        </React.Fragment>
    )
}

JewelryPage.propTypes = {
    scroll: PropTypes.bool,
};