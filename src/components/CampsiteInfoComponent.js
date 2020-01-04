import React, { Component } from 'react';

class CampsiteInfo extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selectCampsite: null
        };
    }
    renderCampsite(campsite) {
        if (campsite) {
            return(
                <div className="col-md-5 m-1"></div>
                <Card>
                    <CardImg top src={campsite.image} alt={campsite.name} />
                    <CardBody>
                        <CardTitle>{campsite.name}</CardTitle>
                        <CardText>{campsite.description}</CardText>
                    </CardBody>
                </Card>
            );
        }
    }

    render() {
        if(this.props.campsite) {
            return(
                <div className="row"></div>
        )
    }
        else {
            return(
                <div></div>
            )
        }
    }
}

export default CampsiteInfo;