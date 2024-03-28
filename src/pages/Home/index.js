import { Link } from 'react-router-dom'

import { Main } from '../../Layout'

const Home = () => {
    return (
        <Main>
            <div>
                <h1>Home</h1>
                <h2>Apps</h2>
                <div><Link to="/todo">TODO APP</Link></div>
                <div><Link to="/calculator">CALCULATOR APP</Link></div>
            </div>
        </Main>
    )
}

export default Home