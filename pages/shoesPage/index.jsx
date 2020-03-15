import React from 'react';
import Header from '../../components/headerPart/index';
import TabBar from '../../components/tabBar/index';
import ScrollToTop from '../../components/scrollToTop/scrollToTop';
import PreviewCard from '../../components/previewCard/previewCard';
import './stylesheet.scss';
import bd from '../../bd.json';
import images from '../../img/shoes/*.jpg';

export function ShoesPage() {
    const bdOfShoes = bd.shoes;
    return (
        <React.Fragment>
            <ScrollToTop />
            <Header title='Shoes'/>
            <div className='Page-content'>
                {bdOfShoes && bdOfShoes.map(item => <PreviewCard item={item} key={item.id} src={images[`${item.id}`]}/>)}
            </div>
            <TabBar />
        </React.Fragment>
    )
}