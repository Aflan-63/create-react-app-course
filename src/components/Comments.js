import React, { Component } from 'react'
import {
    Card, CardText, CardBody,
    CardTitle, CardSubtitle,
} from 'reactstrap';
export default class Comments extends Component {
    render() {
        if (this.props.comments != null) {
            // const length = this.props.dish.length;
            const comments = this.props.comments.map((cmnt) => {
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
                    {comments}
                </div>
            )
        } else {
            return (
                <div>
                </div>
            )
        }

    }
}
