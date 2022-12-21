import { useState } from 'react'
import PillOptionsList from './PillOptionsList';
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query'
import axios from 'axios'

function timeout(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

function handleChangeSearchVal(searchVal, updateSearchPillVal, setLoadingState, mutate) 
{
    updateSearchPillVal(searchVal.toLowerCase())
    setLoadingState(true)
    mutate(searchVal)
}

function PillOptions({listPillSelected, updatePillSelected})
{
    const [searchPillVal, updateSearchPillVal] = useState('')
    const [flagLoading, setLoadingState] = useState(true)
    const [message, setMessage] = useState('')

    const {isLoading, isError, error, mutate} = useMutation(createPost, {retry: 3})

    async function createPost(searchVal) {
        const usersName = JSON.stringify({ searchParam: searchVal })
 const customConfig = {
    headers: {
    'Content-Type': 'application/json'
    }
}
        const response = await axios.post('http://localhost:3001/listpilloption/', usersName, customConfig)
        await timeout(1000)
        setMessage(response.data)
    }

    return(
        <div>
            <input autoFocus defaultValue={""} type={"text"} onChange={(e) => handleChangeSearchVal(e.target.value, updateSearchPillVal, setLoadingState, mutate)}/>
            <PillOptionsList message={message} isLoading={isLoading} searchPillVal={searchPillVal} listPillSelected={listPillSelected} updatePillSelected={updatePillSelected} flagLoading={flagLoading} setLoadingState={setLoadingState}/>
        </div>
    )
}

export default PillOptions