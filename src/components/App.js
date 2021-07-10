import React from 'react';
import { useState } from 'react';

import { GlobalStyle } from '../theme/globalStyle'
import { Wrapper, Button } from '../theme/appStyled';
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
        console.log("fetchData res.data ", res.data)
        setDogs(res.data[0])
        return res.data[0]
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        fetchData()
    }
    const displayDog = (url) => {
        window.location.assign(url)
    } 
    return (
        <>
        <Wrapper>
            <GlobalStyle />
                <form onSubmit={handleSubmit}>
                    <input type="text" value={query} onChange={e => setQuery(e.target.value)} />
                </form>
                
                <Button onClick={()=>displayDog(dogs.url)}>Click for Dog Image</Button>
        </Wrapper>
        </>
    );
};

export default App;