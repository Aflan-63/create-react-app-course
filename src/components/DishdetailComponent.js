import React from 'react'
import {
    Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle,
} from 'reactstrap';

export function RenderDish({ dish }) {
    return (
        <div>
            <Card>
                <CardImg top width="100%" src={dish.image} alt={dish.name} />
                <CardBody>
                    <CardTitle tag="h5">{dish.name}</CardTitle>
                    <CardSubtitle tag="h6" className="mb-2 text-muted"><strong>Category </strong> {dish.category} <strong>Price </strong> <sub></sub>{dish.price}</CardSubtitle>
                    <CardText>{dish.description}</CardText>
                </CardBody>
            </Card>
        </div>
    )
}

export function RenderComment({ comments }) {
    const cmnts = comments.map((cmnt) => {
        return (
            <div key={cmnt.id}>
                <Card>
                    <CardBody>
                        <CardTitle tag="h3">Rating: {cmnt.rating}</CardTitle>
                        <CardSubtitle tag="h5">{new Intl.DateTimeFormat('en-US', { year: 'numeric', month: 'short', day: '2-digit' }).format(new Date(Date.parse(cmnt.date)))}</CardSubtitle>
                        <CardText tag="h6">{cmnt.comment}</CardText>
                        <CardText tag="h6">{cmnt.author} </CardText>
                    </CardBody>
                </Card>
            </div>)
    })
    return (

        <div>
            {cmnts}
        </div>

    );
}

export default function DishdetailComponent(props) {
    if (props.dish != null) {
        // const length = this.props.dish.length;    
        return (
            <div className="container">
                <div className="row">
                    <div className="col-12 col-md-5 m-1">
                        <RenderDish dish={props.dish}></RenderDish>
                    </div>
                    <div className="col-12 col-md-5 m-1">
                        <RenderComment comments={props.dish.comments}></RenderComment>
                    </div>
                </div>
            </div>

        )
    } else {
        return (<div></div>);
    }
}



