import React from 'react'
import { useState, useEffect } from 'react';

import { GlobalStyle } from '../theme/globalStyle'
import { Wrapper  } from '../theme/appStyled';
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
                <BreedList breed={breed} key={breed.id} />
            )
        })
    }
    return (
       <>
        <Wrapper>
            <GlobalStyle />
                <h3>Dog Breeds</h3>
                {renderBreeds()}
        </Wrapper>
        </>
    )
}

export default App