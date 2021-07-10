import React from 'react';
import { useState } from 'react';

import { GlobalStyle } from '../theme/globalStyle'
import { Wrapper, Button, Input } from '../theme/appStyled';
import dogApi, {API_DEFAULT_PARAMS} from '../apis/dogApi'

const App = () => {
    const [dogs, setDogs] = useState([])
    const [query, setQuery] = useState("")

    const fetchData = async () => {
        console.log("fetchData query ", query)
        const res = await dogApi.get('/search', {
            params:{
                ...API_DEFAULT_PARAMS,
                q:query
            }
        })
        console.log("fetchData res.data ", res.data[0])
        setDogs(res.data[0])
        return res.data[0]
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        fetchData()
    }

    const displayInfo = () => {
        console.log("displayInfo ", dogs.breeds)
        if (dogs.breeds === undefined || !dogs.breeds.length ){
            return (
                <div><p>No info availabel. Just click the button.</p></div>
            )
        }
        return (
            <div>
                <p>name: { typeof dogs.breeds[0] === undefined || typeof dogs.breeds[0].name === undefined ? "Not available" : dogs.breeds[0].name }</p>
                {/* <p>name: {dogs.breed[0].name}</p> */}
                <p>bred for: {dogs.breeds[0].bred_for === undefined ? "Not available"  : dogs.breeds[0].bred_for}</p>
                <p>breed group: {dogs.breeds[0].breed_group}</p>
                <p>temperament: {dogs.breeds[0].temperament}</p>
                <p>life span: {dogs.breeds[0].life_span}</p>
            </div>
        )
    }
    const displayDog = (url) => {
        window.location.assign(url)
    } 
    return (
        <>
        <Wrapper>
            <GlobalStyle />
                <form onSubmit={handleSubmit}>
                    <Input inputColor="rebeccapurple"  type="text" value={query} onChange={e => setQuery(e.target.value)} />
                </form>
                <h3>Result</h3>
                {displayInfo()}
                <Button onClick={()=>displayDog(dogs.url)}>Click for Dog Image</Button>
        </Wrapper>
        </>
    );
};

export default App;