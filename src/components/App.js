import React from 'react';
import { useState, useEffect } from 'react';

import { GlobalStyle } from '../theme/globalStyle'
import { Wrapper, Button, Input } from '../theme/appStyled';
import dogApi, {API_DEFAULT_PARAMS} from '../apis/dogApi'

const App = () => {
    const [breeds, setBreeds] = useState([])
    const [dog, setDog] = useState([])
    const [query, setQuery] = useState("")

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
                <li key={breed.id}>{breed.name}</li>
            )
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        findBreed()
    }
    const findBreed = () => {
        const breed = breeds.find(breed => breed.name === query)
        setDog(breed)
    }

    const displayDog = (url) => {
        window.location.assign(url)
    } 

    const displayBreed = () => {
        
        return (
            <div>
                <p>name: {dog.name}</p>
                <p>bred for: {dog.bred_for}</p>
                <p>breed group: {dog.breed_group}</p>
                <p>temperament: {dog.temperament}</p>
                <p>life span: {dog.life_span}</p>
                <p>image url: { dog.image &&  dog.image.url }</p>
            </div>
        )
    }

    return (
        <>
        <Wrapper>
            <GlobalStyle />
                <form onSubmit={handleSubmit}>
                    <label>Enter the Breed Name:  </label>
                    <Input inputColor="rebeccapurple"  type="text" value={query} onChange={e => setQuery(e.target.value)} />
                </form>
                <h4>Search Result</h4>
                {displayBreed()}
                <Button onClick={()=>displayDog(dog.image.url)}>Click for Dog Image</Button>
                <h3>Breed Names</h3>
                <ul>{renderBreeds()}</ul>
                
        </Wrapper>
        </>
    );
};

export default App;