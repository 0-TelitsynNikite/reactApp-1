import './about.css'

const imgAward = 'https://github.com/safak/youtube/blob/react-portfolio-website/src/img/award.png?raw=true';

const About = () => {
    return (
        <div className="a">
            <div className="a-left">
                <div className="a-card bg"></div>
                <div className="a-card">
                    <img 
                        src="https://images.unsplash.com/photo-1516035069371-29a1b244cc32?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=764&q=80" 
                        alt="" 
                        className="a-img" />
                </div>
            </div>
            <div className="a-right">
                <h1 className="a-title">About Me</h1>
                <p className="a-sub">
                    It is a long established fact that a reader will be distracted by the readable content.
                </p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde voluptatum veniam blanditiis autem temporibus reprehenderit, maxime aspernatur. Fugiat, facilis. Sint ut ipsa animi quam ea molestiae perferendis consequatur sapiente iste, modi mollitia quibusdam maiores voluptatibus vero tempora reprehenderit dolorem rerum quod explicabo!</p>
                <div className="a-award">
                    <img src={imgAward} alt="" className="a-award__img" />
                    <div className="a-award-texts">
                        <h4 className="a-award-texts__title">International Design Awards 2021</h4>
                        <p className="a-award-texts__desc">Nemo enim ipsam voluptatem quia voluptas sit aspernatur autodit and fugit</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About