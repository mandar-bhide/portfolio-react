import me from '../assets/me.jpg'
import { social } from '../assets/social'
import './Intro.css'
import resume from '../assets/Mandar_Bhide.pdf'

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
            Exploring the world of computers and development since 2017 <br/>
            <div className='intro-buttons'>
                <a href="#work" style={{marginTop:'1rem'}} className="read-all">Checkout My Projects</a>
                <span style={{width:'10px',height:'10px'}}>&nbsp;</span>
                <a href={resume} target='_blank' rel='noopener noreferrer' style={{marginTop:'1rem'}} className="read-all">View Resume</a>
            </div>
        </div>
        <div className="image-holder">
            <img id="me" src={me} alt="ME" loading='lazy'/>
        </div>
    </section>
}