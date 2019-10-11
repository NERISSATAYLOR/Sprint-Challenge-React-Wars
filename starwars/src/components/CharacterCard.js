import React from "react";
import {
    Card, CardText, CardBody,
    CardTitle, CardSubtitle, Col
} from 'reactstrap';

const CharacterCard = props => {
    return (
        <Col md="12" md="6" key={props.name}>
            <Card>
                <CardBody>
                    <CardTitle>Name: {props.name}</CardTitle>
                    <CardSubtitle>Height: {props.height}</CardSubtitle>
                    <CardText>birth_year: {props.birth_year}</CardText>
                    <CardText>Home World: {props.homeworld}</CardText>
                </CardBody>
            </Card>
        </Col>
    );
};

export default CharacterCard;