import React from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import * as Actions from '../../actions/actions';
import Header from '../../components/headerPart/index';
import {TabBar} from '../../components/tabBar/index';
import ScrollToTop from '../../components/scrollToTop/scrollToTop';
import {PreviewCard} from '../../components/previewCard/previewCard';
import './stylesheet.scss';
import bd from '../../bd.json';
import {images} from '../../constants/pages';

class CardPage extends React.Component {
    componentDidMount() {
        let category = this.props.match.url.split('/')[1];
        let title = category[0].toUpperCase() + category.slice(1);
        let id = this.props.match.params.id.split('product')[1];
        let obj = bd[category].filter(el => {
            if(el.id == id ) return el; 
        })[0];
        let imgBack = `url(${images[category][+id+ 12]})`;
        this.props.setObjData(obj, title, imgBack);
    }

    render(){
        const {objCard, titleCardH, imgBackCard} = this.props;
        
        return(
            <React.Fragment>
                <ScrollToTop />
                <Header title={titleCardH}/>
                <main className='cardPage-content' id='cardPage'>
                    <div style={{backgroundImage: imgBackCard}} className='cardPage-content-background'></div>
                    <PreviewCard id={objCard.id} category={objCard.category} full={true} title={objCard.title} src={objCard.id ? images[objCard.category][(+objCard.id + 12)] : ''} description={objCard.description}/>
                </main>
                <TabBar />
            </React.Fragment>
        )
    }
}

const mapStateToPropsCardPage = (state) => {
    return {
        objCard: state.cardPageR.objCard,
        titleCardH: state.cardPageR.titleCardH,
        imgBackCard: state.cardPageR.imgBackCard,
    }
}

const mapDispatchToPropsCardPage = (dispatch) => {
    return {
        setObjData: (...value) => dispatch(Actions.setObjData(...value)),
    }
}

export default connect(mapStateToPropsCardPage, mapDispatchToPropsCardPage)(CardPage);

CardPage.propTypes = {
    titleCardH: PropTypes.string,
    imgBackCard: PropTypes.string,
    setObjData: PropTypes.func,
};