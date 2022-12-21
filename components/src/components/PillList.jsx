import { useState } from 'react'
import '../styles/InputPill.css'
import Pill from './Pill'

function handleAddPill(showPillInput, setPillInputVisibility) {
    console.log("showPillInput", showPillInput)
    setPillInputVisibility(true)
}

function PillList ()
{
    const [showPillInput, setPillInputVisibility] = useState(false)
    const [selectedPill, setSelectedPill] = useState(false)
    const [listPill, updateListPill] = useState([])

    return (
        <div key="PillList-key" className="input-pill" 
            onClick={() => handleAddPill(showPillInput, setPillInputVisibility)}
        >
            {listPill.map((pill) => 
            <Pill key={pill.id} id={pill.id} val={pill.val} listPill={listPill} updateListPill={updateListPill} setSelectedPill={setSelectedPill} setPillInputVisibility={setPillInputVisibility}/>
            )}
            { showPillInput ? <Pill id={null} val={''} listPill={listPill} updateListPill={updateListPill} setSelectedPill={setSelectedPill} setPillInputVisibility={setPillInputVisibility}/> : null }
        </div>
    )
}

export default PillList
//<Pill id={42} val={"Coucou"} listPill={listPill} updateListPill={updateListPill} setSelectedPill={setSelectedPill} setPillInputVisibility={setPillInputVisibility}/>