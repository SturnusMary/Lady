import React from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';
import './hScrolling.scss';
import HScrollingCard from './hScrollingCard/hScrollingCard';
import bags from '../../img/bags/*.jpg';
import sports from '../../img/sports/*.jpg';
import clothing from '../../img/clothing/*.jpg';
import jewelry from '../../img/jewelry/*.jpg';
import shoes from '../../img/shoes/*.jpg';
import {firestoreConnect} from 'react-redux-firebase';
import {compose} from 'redux';
const images = {shoes, bags, jewelry, clothing, sports};
const uuidv1 = require('uuid/v1');

// onWheel={this.onMouseMove}
class HScrolling extends React.Component {
    // onMouseMove = (e) => {
    //     e = window.event || e;
    //     let delta = Math.max(-1, Math.min(1, (e.wheelDelta || -e.detail)));
    //     document.querySelector('.hScrolling-wrapper').scrollLeft -= (delta*200);
    // }
    render(){
        const {children, label, color, newPrice, newList, saleList} = this.props;
        let list = label === 'New' ? newList : saleList;

        return(
            <div className='scrollBlock-wrapper'>
                <div className='scrollBlock-heading'>
                    <div>
                        <h3>{label}</h3>
                        <Link to={label === 'New' ? 'new' : 'sale'}>View all</Link>
                    </div>
                    <p>{children}</p>
                </div> 
                <div className='hScrolling-wrapper'>
                    {list && list[0].array.map((el, index) => {
                        if(index < 6) {
                            return (
                            <HScrollingCard 
                                newPrice={newPrice}
                                to={`/${el.category}/product${el.id}`}
                                item={el}
                                colorL={color}
                                key={uuidv1()}
                                label={label}
                                src={images[el.category][`${+el.id+12}`]}/>)
                        }
                    })}
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        newList: state.firestoreR.ordered.newList,
        saleList: state.firestoreR.ordered.saleList
    }
}

export default compose(
    connect(mapStateToProps),
    firestoreConnect([{collection: 'saleList'}, {collection: 'newList'}])
)(HScrolling);

HScrolling.propTypes = {
    newList: PropTypes.array,
    saleList: PropTypes.array,
    children: PropTypes.string,
    label: PropTypes.string,
    color: PropTypes.string,
    newPrice: PropTypes.string,
};