import React, { Component } from 'react';
import {
    Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button, CardImgOverlay
} from 'reactstrap';

import DishdetailsComponent from './DishdetailComponent ';


// LIFECYCLE METHODS - MOUNTED, UPDATED, UNMOUNTED
// Constructor, getDerivedStateFromProps() render() componentDidMount()

export default class MenuComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedDish: null
        };
    }
    onDishSelect(dish) {
        this.setState({ selectedDish: dish });
        // console.log(this.state.selectedDish)
    }


    render() {

        const menu = this.props.dishes.map((dish) => {
            return (
                <div key={dish.id} className="col-12 col-md-5 M-1">
                    <Card onClick={() => this.onDishSelect(dish)}>
                        <CardImg top width="100%" src={dish.image} alt={dish.name} />
                        <CardBody>
                            <CardImgOverlay>
                                <CardTitle tag="h5">{dish.name}</CardTitle>
                            </CardImgOverlay>
                        </CardBody>
                    </Card>
                </div>
            )
        })

        return (
            <div className="container">
                <div className="row">
                    {menu}
                </div>
                <div className="">
                    <DishdetailsComponent dish={this.state.selectedDish}></DishdetailsComponent>
                </div>

            </div>

        )
    }
}
