import React, { Component } from 'react';
import {
    Card, CardImg, CardBody,
    CardTitle, CardImgOverlay
} from 'reactstrap';


// LIFECYCLE METHODS - MOUNTED, UPDATED, UNMOUNTED
// Constructor, getDerivedStateFromProps() render() componentDidMount()

export default class MenuComponent extends Component {
    constructor(props) {
        super(props)
        this.state = {

        }
    }

    render() {

        const menu = this.props.dishes.map((dish) => {
            return (
                <div key={dish.id} className="col-12 col-md-5 M-1">
                    <Card onClick={() => this.props.onClick(dish.id)}>
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
            </div>

        )
    }
}
