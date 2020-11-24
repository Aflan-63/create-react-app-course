import React, { Component } from 'react'
import {
    Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle,
} from 'reactstrap';
import Comments from './Comments';
export default class DishDetailsComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }
    render() {

        if (this.props.dish != null) {
            // const length = this.props.dish.length;
            const comments = this.props.dish.comments.map((cmnt) => {
                return (
                    <div key={cmnt.id}>
                        <Card>
                            <CardBody>
                                <CardTitle tag="h3">Rating: {cmnt.rating}</CardTitle>
                                <CardSubtitle tag="h5">{cmnt.date}</CardSubtitle>
                                <CardText tag="h4">{cmnt.comment}</CardText>
                                <CardText tag="h6">{cmnt.author} </CardText>
                            </CardBody>
                        </Card>
                    </div>);

            });

            return (
                <div className="row">
                    <div className="col-12 col-md-5">
                        {/* {console.log(this.props.dish.comments)} */}
                        <Card>
                            <CardImg top width="100%" src={this.props.dish.image} alt={this.props.dish.name} />
                            <CardBody>
                                <CardTitle tag="h5">{this.props.dish.name}</CardTitle>
                                <CardSubtitle tag="h6" className="mb-2 text-muted"><strong>Category </strong> {this.props.dish.category} <strong>Price </strong> <sub></sub>{this.props.dish.price}</CardSubtitle>
                                <CardText>{this.props.dish.description}</CardText>
                            </CardBody>
                        </Card>
                    </div>
                    <div className="col-12 col-md-5">
                        {/* {comments} */}
                        <Comments comments={this.props.dish.comments}></Comments>
                    </div>
                </div>


            )
        } else {
            return (<div></div>);
        }
    }
}
