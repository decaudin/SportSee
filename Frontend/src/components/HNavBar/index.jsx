import { Link } from 'react-router-dom';
import './index.scss';
import logo from '../../assets/logo.svg';
import group from '../../assets/group.svg'

const HNavBar = () => {

    const handleFakeLink = (e) => {
        e.preventDefault();
        alert("Page en construction ..");
      };

    return(
        <div className='hNavBar'>
            <div className='logo'>
                <img className='logoImg' src={logo} alt='logo' />
                <img className='groupImg' src={group} alt='group' />
            </div>
            <nav className='horizontalNav'>
                <ul className='hNav'>
                    <li><Link to="#" className="hLink" onClick={handleFakeLink}>Accueil</Link></li>
                    <li><Link to="/user/:id" className="hLink">Profil</Link></li>
                    <li><Link to="#" className="hLink" onClick={handleFakeLink}>Réglage</Link></li>
                    <li><Link to="#" className="hLink" onClick={handleFakeLink}>Communauté</Link></li>
                </ul>
            </nav>
        </div>
    )
}

export default HNavBar;
