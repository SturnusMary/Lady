import React from 'react';
import PropTypes from 'prop-types';
import {Header} from '../../components/headerPart/index';
import {TabBar} from '../../components/tabBar/index';
import {ScrollToTop} from '../../components/scrollToTop/scrollToTop';
import {PreviewCard} from '../../components/previewCard/previewCard';
import './stylesheet.scss';
import bd from '../../bd.json';

import bags from '../../img/bags/*.jpg';
import sports from '../../img/sports/*.jpg';
import clothing from '../../img/clothing/*.jpg';
import jewelry from '../../img/jewelry/*.jpg';
import shoes from '../../img/shoes/*.jpg';
const images = {shoes, bags, jewelry, clothing, sports};

export class CardPage extends React.Component {
    constructor(props){
        super(props);
        this.state ={
            obj: {},
            titleH: null,
            imgBack: null,
        }
        this.bd = bd;
    }
   
    componentDidMount() {
        let category = this.props.match.url.split('/')[1];
        let title = category[0].toUpperCase() + category.slice(1);
        let id = this.props.match.params.id.split('product')[1];
        let obj = this.bd[category].filter(el => {
            if(el.id == id ) return el; 
        })[0];
        let imgBack = `url(${images[category][+id+ 12]})`;
       
        this.setState({
            obj: obj,
            titleH: title,
            imgBack: imgBack,
        })
    }

    render(){
        const {obj, titleH, imgBack} = this.state;

        return(
            <React.Fragment>
                <ScrollToTop />
                <Header title={titleH}/>
                <main className='cardPage-content' id='cardPage'>
                    <div style={{backgroundImage: imgBack}} className='cardPage-content-background'></div>
                    <PreviewCard id={obj.id} category={obj.category} full={true} title={obj.title} src={obj.id ? images[obj.category][(+obj.id + 12)] : ''} description={obj.description}/>
                </main>
                {/* <TabBar /> */}
            </React.Fragment>
        )
    }
}


CardPage.propTypes = {
};