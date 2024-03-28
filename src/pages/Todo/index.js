import { ItemRow, NewItem } from '../../components'
import useTodo from './hooks'

import { Main } from '../../Layout'

const Todo = () => {
    const { todo, createNewItem, updateItem, deleteItem } = useTodo()

    return (
        <Main>
            <div className="App">
                <h1>REACT - TODO APP</h1>
                <div>
                    <NewItem createNewItem={createNewItem} />
                    <div className="list">
                        {!todo.length && <p>NO ITEMS ADDED</p>}
                        {todo.map((item, index) => {
                            return (
                                <ItemRow item={item} index={index} updateItem={updateItem} deleteItem={deleteItem} />
                            )
                        })}
                    </div>
                </div>
            </div>
        </Main>
    )
}

export default Todo