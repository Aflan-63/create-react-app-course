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
            return (
                <div className="container">
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
                </div>


            )
        } else {
            return (<div></div>);
        }
    }
}
