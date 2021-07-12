import React from 'react';
import {
    Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle 
  } from 'reactstrap';

const BreedList = ({breed}) => {
    return (
        <div>
        <Card>
            <CardImg top width="30%" src={ breed.image &&  breed.image.url } alt="Card image cap" />
            <CardBody>
                <CardTitle tag="h6" className="mb-2 text-muted">Breed Name: {breed.name}</CardTitle>
                <CardSubtitle tag="h6" className="mb-2 text-muted">breed group: {breed.breed_group}</CardSubtitle>
                <CardText tag="h6" className="mb-2 text-muted">bred for: {breed.bred_for}</CardText>
                <CardText tag="h6" className="mb-2 text-muted">life span: {breed.life_span}</CardText>
                <CardText tag="h6" className="mb-2 text-muted">temperament: {breed.temperament}</CardText>
                <CardText tag="h6" className="mb-2 text-muted">height: {breed.height.metric} cm</CardText>
                <CardText tag="h6" className="mb-2 text-muted">weight: {breed.weight.metric} kg</CardText>
            </CardBody>
        </Card>
        </div>
    );
};

export default BreedList;