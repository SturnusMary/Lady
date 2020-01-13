import React from 'react';
import PropTypes from 'prop-types';
import './stylesheet.scss';
import bd from '../../bd.json';

export class CardPage extends React.Component {
    constructor(props){
        super(props);
        this.state ={
            id: null,
        }
        this.bd = bd;
    }
   
    componentDidMount(){
        let category = this.props.match.url.split('/')[1];
        let id = this.props.match.params.id.split('product')[1];
        let result = this.bd[category].filter(el => {
           if(el.id === id){
             return el;
           }
        })
         
       console.log(result)
    }

    render(){
        return(
            <React.Fragment>
                <div>gnhfghf</div>
            </React.Fragment>
        )
    }
}


CardPage.propTypes = {
};