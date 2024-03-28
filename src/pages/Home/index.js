import { Link } from 'react-router-dom'

import { Main } from '../../Layout'

const Home = () => {
    return (
        <Main>
            <div>
                <h1>Home</h1>
                <h2>Apps</h2>
                <Link to="todo">TODO App</Link>
            </div>
        </Main>
    )
}

export default Home