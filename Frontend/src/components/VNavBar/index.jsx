import { Link } from 'react-router-dom';
import './index.scss';
import meditate from '../../assets/meditate.svg';
import swim from '../../assets/swim.svg';
import bike from '../../assets/bike.svg';
import umbbell from '../../assets/umbbell.svg';

const VNavBar = () => {

    const handleFakeLink = (e) => {
        e.preventDefault();
        alert("Page en construction ..");
      };

    return(
        <div className='vNavBar'>
            <nav className='verticalNav'>
                <ul className='vNav'>
                    <li><Link to="#" className="hLink" onClick={handleFakeLink}><img className='logo' src={meditate} alt='logo-meditation' /></Link></li>
                    <li><Link to="#" className="hLink" onClick={handleFakeLink}><img className='logo' src={swim} alt='logo-swimmer' /></Link></li>
                    <li><Link to="#" className="hLink" onClick={handleFakeLink}><img className='logo' src={bike} alt='logo-biker' /></Link></li>
                    <li><Link to="#" className="hLink" onClick={handleFakeLink}><img className='logo' src={umbbell} alt='logo-umbbel' /></Link></li>
                </ul>
            </nav>
            <p className='verticalText'>Copyright, SportSee 2020</p>
        </div>
    )
}

export default VNavBar;