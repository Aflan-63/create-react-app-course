import React, { Component } from 'react';

import Menu from './MenuComponent';
import { DISHES } from '../shared/dishes';

import HeaderComponent from './HeaderComponent';
import FooterComponent from './FooterComponent';
import HomeComponent from './HomeComponent';
import DishDetail from './DishdetailComponent';
import About from './AboutComponent';

import { Switch, Route, Redirect } from 'react-router-dom';
import Contact from './ContactComponent';
import { COMMENTS } from '../shared/comment';
import { PROMOTIONS } from '../shared/promotions';
import { LEADERS } from '../shared/leader';


export default class MainComponent extends Component {

    constructor(props) {
        super(props);
        this.state = {
            dishes: DISHES,
            comments: COMMENTS,
            promotions: PROMOTIONS,
            leaders: LEADERS,
            selectedDish: null
        };
    }

    onDishSelect(dishId) {
        this.setState({ selectedDish: dishId });
    }

    render() {
        const HomePage = () => {
            return (
                <HomeComponent
                    dish={this.state.dishes.filter((dish) => dish.featured)[0]}
                    promotion={this.state.promotions.filter((promo) => promo.featured)[0]}
                    leader={this.state.leaders.filter((leader) => leader.featured)[0]}
                />
            );
        }

        const MenuPage = () => {
            return (

                <Menu dishes={this.state.dishes} />
            )
        }

        const AboutPage = () => {
            return (
                <About leaders={this.state.leaders}></About>
            )
        }

        const DishWithId = ({ match }) => {
            return (
                <DishDetail dish={this.state.dishes.filter((dish) => dish.id === parseInt(match.params.dishId, 10))[0]}
                    comments={this.state.comments.filter((comment) => comment.dishId === parseInt(match.params.dishId, 10))} />
            );
        };
        // const DisDetails = () => {
        //     return (
        //         < * /}
        //     )
        // }
        return (
            <div>
                <HeaderComponent></HeaderComponent>
                <Switch>
                    <Route path="/home" component={HomePage}></Route>
                    <Route exact path='/menu' component={MenuPage} />
                    <Route path="/menu/:dishId" component={DishWithId}></Route>
                    {/* <Route exact path='/menu/:id' component={DishDetail} /> */}
                    <Route exact path='/contactus' component={Contact} />
                    <Route exact path='/aboutus' component={AboutPage} />
                    <Redirect to="/home"></Redirect>
                </Switch>
                <FooterComponent></FooterComponent>
            </div>
        );
    }
}
