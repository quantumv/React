import React, { Component } from 'react';
import { Card, CardImg, CardImgOverlay, CardText, CardBody, CardTitle } from 'reactstrap';

class CampsiteInfo extends Component {
    constructor(props){
        super(props);
        this.state = {  

        };
    }
    
    renderCampsite(campsite) {
        return (
            <div className="col-md-5 m-1">
            <Card>
                <CardImg top src={campsite.image} alt={campsite.name} />
                <CardBody>
                    <CardTitle>{campsite.name}</CardTitle>
                    <CardText>{campsite.description}</CardText>
                </CardBody>
            </Card>
            </div>
        )
    }


    renderComments(comments) {
        if (comments) {
            return (
                // <div></div>
                <div className="col-md-5 m1">
                    <h4>Comments</h4>
                    <div>
                        {comments.map(comment => <div key={comment.id}>{comment.text}<br></br>{comment.author} - {new Intl.DateTimeFormat('en-US', { year: 'numeric', month: 'short', day: '2-digit' }).format(new Date(Date.parse(comment.date)))}
                        </div>)}
                    </div>
                </div>
            );
        }
        else {
            return (
                <div></div>
            )
        }
    }

    render() {
        if (this.props.campsite) {
            return (
                <div className="container">
                    <div className="row">
                        {this.renderCampsite(this.props.campsite)}
                        {this.renderComments(this.props.campsite.comments)}
                    </div>
                </div>
            )
        }
        else {
            return (
                <div></div>
            )
        }
    }

}

export default CampsiteInfo;
