import React, { Component } from 'react';
import { Card, CardImg, CardText, CardBody, CardTitle } from 'reactstrap';

class DishDetail extends Component {

    componentDidMount() {
        console.log('DishDetail cpt componentDidMount invoked');
    }

    componentDidUpdate() {
        console.log('DishDetail cpt componentDidUpdate invoked');
    }

    formatCommentDate = (timestamp) => new Date(timestamp).toLocaleDateString('en-CA', { year: 'numeric', month: 'short', day: 'numeric'}); 

    render() {
        console.log('DishDetail cpt render invoked');

        if (!!this.props.dish) {
            return (
                <div className="row">
                    <div className="col-12 col-md-5 m-1">
                        {this.renderDish(this.props.dish)}
                    </div>
                    <div className="col-12 col-md-5 m-1">
                        { this.renderComments(this.props.dish.comments) }
                    </div>
                </div>
            );
        } else {
            return(<div></div>);
        }
    }

    renderComments(comments) {
        if (!comments || comments.length === 0) {
            return(<div></div>);
        }

        const renderComments  = comments.map( (comment) => {
            return (
                <li>
                    <p>{comment.comment}</p>
                    <p>-- {comment.author}, {this.formatCommentDate(comment.date)}</p>
                </li>
            )
        });

        return(
            <div>
                <h4>Comments</h4>
                <ul className="list-unstyled">
                    { renderComments }
                </ul>
            </div>
        );
    }

    renderDish(dish) {
        return(
            <Card>
                <CardImg top src={dish.image} alt={dish.name} />
                <CardBody>
                  <CardTitle>{dish.name}</CardTitle>
                  <CardText>{dish.description}</CardText>
                </CardBody>
            </Card>
        );
    }
}

export default DishDetail;