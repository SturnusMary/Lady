import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import {Provider, connect} from 'react-redux';
import * as Actions from './actions/actions';
import {store} from './store';
import MainPage from './pages/mainPage/index';
import LoginPage from './pages/loginPage/index';
import SignupPage from './pages/signupPage/index';
import {ShoesPage} from './pages/shoesPage/index';
import {BagsPage} from './pages/bagsPage/index';
import {JewelryPage} from './pages/jewelryPage/index';
import {ClothingPage} from './pages/clothingPage/index';
import {SportsPage} from './pages/sportsPage/index';
import CardPage from './pages/cardPage/index';
import NewPage from './pages/newPage/index';
import SalePage from './pages/salePage/index';
import {NotFound} from './pages/404/index'
import './stylesheet.scss';

class App extends React.Component {
    onLoad = () => {this.props.isPreloader(false)}

    componentDidMount(){
        this.timerID = setTimeout(this.onLoad, 4000);
        clearTimeout(this.timerId);
        window.addEventListener('resize', this.forResizeGetData);
    }

    componentWillUnmount(){
        window.removeEventListener('resize', this.forResizeGetData);
    }

    forResizeGetData = () => {
        this.status = false;
        if(window.innerWidth < 993){
            this.status = true;
        }

        if(this.status != this.resizeState) {
            this.props.setWidth(window.innerWidth);
        }
        this.resizeState = this.status;
    }

    render(){ 
        const {width, isLoading} = this.props;
        if(width < 993){
            return (
                <BrowserRouter>
                    <div className='app'>
                        <Switch>
                            <Route exact path='/' render={(props)=><MainPage isLoading={isLoading} {...props}/>} />
                            <Route exact path='/login' component={LoginPage} />
                            <Route exact path='/signup' component={SignupPage} />
                            <Route exact path='/shoes' component={ShoesPage} />
                            <Route exact path='/bags' component={BagsPage} />
                            <Route exact path='/jewelry' component={JewelryPage} />
                            <Route exact path='/clothing' component={ClothingPage} />
                            <Route exact path='/sports' component={SportsPage} />
                            <Route exact path='/new'  component={NewPage} />
                            <Route exact path='/sale' component={SalePage} />
                            <Route exact path='/shoes/:id' component={CardPage}/>
                            <Route exact path='/bags/:id' component={CardPage}/>
                            <Route exact path='/jewelry/:id' component={CardPage}/>
                            <Route exact path='/clothing/:id' component={CardPage}/>
                            <Route exact path='/sports/:id' component={CardPage}/>
                            <Route path="*" component={NotFound} />
                        </Switch>
                    </div>
                </BrowserRouter>
            )
        }else {
            return (
                <div className='unsuitable'>
                    <p>Sorry, this layout is mobile only!</p>
                </div>
            )
        }
    }
}

const mapStateToProps = (state) => {
    return {
        width: state.rootR.width,
        isLoading: state.rootR.isLoading,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        setWidth: (value) => dispatch(Actions.setWidth(value)),
        isPreloader: (value) => dispatch(Actions.isPreloader(value))
    }
}

const ConnectedApp = connect(mapStateToProps, mapDispatchToProps)(App);

ReactDOM.render(
    <Provider store={store}>
        <ConnectedApp />
    </Provider>,
   document.getElementById('root')
);