import { Link } from 'react-router-dom'

const Home = () => {
    return (
        <div>
            <h1>Home</h1>
            <h2>Apps</h2>
            <Link to="todo">TODO App</Link>
        </div>
    )
}

export default Home