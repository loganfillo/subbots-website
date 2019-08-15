import React from 'react';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Image from 'react-bootstrap/Image';
import './styles.scss';

export default class ViewHeader extends React.Component{
    render() {
        return(
            <div>
            <Row>
                <Col sm={1}></Col>
                <Col sm={10}>
                </Col>
                <Col sm={1}></Col>
            </Row>
            <Row>
            <Col sm={1}></Col>
            <Col sm={10}>
                <div className="ViewHeaderImageContainer">
                    <Image className="ViewHeaderImage" src={process.env.PUBLIC_URL + "/images/" + this.props.image} alt="Error!"/>
                </div>
            </Col>
            <Col sm={1}></Col>
            <div className="ViewHeaderTitle">{this.props.title}</div>
            </Row>
            <Row>
                <Col sm={1}></Col>
                <Col s={10}>
                    <div className="ViewHeaderBlurb">{this.props.blurb}</div>
                </Col>
                <Col sm={1}></Col>
            </Row>
            </div>
        )
    }
}
