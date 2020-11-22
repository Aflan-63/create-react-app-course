import React, { Component } from 'react';
import {
    Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button, CardImgOverlay
} from 'reactstrap';

export default class MenuComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedDish: null
        };
    }
    onDishSelect(dish) {
        this.setState({ selectedDish: dish });
        console.log(this.state.selectedDish)
    }
    renderDish(dish) {
        if (dish != null) {
            return (
                <div className="col-12">
                    <Card>
                        <CardImg top width="100%" src={dish.image} alt={dish.name} />
                        <CardBody>
                            <CardTitle tag="h5">{dish.name}</CardTitle>
                            <CardSubtitle tag="h6" className="mb-2 text-muted"><strong>Category </strong> {dish.category} <strong>Price </strong> <sub></sub>{dish.price}</CardSubtitle>
                            <CardText>{dish.description}</CardText>
                            {/* <Button>Details</Button> */}
                        </CardBody>
                    </Card>
                </div>
            )
        } else {
            return (<div></div>);
        }
    }

    render() {

        const menu = this.props.dishes.map((dish) => {
            return (

                <div key={dish.id} className="col-12 col-md-6">
                    <Card onClick={() => this.onDishSelect(dish)}>
                        <CardImg top width="100%" src={dish.image} alt={dish.name} />
                        <CardBody>
                            <CardImgOverlay>
                                <CardTitle tag="h5">{dish.name}</CardTitle>
                            </CardImgOverlay>
                            {/* <CardSubtitle tag="h6" className="mb-2 text-muted"><strong>Category </strong> {dish.category} <strong>Price </strong> <sub></sub>{dish.price}</CardSubtitle> */}
                            {/* <CardText>{dish.description}</CardText> */}
                            {/* <Button>Details</Button> */}

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
                <div className="row">
                    {this.renderDish(this.state.selectedDish)}
                </div>
            </div>

        )
    }
}
