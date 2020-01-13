import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import {MainPage} from './pages/mainPage/index';
import {LoginPage} from './pages/loginPage/index';
import {SignupPage} from './pages/signupPage/index';
import {ShoesPage} from './pages/shoesPage/index';
import {BagsPage} from './pages/bagsPage/index';
import {JewelryPage} from './pages/jewelryPage/index';
import {ClothingPage} from './pages/clothingPage/index';
import {SportsPage} from './pages/sportsPage/index';
import {CardPage} from './pages/cardPage/index';
import './stylesheet.scss';

class App extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            height: window.innerHeight, 
            width: window.innerWidth,
            isLoading: true,
            scroll: false,
        }
        this.forResizeGetData = this.forResizeGetData.bind(this);
        this.forScrollGetData = this.forScrollGetData.bind(this);
        this.onLoad =  this.onLoad.bind(this);
    }

    onLoad(){  this.setState({isLoading: false})}

    componentDidMount(){
        this.timerID = setTimeout(this.onLoad, 4000);
        window.addEventListener('resize', this.forResizeGetData);
        window.addEventListener('scroll', this.forScrollGetData);
    }

    componentWillUnmount(){
        window.removeEventListener('resize', this.forResizeGetData);
        window.addEventListener('scroll', this.forScrollGetData);
    }

    forScrollGetData(){
        this.status = false;
        if(pageYOffset > 0){
            this.status = true;
        }

        if(this.status != this.rscrollState) {
            this.setState({
                scroll: this.status,
            });
        }
        this.rscrollState = this.status;
    }

    forResizeGetData(){
        this.status = false;
        if(window.innerWidth < 993){
            this.status = true;
        }

        if(this.status != this.resizeState) {
            this.setState({
                height: window.innerHeight, 
                width: window.innerWidth,
            });
        }
        this.resizeState = this.status;
    }

    render(){
        const {isLoading, width, scroll} = this.state;

        if(width < 993){
            return (
                <BrowserRouter>
                    <div className='app'>
                        <Switch>
                            <Route exact path='/' render={(props)=><MainPage isLoading={isLoading} scroll={scroll} {...props}/>} />
                            <Route exact path='/login' render={(props)=><LoginPage scroll={scroll} {...props}/>} />
                            <Route exact path='/signup' render={(props)=><SignupPage scroll={scroll} {...props}/>}/>
                            <Route exact path='/shoes' render={(props)=><ShoesPage scroll={scroll} {...props}/>}/>
                            <Route exact path='/bags' render={(props)=><BagsPage scroll={scroll} {...props}/>}/>
                            <Route exact path='/jewelry' render={(props)=><JewelryPage scroll={scroll} {...props}/>}/>
                            <Route exact path='/clothing' render={(props)=><ClothingPage scroll={scroll} {...props}/>}/>
                            <Route exact path='/sports' render={(props)=><SportsPage scroll={scroll} {...props}/>}/>
                            
                            <Route path='/shoes/:id' component={CardPage}/>
                            <Route path='/bags/:id' component={CardPage}/>
                            <Route path='/jewelry/:id' component={CardPage}/>
                            <Route path='/clothing/:id' component={CardPage}/>
                            <Route path='/sports/:id' component={CardPage}/>
                        </Switch>
                    </div>
                </BrowserRouter>
            )
        } else{
            return (
                <div>Sorry, this layout is mobile only!</div>
            )
        }
    }
}

ReactDOM.render(
    <div className='container'>
        <App></App>
    </div>,
   document.getElementById('root')
);


