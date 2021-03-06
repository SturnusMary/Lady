import React from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';
import './previewCard.scss';
import {connect} from 'react-redux';
import * as Actions from '../../actions/actions';
import {sendDataToFirestore} from '../save&bayFunc/save&bayFunc';

class PreviewCard extends React.Component {
    handleClick = (e) => {
        e.stopPropagation()
        const {item, saveGoods, saved, auth} = this.props;
        if(auth.uid) return sendDataToFirestore(saved, e, item, saveGoods,'.prevCard-wrapper', 'save-button');
    }

    render() {
    const {full, src, item} = this.props;
    
    return (
        <div className='prevCard-wrapper' id={item.article} onClick={this.handleClick}>
            <div className='prevCard'>
                <div className='prevCard-text-header' style={{display: full ? 'block' : 'none'}}>
                    <button className='bookmark'>
                        <svg width="11px" height="13px">
                            <path fillRule="evenodd" d="M5.748,8.920 L0.813,12.961 L0.813,0.030 L10.682,0.030 L10.682,12.961 L5.748,8.920 ZM9.695,0.839 L1.800,0.839 L1.800,1.647 L9.695,1.647 L9.695,0.839 ZM9.695,2.455 L1.800,2.455 L1.800,11.102 L5.748,7.950 L9.695,11.102 L9.695,2.455 Z"/>
                        </svg>
                    </button>
                    <Link to={`/${item.category}/product${item.id}`}><h3>{item.title}</h3></Link>
                </div>
                <Link to={`/${item.category}/product${item.id}`} className='prevCard-img'>
                    <div className='prevCard-img-wrapper'>
                        <img src={src} alt={`${item.title} ${item.category}`} />
                    </div>
                </Link>
                <div className='prevCard-text'>
                    <span  className='prevCard-text-title' style={{display: full ? 'block' : 'none'}}>Details</span>
                    <div  style={{display: full ? 'none' : 'block'}}>
                        <button className='bookmark'>
                            <svg width="11px" height="13px">
                                <path fillRule="evenodd" d="M5.748,8.920 L0.813,12.961 L0.813,0.030 L10.682,0.030 L10.682,12.961 L5.748,8.920 ZM9.695,0.839 L1.800,0.839 L1.800,1.647 L9.695,1.647 L9.695,0.839 ZM9.695,2.455 L1.800,2.455 L1.800,11.102 L5.748,7.950 L9.695,11.102 L9.695,2.455 Z"/>
                            </svg>
                        </button>
                        <Link to={`/${item.category}/product${item.id}`}><h3>{item.title}</h3></Link>
                    </div>
                    <p className={full ? 'full-text' : 'crop-text'}>{item.description}</p>
                    <div className='tabBar'>
                        <div className='tabBar-item'>
                            <button  className="buy-button">
                                <svg viewBox="0 0 10 11" width="10px" height="11px">
                                    <path fillRule="evenodd" d="M6.631 1.312C6.527.564 5.886 0 5.143 0c-.479 0-.933.235-1.215.628-.058.081-.041.193.038.252.079.058.19.041.247-.039.216-.301.564-.481.93-.481.568 0 1.058.431 1.138 1.003.013.09.089.155.175.155.008 0 .017-.001.025-.002.097-.014.164-.105.15-.204zM9.187 3.327l-.531-.9c-.032-.054-.09-.087-.152-.087h-.508c-.098 0-.177.08-.177.18 0 .099.079.18.177.18h.408l.318.54H1.563l.318-.54h.188c.097 0 .177-.081.177-.18 0-.1-.08-.18-.177-.18h-.288c-.062 0-.119.033-.151.087l-.531.9c-.033.056-.034.125-.003.182.032.056.091.091.154.091h7.785c.064 0 .122-.035.154-.091.031-.057.03-.126-.002-.182z"/>
                                    <path fillRule="evenodd" d="M8.305 1.668c-.025-.041-.064-.07-.11-.081l-2.412-.574c-.046-.011-.094-.003-.134.023-.04.025-.068.065-.079.112l-.181.791c-.023.096.036.193.131.216.095.022.191-.038.213-.135l.142-.615 2.067.492-.325 1.413c-.022.097.037.193.132.216.014.003.027.005.04.005.081 0 .154-.056.172-.139l.366-1.589c.01-.046.003-.095-.022-.135zM5.236 2.093L5.075.706C5.07.658 5.046.615 5.009.586c-.037-.03-.084-.043-.13-.038L1.92.904c-.097.012-.167.101-.155.2l.268 2.314c.011.091.087.159.176.159.007 0 .014-.001.021-.002.097-.011.166-.101.155-.2L2.137 1.24 4.745.927l.14 1.208c.011.099.099.169.196.158.097-.012.167-.101.155-.2z"/>
                                    <path fillRule="evenodd" d="M6.636 3.351l-.352-1.485c-.011-.047-.039-.087-.079-.112-.04-.024-.088-.032-.134-.021l-2.85.697c-.095.024-.154.121-.131.217l.176.743c.023.097.118.156.213.133.095-.023.153-.121.131-.217l-.135-.568 2.507-.613.309 1.311c.02.082.092.138.172.138.014 0 .028-.002.042-.005.095-.024.153-.121.131-.218z"/>
                                    <path fillRule="evenodd" d="M9.517 10.564c-.033.036-.08.056-.128.056H.897c-.049 0-.095-.02-.129-.056-.033-.036-.05-.084-.048-.133l.354-7.02c.005-.096.082-.171.177-.171h7.784c.094 0 .172.075.177.171l.354 7.02c.002.049-.015.097-.049.133zM8.867 3.6H1.419l-.336 6.66h8.119L8.867 3.6z"/>
                                    <path fillRule="evenodd" d="M6.47 5.04c-.293 0-.531-.242-.531-.54 0-.298.238-.54.531-.54.292 0 .53.242.53.54 0 .298-.238.54-.53.54zm0-.72c-.098 0-.177.081-.177.18 0 .099.079.18.177.18.097 0 .176-.081.176-.18 0-.099-.079-.18-.176-.18zM3.816 5.04c-.293 0-.531-.242-.531-.54 0-.298.238-.54.531-.54.293 0 .531.242.531.54 0 .298-.238.54-.531.54zm0-.72c-.098 0-.177.081-.177.18 0 .099.079.18.177.18.098 0 .177-.081.177-.18 0-.099-.079-.18-.177-.18z"/>
                                    <path fillRule="evenodd" d="M6.47 4.5h-.014c-.098 0-.177.081-.177.18 0 .024.005.048.014.069v.921c0 .645-.516 1.17-1.15 1.17-.634 0-1.15-.525-1.15-1.17v-.99c0-.099-.079-.18-.177-.18-.098 0-.177.081-.177.18v.99c0 .844.675 1.53 1.504 1.53s1.503-.686 1.503-1.53v-.99c0-.099-.079-.18-.176-.18z"/>
                                </svg>
                                <span>Buy</span>
                            </button>
                        </div>
                        <div className='tabBar-item separator'>
                            <button className="share-button">
                                <svg width="11px" height="11px" viewBox="0 0 11 11">
                                    <path fillRule="evenodd" d="M8.185 3.797c-.603 0-1.14-.293-1.481-.745L3.839 4.679c.07.199.106.408.106.629 0 .218-.036.43-.104.626l2.868 1.63c.342-.45.877-.741 1.478-.741 1.029 0 1.868.851 1.868 1.898 0 1.048-.837 1.899-1.866 1.899-1.029 0-1.866-.853-1.866-1.899 0-.22.039-.434.108-.633L3.566 6.459c-.342.454-.88.747-1.483.747-1.029 0-1.868-.851-1.868-1.898 0-1.048.839-1.899 1.866-1.899.603 0 1.14.291 1.481.745l2.863-1.627c-.069-.196-.106-.408-.106-.628C6.319.851 7.155 0 8.185 0c1.029 0 1.866.851 1.866 1.899 0 1.047-.839 1.898-1.866 1.898zm.002 6.225c.706 0 1.281-.584 1.281-1.303s-.575-1.303-1.281-1.303c-.707 0-1.281.584-1.281 1.303s.574 1.303 1.281 1.303zM2.083 4.005c-.706 0-1.28.584-1.28 1.303s.574 1.303 1.28 1.303c.705 0 1.282-.584 1.282-1.303S2.79 4.005 2.083 4.005zM8.187.598c-.705 0-1.281.584-1.281 1.303s.574 1.303 1.281 1.303c.706 0 1.281-.584 1.281-1.303S8.893.598 8.187.598z"/>
                                </svg>
                                <span>Share</span>
                            </button>
                        </div>
                        <div className='tabBar-item'>
                            <button className="save-button">
                                <svg width="13px" height="11px" viewBox='0 0 28 26' ><path fillRule='evenodd' d='M14.079 25L12.1826 23.2736C5.44687 17.1657 1 13.1373 1 8.19346C1 4.16512 4.16512 1 8.19346 1C10.4692 1 12.6534 2.0594 14.079 3.73351C15.5046 2.0594 17.6888 1 19.9646 1C23.9929 1 27.158 4.16512 27.158 8.19346C27.158 13.1373 22.7112 17.1657 15.9755 23.2866L14.079 25Z'></path></svg>
                                {/* <svg width="13px" height="11px" viewBox="0 0 13 11">
                                    <path fillRule="evenodd" d="M11.405 5.718L6.668 10.52c-.065.067-.153.1-.239.1-.085 0-.174-.036-.239-.102l-4.727-4.81C.841 5.076.496 4.238.496 3.344c-.002-.893.34-1.733.962-2.366C2.077.348 2.903 0 3.779 0c.878 0 1.706.351 2.328.983l.33.336.324-.331c.622-.632 1.448-.98 2.326-.98.878 0 1.702.345 2.323.978.622.632.962 1.472.959 2.366 0 .894-.342 1.734-.964 2.366zm-.478-4.243C10.434.976 9.779.699 9.084.699c-.694 0-1.351.277-1.844.779l-.564.573c-.134.136-.348.136-.481 0l-.569-.579C5.133.97 4.476.694 3.779.694c-.695 0-1.35.276-1.84.776-.494.499-.763 1.165-.763 1.874 0 .71.272 1.376.765 1.878l4.488 4.566 4.498-4.559c.493-.502.765-1.168.763-1.877 0-.709-.27-1.375-.763-1.877z"/>
                                </svg> */}
                                <span>Save</span>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )}
}

const mapStateToProps = (state) => {
    return {
        objCard: state.cardPageR.objCard,
        titleCardH: state.cardPageR.titleCardH,
        imgBackCard: state.cardPageR.imgBackCard,
        saved: state.cardPageR.saved,
        auth: state.firebaseR.auth,
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        saveGoods: (goods) => dispatch(Actions.saveGoods(goods)),
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(PreviewCard);

PreviewCard.propTypes = {
    src: PropTypes.string,
    item: PropTypes.object,
    full: PropTypes.bool
};