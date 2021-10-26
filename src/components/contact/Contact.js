import { useRef, useState, useContext } from 'react';
import './contact.css'
import { ThemeContext } from '../../context';

const phone = 'https://github.com/safak/youtube/blob/react-portfolio-website/src/img/phone.png?raw=true',
      email = 'https://github.com/safak/youtube/blob/react-portfolio-website/src/img/email.png?raw=true',
      addres = 'https://github.com/safak/youtube/blob/react-portfolio-website/src/img/address.png?raw=true';

const Contact = () => {
    const formRef = useRef();
    const [done, setDone] = useState(false);
    const theme = useContext(ThemeContext),
          darkMode = theme.state.darkMode;

    const handleSubmit = (e) => {
        e.preventDefault()
    }

    return (
        <div className="c">
            <div className="c-bg"></div>
            <div className="c-wrapper">
                <div className="c-left">
                    <h1 className="c-title">Let's discuss your project</h1>
                    <div className="c-info">
                        <div className="c-info__item">
                            <img 
                                src={phone}
                                alt="" 
                                className="c-icon" />
                            +1 1234 556 75
                        </div>
                        <div className="c-info__item">
                            <img 
                                src={email}
                                alt="" 
                                className="c-icon" />
                            dmtvn.labs@yandex.ru
                        </div>
                        <div className="c-info__item">
                            <img 
                                src={addres}
                                alt="" 
                                className="c-icon" />
                            Moscow
                        </div>
                    </div>
                </div>
                <div className="c-right">
                    <p className="c-desc">
                        <b>What's your story?</b> Get in touch. Always  availiable for freelancing if the right project comes along me.
                    </p>
                    <form ref={formRef} onSubmit={handleSubmit}>
                        <input style={{backgroundColor: darkMode && "#333"}} type="text" placeholder="Name" name="user_name"/>
                        <input style={{backgroundColor: darkMode && "#333"}} type="text" placeholder="Subject" name="user_subject"/>
                        <input style={{backgroundColor: darkMode && "#333"}} type="text" placeholder="Email" name="user_email"/>
                        <textarea style={{backgroundColor: darkMode && "#333"}} rows="5" placeholder="Message" name="message "/>
                        <button>Submit</button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Contact;