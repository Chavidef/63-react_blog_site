import React, { Component } from 'react';
import { Route } from 'react-router';
import Home from './Pages/Home';
import AddPost from './Pages/AddPost';
//import AddCar from './Pages/AddCar';
//import DeleteCars from './Pages/DeleteCars';
import Layout from './Layout';


export default class App extends Component {
    render() {
        return (
            <Layout>
                <Route exact path='/' component={Home} />
                <Route exact path='/addpost' component={AddPost} />
                {/*<Route exact path='/addcar/:personId' component={AddCar} />*/}
                {/*<Route exact path='/deletecars/:personId' component={DeleteCars} />*/}
            </Layout>
        );
    }
}