import React from 'react';
import Header from '../../components/headerPart/index';
import {TabBar} from '../../components/tabBar/index';
import ScrollToTop from '../../components/scrollToTop/scrollToTop';
import {PreviewCard} from '../../components/previewCard/previewCard';
import bd from '../../bd.json';
import images from '../../img/jewelry/*.jpg';

export function  JewelryPage () {
    const bdOfJewelry = bd.jewelry;
    return (
        <React.Fragment>
            <ScrollToTop />
            <Header title='Jewelry'/>
            <div className='Page-content'>
                {bdOfJewelry.map(item => <PreviewCard item={item} key={item.id} src={images[`${item.id}`]}/>)}
            </div>
            <TabBar />
        </React.Fragment>
    )
}