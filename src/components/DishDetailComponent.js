import React from 'react';
import { Card, CardImg, CardText, CardBody,
    CardTitle, Breadcrumb, BreadcrumbItem } from 'reactstrap';
import { Link } from 'react-router-dom';
import CommentForm from './CommentComponent';
import { Loading } from './LoadingComponent';
import { baseUrl } from '../shared/baseUrl';

function RenderDish({dish}) {
    return(
        <Card>
            <CardImg top src={baseUrl + dish.image} alt={dish.name} />
            <CardBody>
              <CardTitle>{dish.name}</CardTitle>
              <CardText>{dish.description}</CardText>
            </CardBody>
        </Card>
    );
}
const formatCommentDate = (timestamp) => new Date(timestamp).toLocaleDateString('en-CA', { year: 'numeric', month: 'short', day: 'numeric'}); 

const RenderComments = ({comments, addComment, dishId}) => {
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
            <CommentForm dishId={dishId} addComment={addComment} />
        </div>
    );
}

const DishDetail = (props) => {
    if (props.isLoading) {
        return( <div className="container">
                    <div className="row">
                        <Loading />
                    </div>
                </div>);
    } else if (props.errMess) {
        return( <div className="container">
                    <div className="row">
                        <h4>{props.errMess}</h4>
                    </div>
                </div>);
    }
    else if (!!props.dish) {
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
                        <RenderDish dish={props.dish} />
                    </div>
                    <div className="col-12 col-md-5 m-1">
                        <RenderComments comments={props.comments} 
                            addComment={props.addComment}
                            dishId={props.dish.id}
                        />
                    </div>
                </div>
                </div>
        );
    } else return<div></div>;
    }

export default DishDetail;