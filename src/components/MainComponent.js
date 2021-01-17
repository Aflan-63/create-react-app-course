import React, { Component } from 'react';

import Menu from './MenuComponent';


import HeaderComponent from './HeaderComponent';
import FooterComponent from './FooterComponent';
import HomeComponent from './HomeComponent';
import DishDetail from './DishdetailComponent';
import About from './AboutComponent';

import { Switch, Route, Redirect, withRouter } from 'react-router-dom';
import Contact from './ContactComponent';
import { connect } from 'react-redux';

const mapStateToProps = state => {
    return {
        dishes: state.dishes,
        comments: state.comments,
        promotions: state.promotions,
        leaders: state.leaders
    }
}
class MainComponent extends Component {


    onDishSelect(dishId) {
        this.setState({ selectedDish: dishId });
    }

    render() {
        const HomePage = () => {
            return (
                <HomeComponent
                    dish={this.props.dishes.filter((dish) => dish.featured)[0]}
                    promotion={this.props.promotions.filter((promo) => promo.featured)[0]}
                    leader={this.props.leaders.filter((leader) => leader.featured)[0]}
                />
            );
        }

        const MenuPage = () => {
            return (

                <Menu dishes={this.props.dishes} />
            )
        }

        const AboutPage = () => {
            return (
                <About leaders={this.props.leaders}></About>
            )
        }

        const DishWithId = ({ match }) => {
            return (
                <DishDetail dish={this.props.dishes.filter((dish) => dish.id === parseInt(match.params.dishId, 10))[0]}
                    comments={this.props.comments.filter((comment) => comment.dishId === parseInt(match.params.dishId, 10))} />
            );
        };

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
export default withRouter(connect(mapStateToProps)(MainComponent));