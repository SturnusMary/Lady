import React from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';
import './hScrollingCard.scss';

export class HScrollingCard extends React.Component {
    render() {
        const {src, label, colorL, brand, title, price, to, newPrice} = this.props;
        return (
            <div className='hScrolling-card'>
                <div style={{backgroundColor: `${colorL}`}} className='hScrolling-card-label'>{label === 'New' ? label : '-25%'}</div>
                <Link to={to} className='hScrolling-card-img'>
                    <div className='hScrolling-card-img__wrapper'>
                        <img src={src} alt={`${title} ${label}`}/>
                    </div>
                </Link>
                <div className='hScrolling-card-favorite'>
                    <svg width='20' viewBox='0 0 28 26' ><path fillRule='evenodd' d='M14.079 25L12.1826 23.2736C5.44687 17.1657 1 13.1373 1 8.19346C1 4.16512 4.16512 1 8.19346 1C10.4692 1 12.6534 2.0594 14.079 3.73351C15.5046 2.0594 17.6888 1 19.9646 1C23.9929 1 27.158 4.16512 27.158 8.19346C27.158 13.1373 22.7112 17.1657 15.9755 23.2866L14.079 25Z'></path></svg>
                </div>
                <div className='hScrolling-card-description'>
                    <p>{brand}</p>
                    <Link to={to}>{title}</Link>
                    <div><span style={{textDecoration: newPrice ? 'line-through' :'none'}}>{price}</span>{newPrice}</div>
                </div>
            </div>
        )
    }
}

HScrollingCard.propTypes = {
    src: PropTypes.string,
    label: PropTypes.string,
    colorL: PropTypes.string,
    brand: PropTypes.string,
    title: PropTypes.string,
    price: PropTypes.string,
    to: PropTypes.string,
};