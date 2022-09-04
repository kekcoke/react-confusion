import React from 'react';
import { Card, CardImg, CardText, CardBody, CardTitle } from 'reactstrap';

function RenderDish({dish}) {
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
const formatCommentDate = (timestamp) => new Date(timestamp).toLocaleDateString('en-CA', { year: 'numeric', month: 'short', day: 'numeric'}); 

const RenderComments = ({comments}) => {
    if (!comments || comments.length === 0) {
        return(<div></div>);
    }

    const renderComments  = comments.map( (comment) => {
        return (
            <li>
                <p>{comment.comment}</p>
                <p>-- {comment.author}, {formatCommentDate(comment.date)}</p>
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

const DishDetail = (props) => {

    if (!!props.dish) {
        return (
            <div className="row">
                <div className="col-12 col-md-5 m-1">
                    <RenderDish dish={props.dish} />
                </div>
                <div className="col-12 col-md-5 m-1">
                    <RenderComments comments={props.dish.comments} />
                </div>
            </div>
        );
    } else {
        return(<div></div>);
    }}

export default DishDetail;