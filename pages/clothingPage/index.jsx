import React from 'react';
import Header from '../../components/headerPart/index';
import {TabBar} from '../../components/tabBar/index';
import ScrollToTop from '../../components/scrollToTop/scrollToTop';
import {PreviewCard} from '../../components/previewCard/previewCard';
import bd from '../../bd.json';
import images from '../../img/clothing/*.jpg';

export function ClothingPage (props) {
    const bdOfClothing = bd.clothing;
    return (
        <React.Fragment>
            <ScrollToTop />
            <Header title='Clothing'/>
            <div className='Page-content'>
                {bdOfClothing.map(item => (
                    <PreviewCard category={item.category} key={item.id} id={item.id} src={images[`${item.id}`]} title={item.title} description = {item.description}/>
                ))}
            </div>
            <TabBar />
        </React.Fragment>
    )
}