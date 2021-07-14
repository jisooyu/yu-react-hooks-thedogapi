import React from 'react';
import {
    Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle
  } from 'reactstrap';

const BreedList = ({breed}) => {
    return (
        <div> 
        <Card>
            <CardBody>
                <CardTitle tag="h3" className="mb-2 text-muted">Breed Name: {breed.name}</CardTitle>
                <CardSubtitle tag="h4" className="mb-2 text-muted">breed group: {breed.breed_group}</CardSubtitle>
            </CardBody>
            <CardImg top width="100%" src={ breed.image &&  breed.image.url } alt="Card image cap" />
            <CardBody>
                <CardText tag="h5" className="mb-2 text-muted">bred for: {breed.bred_for}</CardText>
                <CardText tag="h5" className="mb-2 text-muted">life span: {breed.life_span}</CardText>
                <CardText tag="h5" className="mb-2 text-muted">temperament: {breed.temperament}</CardText>
                <CardText tag="h5" className="mb-2 text-muted">height: {breed.height.metric} cm</CardText>
                <CardText tag="h5" className="mb-2 text-muted">weight: {breed.weight.metric} kg</CardText>
            </CardBody>
        </Card>
        </div>
    );
};

export default BreedList;