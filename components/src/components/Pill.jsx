import { v4 as uuid } from 'uuid'

function handleDelete(component, e, setPillInputVisibility, listPill, updateListPill) {
    console.log("Delete")
    const index = listPill.map(object => object.id).indexOf(e.target.parentElement.id);
    if (index != -1)
    {
        console.log("!!! Remove !!!", index)
        console.log("Remove Pille in list : ", e.target.parentElement.id)
        listPill.splice(index, 1)
        console.log(listPill)
//        e.target.parentElement.remove()
    }
    updateListPill([...listPill])
    setPillInputVisibility(false)
    e.stopPropagation()
}

function handleBlur(e, setSelectedPill, setPillInputVisibility, listPill, updateListPill) {
//    console.log("Component value", e.target.value, e.target.parentElement.id)
    console.log("Blur", e.target.value.length)

    const index = listPill.map(object => object.id).indexOf(e.target.parentElement.id);
    if (e.target.value.length === 0 && index != -1)
    {
        console.log("!!! Remove !!!")
        console.log("Remove Pille in list : ", e.target.parentElement.id, e.target.value)
        listPill = listPill.splice(index, 1)
        e.target.parentElement.remove()
    }

    console.log("ListPill : ", listPill)
    console.log("Index, ID", index, e.target.parentElement.id)
    if (index === -1) 
    {
        console.log("Add Pill in list :", e.target.parentElement.id, e.target.value)
        listPill.push({id: e.target.parentElement.id, val: e.target.value})
    }
    else
    {
        listPill[index].val = e.target.value
    }
    

    console.log(listPill)
    updateListPill([...listPill])
    setSelectedPill(false)
    setPillInputVisibility(false)
}
function handleClickPill(e, setSelectedPill)
{
    console.log("Click")
    setSelectedPill(true)
    e.stopPropagation()
}

function Pill({id, val, listPill, updateListPill, setSelectedPill, setPillInputVisibility}) {
    const idKey = id ? id : uuid()

    console.log("idKey", idKey)

    return (
        <span id={`${idKey}`}>
            <input type={"text"} defaultValue={val} 
            onBlur={(e) => handleBlur(e, setSelectedPill, setPillInputVisibility, listPill, updateListPill)}
            onClick={(e) => handleClickPill(e, setSelectedPill)}
            />
            <i className="delete" onClick={(e) => handleDelete(e.target.parentElement, e, setPillInputVisibility, listPill, updateListPill)}>x</i>
        </span>
    )
}

export default Pill