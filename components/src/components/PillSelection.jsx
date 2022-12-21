import { useState } from 'react'
import '../styles/InputPill.css'
import PillOptions from './PillOptions'

function handleAddPill(showPillOption, setPillOptionVisibility)
{
    if (showPillOption)
    {
        setPillOptionVisibility(false)
    } 
    else 
    {
        setPillOptionVisibility(true)
    }
}

function handleBlur(setPillOptionVisibility)
{
    console.log("Blur")
    setPillOptionVisibility(false)
}

function handleDeletePill(e, listPillSelected, updatePillSelected)
{
    console.log(e.target.parentElement.innerText)
    console.log("Delete")
    const pillVal = e.target.parentElement.innerText.slice(0, -1)
    const index = listPillSelected.map(entry => entry).indexOf(pillVal);
    if (index != -1)
    {
        console.log("!!! Remove !!!", index)
        console.log("Remove Pille in list : ", pillVal)
        listPillSelected.splice(index, 1)
        console.log(listPillSelected)
    }
    updatePillSelected([...listPillSelected])
    e.stopPropagation()
}

function PillSelection({props})
{
    const [showPillOption, setPillOptionVisibility] = useState(false)
    const [listPillSelected, updatePillSelected] = useState([])

    console.log(listPillSelected)
    return (
        <div>
            <div key={"inputPill-key"} className="input-pill" 
                onClick={() => handleAddPill(showPillOption, setPillOptionVisibility)}
                onBlur={() => handleBlur(setPillOptionVisibility)}
            >
                {
                    listPillSelected.map((pill) => 
                    {
                        return (
                        <span key={`${pill}`} className='pill-button'>
                            {pill}
                            <i className="delete" onClick={(e) => handleDeletePill(e, listPillSelected, updatePillSelected)}>x</i>
                        </span>
                        )
                    })
                }
            </div>
            {
                showPillOption ? <PillOptions listPillSelected={listPillSelected} updatePillSelected={updatePillSelected}/> : null
            }
        </div>
    )
    
}
export default PillSelection