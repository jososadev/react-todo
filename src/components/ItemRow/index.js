import './style.css'

const Row = ({ item, index, updateItem, deleteItem }) => {
    const { value, checked } = item

    const onCheck = () => {
        console.log('update')

        updateItem({ value, checked: !checked }, index)
    }

    const onDelete = (e) => {
        e.stopPropagation()

        deleteItem(index)
    }

    const className = `row ${checked ? 'checked' : ''}`

    return (
        <div onClick={onCheck} className={className}>
            <p>{value}</p>
            <div onClick={onDelete} className="close">X</div>
        </div>
    )
}

export default Row