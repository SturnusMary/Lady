import React from 'react';
import PropTypes from 'prop-types';
import './social.scss';


export class Social extends React.Component {
    constructor(props){
        super(props);
    }
   
    render(){
        
        return(
            <div className='social-template'>
                <p>Social login</p>
                <div className='social-template-network'>
                    <div>
                        <svg width="10px" height="20px">
                            <path fillRule="evenodd" 
                            d="M0.413,10.800 L2.549,10.800 L2.549,19.594 C2.549,19.768 2.690,19.908 2.864,19.908 L6.485,19.908 C6.659,19.908 6.800,19.768 6.800,19.594 L6.800,10.841 L9.255,10.841 C9.415,10.841 9.549,10.722 9.568,10.563 L9.941,7.325 C9.951,7.236 9.923,7.147 9.863,7.080 C9.803,7.013 9.718,6.975 9.628,6.975 L6.800,6.975 L6.800,4.946 C6.800,4.334 7.129,4.024 7.779,4.024 C7.872,4.024 9.628,4.024 9.628,4.024 C9.802,4.024 9.943,3.883 9.943,3.709 L9.943,0.738 C9.943,0.564 9.802,0.423 9.628,0.423 L7.080,0.423 C7.062,0.422 7.022,0.421 6.963,0.421 C6.521,0.421 4.983,0.508 3.769,1.625 C2.424,2.863 2.611,4.345 2.655,4.602 L2.655,6.975 L0.413,6.975 C0.239,6.975 0.099,7.116 0.099,7.289 L0.099,10.486 C0.099,10.659 0.239,10.800 0.413,10.800 Z"/>
                        </svg>
                    </div>
                    <div>
                        <svg width="18px" height="16px">
                            <path fillRule="evenodd" 
                            d="M17.377,2.144 C16.985,2.318 16.579,2.455 16.161,2.554 C16.621,2.117 16.967,1.570 17.162,0.960 L17.162,0.960 C17.218,0.786 17.029,0.635 16.871,0.728 L16.871,0.728 C16.291,1.073 15.665,1.331 15.012,1.497 C14.974,1.506 14.935,1.511 14.896,1.511 C14.777,1.511 14.662,1.467 14.571,1.387 C13.876,0.774 12.983,0.437 12.055,0.437 C11.653,0.437 11.248,0.500 10.850,0.623 C9.617,1.006 8.666,2.023 8.368,3.277 C8.256,3.748 8.225,4.219 8.278,4.677 C8.284,4.730 8.259,4.767 8.243,4.784 C8.216,4.814 8.178,4.831 8.138,4.831 C8.134,4.831 8.130,4.831 8.125,4.831 C5.426,4.580 2.993,3.280 1.273,1.170 L1.273,1.170 C1.185,1.062 1.017,1.076 0.947,1.195 L0.947,1.195 C0.610,1.773 0.432,2.434 0.432,3.107 C0.432,4.138 0.846,5.109 1.565,5.817 C1.263,5.745 0.970,5.632 0.698,5.482 L0.698,5.482 C0.567,5.408 0.405,5.502 0.403,5.653 L0.403,5.653 C0.384,7.184 1.280,8.547 2.624,9.160 C2.597,9.161 2.569,9.161 2.542,9.161 C2.329,9.161 2.114,9.141 1.902,9.100 L1.902,9.100 C1.753,9.072 1.629,9.212 1.675,9.356 L1.675,9.356 C2.111,10.717 3.283,11.720 4.685,11.948 C3.521,12.729 2.166,13.141 0.755,13.141 L0.316,13.141 C0.180,13.141 0.066,13.229 0.031,13.360 C-0.003,13.490 0.060,13.626 0.175,13.693 C1.765,14.618 3.578,15.107 5.419,15.107 C7.031,15.107 8.539,14.787 9.900,14.156 C11.149,13.578 12.252,12.752 13.179,11.700 C14.043,10.720 14.719,9.588 15.187,8.337 C15.633,7.144 15.869,5.872 15.869,4.657 L15.869,4.599 C15.869,4.404 15.957,4.220 16.112,4.095 C16.696,3.621 17.204,3.063 17.623,2.436 L17.623,2.436 C17.734,2.271 17.560,2.063 17.377,2.144 L17.377,2.144 Z"/>
                        </svg>
                    </div>
                    <div>
                       <svg width="23px" height="16px">
                            <path fillRule="evenodd" 
                            d="M8.537,9.485 L11.996,9.485 C11.389,11.202 9.744,12.432 7.819,12.418 C5.484,12.401 3.552,10.532 3.461,8.198 C3.364,5.696 5.372,3.630 7.852,3.630 C8.987,3.630 10.022,4.062 10.802,4.770 C10.987,4.938 11.268,4.939 11.450,4.768 L12.720,3.572 C12.919,3.385 12.920,3.069 12.722,2.882 C11.484,1.709 9.824,0.979 7.993,0.943 C4.088,0.867 0.797,4.068 0.770,7.973 C0.743,11.908 3.924,15.106 7.852,15.106 C11.630,15.106 14.717,12.148 14.923,8.422 C14.929,8.376 14.932,6.797 14.932,6.797 L8.537,6.797 C8.275,6.797 8.062,7.009 8.062,7.271 L8.062,9.011 C8.062,9.273 8.275,9.485 8.537,9.485 Z"/>
                            <path fillRule="evenodd" 
                            d="M20.793,6.955 L20.793,5.256 C20.793,5.026 20.607,4.840 20.377,4.840 L18.947,4.840 C18.717,4.840 18.531,5.026 18.531,5.256 L18.531,6.955 L16.832,6.955 C16.602,6.955 16.416,7.141 16.416,7.371 L16.416,8.801 C16.416,9.030 16.602,9.217 16.832,9.217 L18.531,9.217 L18.531,10.916 C18.531,11.146 18.717,11.332 18.947,11.332 L20.377,11.332 C20.607,11.332 20.793,11.146 20.793,10.916 L20.793,9.217 L22.492,9.217 C22.722,9.217 22.908,9.030 22.908,8.801 L22.908,7.371 C22.908,7.141 22.722,6.955 22.492,6.955 L20.793,6.955 L20.793,6.955 Z"/>
                        </svg>
                    </div>
                </div>
            </div>
        )
    }
}

Social.propTypes = {
};