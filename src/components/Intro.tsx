import me from '../assets/me.jpg'
import { social } from '../assets/social'
import './Intro.css'

export default function Intro(){
    return <section id="intro-1">
        <div className="column" style={{color:'var(--secondary-text-color)'}}>
            <div style={{marginBottom:'2em'}}>
                <span style={{fontSize:'2.2em',fontWeight:400,color:'var(--text-color)'}}>Mandar Bhide</span> <br/>
                <div className='mobile-social'>
                {
                    social.map(function(el){
                        return <a href={el["url"]} target="_blank" rel="noreferrer" key={el["name"]}>
                            {el["icon"]}
                        </a>
                    })
                }
                </div>
                <span style={{minHeight:'1em'}}>&nbsp;</span> <br/>
                <span className='im'>Computer Engineer | Full-stack Developer</span>
            </div>
            Developing full stack applications for mobile, web and desktop since 2019. <br/>
            <a href="#work" style={{marginTop:'1rem'}} className="read-all">Checkout My Projects</a>
        </div>
        <div className="image-holder">
            <img id="me" src={me} alt="ME" loading='lazy'/>
        </div>
    </section>
}