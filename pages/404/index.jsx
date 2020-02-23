import React from 'react';
import './stylesheet.scss';
import Header from '../../components/headerPart/index';
import {useHistory} from "react-router-dom";

export function NotFound(props) {
    const history = useHistory();
    return (
        <React.Fragment>
            <Header />
            <div className='notFound-content'>
                <div className='notFound-content_title'>
                    <div>404 error</div>
                </div>
                <div className='notFound-content_explanation'>Sorry, the page not found.</div>
                <button onClick={() => history.push("/")}>Go Back</button>
            </div>
        </React.Fragment>
    )
}