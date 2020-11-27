import React from 'react'
import { Link } from 'react-router-dom';
import {
    Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Breadcrumb, BreadcrumbItem
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
    const cmnts = comments.map((comment) => {
        return (
            <>
                <h4>Comments</h4>
                <div key={comment.id}>
                    <Card>
                        <CardBody>
                            <CardTitle tag="h3">Rating: {comment.rating}</CardTitle>
                            <CardSubtitle tag="h5">{new Intl.DateTimeFormat('en-US', { year: 'numeric', month: 'short', day: '2-digit' }).format(new Date(Date.parse(comment.date)))}</CardSubtitle>
                            <CardText tag="h6">{comment.comment}</CardText>
                            <CardText tag="h6">{comment.author} </CardText>
                        </CardBody>
                    </Card>
                </div>
            </>
        )

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
                    <Breadcrumb>
                        <BreadcrumbItem><Link to="/menu">Menu</Link></BreadcrumbItem>
                        <BreadcrumbItem active>{props.dish.name}</BreadcrumbItem>
                    </Breadcrumb>
                    <div className="col-12">
                        <h3>{props.dish.name}</h3>
                        <hr />
                    </div>
                </div>

                <div className="row">
                    <div className="col-12 col-md-5 m-1">
                        <RenderDish dish={props.dish}></RenderDish>
                    </div>
                    <div className="col-12 col-md-5 m-1">
                        <RenderComment comments={props.comments}></RenderComment>
                    </div>
                </div>
            </div>

        )
    } else {
        return (<div></div>);
    }
}



