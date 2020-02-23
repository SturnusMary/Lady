import React from 'react';
import Header from '../../components/headerPart/index';
import {TabBar} from '../../components/tabBar/index';
import ScrollToTop from '../../components/scrollToTop/scrollToTop';
import {PreviewCard} from '../../components/previewCard/previewCard';
import bd from '../../bd.json';
import images from '../../img/sports/*.jpg';

export function SportsPage (props) {
    const bdOfSports = bd.sports;
    return (
        <React.Fragment>
            <ScrollToTop />
            <Header title='Sports'/>
            <div className='Page-content'>
                {bdOfSports.map(item => (
                    <PreviewCard category={item.category} key={item.id} id={item.id} src={images[`${item.id}`]} title={item.title} description = {item.description}/>
                ))}
            </div>
            <TabBar />
        </React.Fragment>
    )
}