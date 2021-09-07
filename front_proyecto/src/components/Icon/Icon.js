import { NavLink } from 'react-router-dom'

import './Icon.css'


const Icon = ({iconName, icono}) => {

    return (
        <div >
            <NavLink className="icono" to={`/${iconName}`} activeClassName="currentCategory">  
            <i className={`fas fa-${icono}`}></i> 
            </NavLink>
           
        </div>
    )    
}

export default Icon