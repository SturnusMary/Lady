import React from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';
import './hScrolling.scss';
import {HScrollingCard} from './hScrollingCard/hScrollingCard';
import bd from '../../bd.json';

import bags from '../../img/bags/*.jpg';
import sports from '../../img/sports/*.jpg';
import clothing from '../../img/clothing/*.jpg';
import jewelry from '../../img/jewelry/*.jpg';
import shoes from '../../img/shoes/*.jpg';
const images = {shoes, bags, jewelry, clothing, sports};
const uuidv1 = require('uuid/v1');
// onWheel={this.onMouseMove}
export class HScrolling extends React.Component {
    constructor(props){
        super(props);
        this.onMouseMove = this.onMouseMove.bind(this);
        this.state = {
            list: [],
        }
    }

    componentDidMount(){
        let  array = [];
        let list = [];
        for(let i in bd){
            array.push(bd[i]);
        }
        array = array.reduce((changed, toChanged) => {
            return changed.concat(toChanged);
        })
        for(let i = 0; i < 12; i++){
            list.push(array[Math.floor(Math.random() * Math.floor(array.length))]);
        }
        this.setState({list});
        this.props.onGetList ? this.props.onGetList(list) : this.props.onGetSaleList(list);
    }

    onMouseMove(e){
        e = window.event || e;
        let delta = Math.max(-1, Math.min(1, (e.wheelDelta || -e.detail)));
        document.querySelector('.hScrolling-wrapper').scrollLeft -= (delta*200);
    }

    render(){
        const {children, label, color, newPrice} = this.props;

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
                    {this.state.list.map((el, index) => {
                        if(index < 6) {
                            return (
                            <HScrollingCard newPrice={newPrice} to={`/${el.category}/product${el.id}`} title={el.title} price={el.price} brand={el.brand} colorL={color} key={uuidv1()} label={label} src={images[el.category][`${+el.id+12}`] }/>
                            )
                        }
                    })}
                </div>
            </div>
        )
    }
}

HScrolling.propTypes = {
    to: PropTypes.string,
    children: PropTypes.string,
    label: PropTypes.string,
    onGetList: PropTypes.func,
};

