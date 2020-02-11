import React from 'react';
import PropTypes from 'prop-types';
import {Header} from '../../components/headerPart/index';
import {TabBar} from '../../components/tabBar/index';
import {ScrollToTop} from '../../components/scrollToTop/scrollToTop';
import {PreviewCard} from '../../components/previewCard/previewCard';

import bags from '../../img/bags/*.jpg';
import sports from '../../img/sports/*.jpg';
import clothing from '../../img/clothing/*.jpg';
import jewelry from '../../img/jewelry/*.jpg';
import shoes from '../../img/shoes/*.jpg';
const images = {shoes, bags, jewelry, clothing, sports};
const uuidv1 = require('uuid/v1');

export function SalePage (props) {
    const {list} = props;

    return (
        <React.Fragment>
            <ScrollToTop />
            <Header title='New'/>
            <div className='Page-content'>
                {list.map(el => (
                    <PreviewCard category={el.category} key={uuidv1()} id={el.id} src={images[el.category][`${el.id}`]} title={el.title} description={el.description}/>
                ))}
            </div>
            {/* <TabBar /> */}
        </React.Fragment>
    )
}

SalePage.propTypes = {
    list: PropTypes.array,
};