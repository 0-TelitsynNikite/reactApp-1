import { useContext } from 'react';
import { ThemeContext } from '../../context';
import './toggle.css'

const sun = 'https://github.com/safak/youtube/blob/react-portfolio-website/src/img/sun.png?raw=true',
      moon = 'https://github.com/safak/youtube/blob/react-portfolio-website/src/img/moon.png?raw=true';

const Toggle = () => {
    const theme = useContext(ThemeContext)

    const handleClick = () => {
        theme.dispatch({type: "TOGGLE"})
    }

    return (
        <div className="t">
            <img src={sun} className="t-icon" />
            <img src={moon} className="t-icon" />
            <div 
                className="t-button" 
                onClick={handleClick} 
                style={{left: theme.state.darkMode ? 0 : 25}}
            ></div>
        </div>
    )
}

export default Toggle;