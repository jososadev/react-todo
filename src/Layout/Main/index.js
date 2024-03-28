import { Link } from 'react-router-dom'

import './style.css'

const Menu = () => {
    return (
        <div className="menu">
            <div className="grow">
                <div><Link to="/">Home</Link></div>
            </div>
            <div>
                <div><Link to="/todo">TODO</Link></div>
            </div>
            <div>
                <div><Link to="/calculator">CALCULATOR</Link></div>
            </div>
        </div>
    )
}

const Main = ({ children }) => {
    return (
        <div>
            <Menu />
            <div className='main-layout'>
                {children}
            </div>
        </div>
    )
}

export default Main