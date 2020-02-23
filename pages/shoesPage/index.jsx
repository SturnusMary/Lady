import React from 'react';
import Header from '../../components/headerPart/index';
import {TabBar} from '../../components/tabBar/index';
import ScrollToTop from '../../components/scrollToTop/scrollToTop';
import {PreviewCard} from '../../components/previewCard/previewCard';
import './stylesheet.scss';
import bd from '../../bd.json';
import images from '../../img/shoes/*.jpg';

export function ShoesPage (props) {
    const bdOfShoes = bd.shoes;
    return (
        <React.Fragment>
            <ScrollToTop />
            <Header title='Shoes'/>
            <div className='Page-content'>
                {bdOfShoes.map(item => (
                    <PreviewCard key={item.id} category={item.category} id={item.id} src={images[`${item.id}`]} title={item.title} description={item.description}/>
                ))}
            </div>
            <TabBar />
        </React.Fragment>
    )
}