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
import {NewPage} from './pages/newPage/index';
import {SalePage} from './pages/salePage/index';
import './stylesheet.scss';

class App extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            width: window.innerWidth,
            isLoading: true,
            newList: [],
            saleList: [],
        }
        this.forResizeGetData = this.forResizeGetData.bind(this);
        this.onLoad = this.onLoad.bind(this);
        this.onGetNewList = this.onGetNewList.bind(this);
        this.onGetSaleList = this.onGetSaleList.bind(this);
    }

    onLoad(){this.setState({isLoading: false})}
    onGetNewList(newList){this.setState({newList,})}
    onGetSaleList(saleList){this.setState({saleList,})}

    componentDidMount(){
        this.timerID = setTimeout(this.onLoad, 4000);
        window.addEventListener('resize', this.forResizeGetData);
    }

    componentWillUnmount(){
        window.removeEventListener('resize', this.forResizeGetData);
    }

    forResizeGetData(){
        this.status = false;
        if(window.innerWidth < 993){
            this.status = true;
        }

        if(this.status != this.resizeState) {
            this.setState({
                width: window.innerWidth,
            });
        }
        this.resizeState = this.status;
    }

    render(){
        const {isLoading, width, newList, saleList} = this.state;
      
        if(width < 993){
            return (
                <BrowserRouter>
                    <div className='app'>
                        <Switch>
                            <Route exact path='/' render={(props)=><MainPage onGetList={this.onGetNewList}  onGetSaleList={this.onGetSaleList} isLoading={isLoading}{...props}/>} />
                            <Route exact path='/login' render={(props)=><LoginPage  {...props}/>} />
                            <Route exact path='/signup' render={(props)=><SignupPage  {...props}/>}/>
                            <Route exact path='/shoes' render={(props)=><ShoesPage {...props}/>}/>
                            <Route exact path='/bags' render={(props)=><BagsPage {...props}/>}/>
                            <Route exact path='/jewelry' render={(props)=><JewelryPage {...props}/>}/>
                            <Route exact path='/clothing' render={(props)=><ClothingPage  {...props}/>}/>
                            <Route exact path='/sports' render={(props)=><SportsPage {...props}/>}/>
                            <Route exact path='/new' render={(props)=><NewPage list={newList} {...props}/>}/>
                            <Route exact path='/sale' render={(props)=><SalePage list={saleList} {...props}/>}/>

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