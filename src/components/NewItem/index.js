import { useState } from 'react'

const NewItem = ({ createNewItem }) => {
    const [value, setValue] = useState('')

    const onChange = (e) => {
        setValue(e.target.value)
    }

    const onAdd = () => {
        createNewItem({ value, checked: false })

        setValue('')
    }

    return (
        <div>
            <input type="text" value={value} onChange={onChange} />
            <input type="button" value="Add" onClick={onAdd} />
        </div>
    )
}

export default NewItem