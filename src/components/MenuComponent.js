import React from 'react';
import {
    Card, CardImg,
    CardTitle, CardImgOverlay
} from 'reactstrap';

// LIFECYCLE METHODS - MOUNTED, UPDATED, UNMOUNTED
// Constructor, getDerivedStateFromProps() render() componentDidMount()


export function RenderMenuItem(props) {
    return (
        <Card
            onClick={() => props.onClick(props.dish.id)}>
            <CardImg width="100%" src={props.dish.image} alt={props.dish.name} />
            <CardImgOverlay>
                <CardTitle>{props.dish.name}</CardTitle>
            </CardImgOverlay>
        </Card>

    )
}


export default function MenuComponent(props) {
    const menu = props.dishes.map((dish) => {
        return (
            <div className="col-12 col-md-5 m-1" key={dish.id}>
                <RenderMenuItem dish={dish} onClick={props.onClick} />
            </div>
        );
    });
    return (
        <div className="container">
            <div className="row">
                {menu}
            </div>
        </div>
    )
}

