import React from 'react';
import {connect} from 'react-redux';
import * as Actions from '../../actions/actions';
import PropTypes from 'prop-types';
import './input.scss';

class Input extends React.Component {
    componentDidMount(){
        const{name, hideValue, getInputData} = this.props;
        this.btnHide = true;
        hideValue(true);
        getInputData(name, '', false);
    }

    onChange = (e) => {
        const{value,  name, patern, hideValue, getInputData} = this.props;
        let regex = new RegExp(patern);
        getInputData(name, e.target.value, regex.test(e.target.value))
        if(!value.length && (e.target.name ==='inputPasswordLogin' || 'inputPasswordSignup')){
            this.btnHide = true;
            hideValue(this.btnHide);
        }
    }

    componentDidUpdate(){
        const{value, name, patern, getInputData} = this.props;
        if(!patern && value){
            getInputData(name, '', false);
        }
    }

    onClick = () => {
        const{value, hideValue} = this.props;
        if(value.length){
            this.btnHide = !this.btnHide;
        }
        hideValue(this.btnHide);
    }
    
    render(){
        const {children, type, name, valid, value, patern, authError} = this.props;
        let colorBorder = '#D6D6D633';
        let colorFill = '#C4C4C4';
        
        if(value.length && patern){
            colorBorder= valid ? '#79F89E' : '#F7C1D8';
            colorFill = valid ? '#79F89E' : '#F7C1D8';
        }
        if(authError){
            colorBorder = '#FA3572';
            colorFill = '#FA3572';
        }
        return(
            <div className='input-template'>
                <label htmlFor={name}>{children}</label>
                <input value={value} autoComplete='true' disabled={!patern} style={{border: `1px solid ${colorBorder}`}} onChange={this.onChange} type={type} name={name} id={name}></input>
                <div className='input-template__icon' style={{display: name === 'inputEmailLogin' || name === 'inputName'  || name === 'inputUsername' ? 'flex': 'none'}}>
                    <svg width="17.5px" height="23.5px">
                        <path fillRule="evenodd"  stroke={colorFill} strokeWidth="1px" strokeLinecap="butt" strokeLinejoin="miter" fill="none"
                        d="M8.727,10.795 C10.841,10.795 12.553,8.714 12.553,6.147 C12.553,3.581 11.991,1.500 8.727,1.500 C5.464,1.500 4.901,3.581 4.901,6.147 C4.901,8.714 6.614,10.795 8.727,10.795 Z"/>
                        <path fillRule="evenodd"  stroke={colorFill} strokeWidth="1px" strokeLinecap="butt" strokeLinejoin="miter" fill="none"
                        d="M15.946,18.703 C15.875,14.232 15.291,12.958 10.823,12.151 C10.823,12.151 10.194,12.953 8.727,12.953 C7.261,12.953 6.632,12.151 6.632,12.151 C2.212,12.949 1.593,14.204 1.512,18.558 C1.505,18.913 1.502,18.932 1.501,18.890 C1.501,18.968 1.501,19.111 1.501,19.360 C1.501,19.360 2.565,21.505 8.727,21.505 C14.890,21.505 15.954,19.360 15.954,19.360 C15.954,19.200 15.954,19.088 15.954,19.013 C15.953,19.038 15.950,18.989 15.946,18.703 Z"/>
                    </svg>
                </div>
                <div className='input-template__icon' style={{background: !patern ? 'rgba(0, 0, 0, 0.02)': 'white'}} onClick={this.onClick} style={{display: name === 'inputPasswordLogin' || name === 'inputPasswordSignup' ? 'flex': 'none'}}>
                    <svg width="18.5px" height="22.5px" style={{display: type === 'password' || !value.length ? 'flex': 'none'}}>
                        <path fillRule="evenodd"  stroke={colorFill} strokeWidth="1px" strokeLinecap="butt" strokeLinejoin="miter" fill="none"
                        d="M15.071,20.505 L2.536,20.505 C1.965,20.505 1.500,19.910 1.500,19.184 L1.500,10.491 C1.500,9.764 1.965,9.175 2.536,9.175 L2.906,9.175 L2.906,7.442 C2.906,4.236 5.450,1.558 8.630,1.501 C8.717,1.500 8.890,1.500 8.977,1.501 C12.157,1.558 14.701,4.236 14.701,7.442 L14.701,9.175 L15.071,9.175 C15.642,9.175 16.107,9.764 16.107,10.491 L16.107,19.184 C16.107,19.910 15.642,20.505 15.071,20.505 ZM7.629,14.829 L7.629,17.455 C7.629,17.756 7.881,18.011 8.182,18.011 L9.425,18.011 C9.726,18.011 9.978,17.756 9.978,17.455 L9.978,14.829 C10.270,14.541 10.440,14.144 10.440,13.704 C10.440,12.871 9.796,12.156 8.977,12.122 C8.890,12.119 8.717,12.119 8.630,12.122 C7.811,12.156 7.167,12.871 7.167,13.704 C7.167,14.144 7.337,14.541 7.629,14.829 ZM12.260,7.442 C12.260,5.532 10.708,3.953 8.803,3.953 C6.899,3.953 5.347,5.532 5.347,7.442 L5.347,9.175 L8.630,9.175 L8.977,9.175 L12.260,9.175 L12.260,7.442 Z"/>
                    </svg>
                    <svg width="18.5px" height="22.5px" style={{display: type === 'text' && value.length ? 'flex': 'none'}}>
                        <path fillRule="evenodd"  stroke={colorFill}  strokeWidth="0.7px" strokeLinecap="butt" strokeLinejoin="miter" fill="none"
                        d="M15.1,9h-0.2V7.4c0-3.3-2.6-6-5.8-6.1c-0.1,0-0.3,0-0.4,0C5.5,1.4,2.9,4,2.8,7.1l0,0h2.7l0,0h0c0.1-1.7,1.6-3.1,3.3-3.1c1.8,0,3.3,1.5,3.3,3.4V9H5.5v0H5.2v0H3v0H2.8v0H2.5c-0.6,0-1.2,0.6-1.2,1.4v8.7c0,0.8,0.5,1.4,1.2,1.4h12.5c0.6,0,1.2-0.6,1.2-1.4v-8.7C16.2,9.7,15.7,9,15.1,9z M16,19.2c0,0.7-0.4,1.2-0.9,1.2H2.5c-0.5,0-0.9-0.5-0.9-1.2v-8.7c0-0.7,0.4-1.2,0.9-1.2H3v0h2.2v0h7.2V7.4c0-2-1.6-3.6-3.6-3.6C7,3.8,5.5,5.2,5.3,7c0,0,0,0,0,0H3.1C3.3,4,5.7,1.7,8.6,1.6c0.1,0,0.3,0,0.3,0c3.1,0.1,5.6,2.7,5.6,5.8v1.9h0.5c0.5,0,0.9,0.5,0.9,1.2V19.2z M9,12c-0.1,0-0.3,0-0.4,0C7.8,12,7,12.8,7,13.7c0,0.4,0.2,0.9,0.5,1.2v2.6c0,0.4,0.3,0.7,0.7,0.7h1.2c0.4,0,0.7-0.3,0.7-0.7v-2.6c0.3-0.3,0.5-0.7,0.5-1.2C10.6,12.8,9.9,12,9,12zM9.9,14.7L9.9,14.7l0,2.7c0,0.2-0.2,0.4-0.4,0.4H8.2c-0.2,0-0.4-0.2-0.4-0.4v-2.7l0,0c-0.3-0.3-0.4-0.6-0.4-1c0-0.8,0.6-1.4,1.3-1.5c0,0,0.1,0,0.2,0c0.1,0,0.1,0,0.2,0c0.7,0,1.3,0.7,1.3,1.5C10.3,14.1,10.2,14.5,9.9,14.7z"/>
                    </svg>
                </div>
                <div className='input-template__icon' style={{display: name === 'inputEmailSignup' ? 'flex': 'none'}}>
                    <svg width="22.5px" height="22.5px">
                        <path fillRule="evenodd"  stroke={colorFill} strokeWidth="1px" strokeLinecap="butt" strokeLinejoin="miter" fill="none"
                        d="M18.862,14.626 C17.804,15.893 16.548,16.525 15.094,16.525 C14.105,16.525 13.357,16.145 12.849,15.382 C12.175,16.176 11.364,16.576 10.414,16.576 C9.352,16.576 8.445,16.130 7.689,15.230 C6.933,14.335 6.557,13.152 6.557,11.691 C6.557,10.194 6.979,8.969 7.832,8.019 C8.681,7.069 9.705,6.593 10.899,6.593 C11.651,6.593 12.345,6.852 12.977,7.368 L13.136,6.790 L15.617,6.790 L14.896,12.687 C14.854,13.090 14.830,13.439 14.830,13.738 C14.830,14.106 15.001,14.288 15.342,14.288 C15.974,14.288 16.583,13.893 17.168,13.094 C17.754,12.300 18.048,11.299 18.048,10.101 C18.048,8.349 17.409,6.895 16.129,5.740 C14.850,4.584 13.280,4.007 11.423,4.007 C9.406,4.007 7.704,4.712 6.324,6.116 C4.940,7.523 4.246,9.275 4.246,11.377 C4.246,13.311 4.894,14.998 6.185,16.432 C7.480,17.871 9.306,18.588 11.663,18.588 C13.144,18.588 14.664,18.254 16.214,17.588 C16.815,17.332 17.505,17.611 17.750,18.216 C17.986,18.801 17.703,19.468 17.122,19.716 C15.338,20.480 13.520,20.860 11.667,20.860 C8.592,20.860 6.150,19.925 4.331,18.057 C2.521,16.188 1.614,13.959 1.614,11.365 C1.614,8.659 2.567,6.399 4.471,4.580 C6.375,2.762 8.681,1.855 11.388,1.855 C13.962,1.855 16.117,2.654 17.851,4.251 C19.587,5.848 20.452,7.783 20.452,10.047 C20.452,11.834 19.921,13.362 18.862,14.626 ZM12.264,9.671 C11.907,9.303 11.500,9.120 11.043,9.120 C10.515,9.120 10.073,9.369 9.717,9.857 C9.360,10.346 9.182,10.989 9.182,11.788 C9.182,12.435 9.310,12.974 9.565,13.408 C9.817,13.843 10.151,14.060 10.566,14.060 C11.174,14.060 11.698,13.761 12.136,13.172 C12.574,12.579 12.795,11.904 12.799,11.140 C12.799,10.528 12.620,10.039 12.264,9.671 Z"/>
                    </svg>
                </div>
                <div className='input-template__icon' style={{display: name === 'inputPasswordRep' ? 'flex': 'none'}}>
                    <div className='validationOfPassword' style={{background: `${colorFill}`}}></div>
                </div>
            </div>
        )
    }
}
const mapStateToProps = (state) => {
    return {
        authError: state.loginPageR.authError
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        hideValue: (value) => dispatch(Actions.hideValue(value)),
        getInputData: (...value) => dispatch(Actions.getInputData(...value)),
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Input);

Input.propTypes = {
    name: PropTypes.string,
    children: PropTypes.string,
    type: PropTypes.string,
    valid: PropTypes.bool,
    value: PropTypes.string,
    hide: PropTypes.func,
    patern: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.bool,
    ]),
    hideValue: PropTypes.func,
    getInputData: PropTypes.func,
};