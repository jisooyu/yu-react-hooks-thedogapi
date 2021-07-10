import React from 'react';
import { useState, useEffect } from 'react';

import { GlobalStyle } from '../theme/globalStyle'
import { Wrapper, Button } from '../theme/appStyled';
import dogApi, {API_DEFAULT_PARAMS} from '../apis/dogApi'

const App = () => {
    const [dogs, setDogs] = useState([])

    useEffect (()=> {
        const fetchData = async () => {
            const res = await dogApi.get('/search', {
                params:{
                    ...API_DEFAULT_PARAMS,
                    q:"air"
                }
            })
            console.log(res.data[0].breeds[0].name)
            setDogs(res.data[0])
            return res.data[0]
        }
        fetchData()
    },[])
    const displayDog = (url) => {
        window.location.assign(url)
    } 
    return (
        <>
        <Wrapper>
            <GlobalStyle />
                <Button onClick={()=>displayDog(dogs.url)}>Click for Dog Image</Button>
        </Wrapper>
        </>
    );
};

export default App;