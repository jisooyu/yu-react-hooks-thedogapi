import React from 'react'
import { useState, useEffect } from 'react';
import { Container, Col, Row } from 'reactstrap';

import dogApi, {API_DEFAULT_PARAMS} from '../apis/dogApi'
import BreedList from './breeds/BreedList'

const App  = () => {
    const [breeds, setBreeds] = useState([])
    useEffect (()=> {
        const fetchBreeds = async() => {
            const res = await dogApi.get('/breeds', {
                params:{
                    ...API_DEFAULT_PARAMS
                }
            })
            console.log("fetchBreeds ", res.data)
            setBreeds(res.data)
            return res.data
        }
        fetchBreeds()
    }, [])

    const renderBreeds = () => {
        return breeds.map(breed => {
            return (
                <Col sm={{ size: 3, order: 2, offset: 1 }}>
                    <BreedList breed={breed} key={breed.id} />
                </Col>
            )
        })
    }
    return (
        <div>
            <h2 style={{color: "blue", textAlign:"center"}} >Dog Breeds</h2>
            <Container fluid>
                <Row>
                    {renderBreeds()}
                </Row>
            </Container>
        </div>
    )
}

export default App