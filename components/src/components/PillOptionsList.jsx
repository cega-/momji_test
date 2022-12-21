import { useState } from 'react'
import { listOptionPill } from '../datas/listOptionPill'
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query'
import axios from 'axios'

function handleClickOnOption(val, listPillSelected, updatePillSelected) {
    console.log(val)
    if (!listPillSelected.some(entry => entry === val))
    {
        updatePillSelected([...listPillSelected, val])
    }
}

function PillOptionsList({message, isLoading, searchPillVal, listPillSelected, updatePillSelected, flagLoading, setLoadingState})
{
    const [listPill, setListPill] = useState([])

    if (!searchPillVal)
    {
        console.log('Empty search val')
    }
    else
    {
        console.log(searchPillVal)
    }

    return (
        <ul>
            {
                isLoading
                ?
                <li>{"Loading"}</li>
                :
                 message ?
                 message.data.map((entry) =>
                    (
                        <li key={`${entry}`} onClick={(e) => handleClickOnOption(e.target.innerText, listPillSelected, updatePillSelected)}>{entry}</li>
                    ))
                    : null
            }
        </ul>
    )
}

/*
function sortPillList(searchPillVal, listPillSelected)
{
    var ret = new Array()

    listOptionPill.map((entry) =>
        (
            (entry.toLowerCase().includes(searchPillVal) || searchPillVal.length === 0) && !listPillSelected.some(entryInLIst => entryInLIst === entry) ? ret.push(entry) : null
        )
    )
    return(ret)
}

function getPillList(searchPillVal, listPillSelected) {
    // Get the current 'global' time from an API using Promise
    return new Promise((resolve, reject) => {
      setTimeout(function() {
        //var didSucceed = Math.random() >= 0.5
        var didSucceed = true
        if (didSucceed)
        {
            resolve(sortPillList(searchPillVal, listPillSelected))
        }
        else
        {
            reject('Error')
        }
      }, 2000);
    })
  }

function PillOptionsList({searchPillVal, listPillSelected, updatePillSelected, flagLoading, setLoadingState})
{
    const [listPill, setListPill] = useState([])

    console.log(searchPillVal)
    getPillList(searchPillVal, listPillSelected)
    .then((list) => {
        console.log("Promise to search : ", list)
        if (JSON.stringify(list) !== JSON.stringify(listPill))
        {
            setListPill([...list])
            setLoadingState(false)
        }
    })
    .catch(err => console.log(err))
    console.log(flagLoading)
    return (
        <ul>
            {
                flagLoading
                ?
                <li>{"Loading"}</li>
                :
                listPill.map((entry) =>
                    (
                        <li key={`${entry}`} onClick={(e) => handleClickOnOption(e.target.innerText, listPillSelected, updatePillSelected)}>{entry}</li>
                    ))
            }
        </ul>
    )
}

function PillOptionsList({searchPillVal, listPillSelected, updatePillSelected})
{
    console.log(searchPillVal)
    return (
        <ul>
            {listOptionPill.map((entry) =>
            (
                (entry.toLowerCase().includes(searchPillVal) || searchPillVal.length === 0) && !listPillSelected.some(entryInLIst => entryInLIst === entry) ? <li key={`${entry}`} onClick={(e) => handleClickOnOption(e.target.innerText, listPillSelected, updatePillSelected)}>{entry}</li> : null
            )
            )}
        </ul>
    )
}
*/

export default PillOptionsList