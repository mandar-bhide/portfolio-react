import me from '../assets/me.jpg'
import { Social } from '../types'
import './Intro.css'
import resume from '../assets/MandarBhide_Resume.pdf';

export default function Intro({data}:{data:Social[]}){
    let resume_direct = "https://docs.google.com/document/d/17T-h7vIGUiVggAmlmi22Ksw6JGvRNuX6pNKKH5iHBTs/export?format=pdf";
    return <section id="intro-1">
        <div className="column" style={{color:'var(--secondary-text-color)'}}>
            <div style={{marginBottom:'2em'}}>
                <span style={{fontSize:'2.2em',fontWeight:400,color:'var(--text-color)'}}>Mandar Bhide</span> <br/>
                <div className='mobile-social'>
                {
                    data.map(function(el){
                        return <a href={el.url} target="_blank" rel="noreferrer" key={el.name}>
                            <i className={el.icon}></i>
                        </a>
                    })
                }
                </div>
                <span style={{minHeight:'1em'}}>&nbsp;</span> <br/>
                <span className='im'>Computer Engineer | CMA Finalist</span>
            </div>
            <div className='intro-buttons'>
                <a href="#work" style={{marginTop:'1rem'}} className="read-all">Engineering Projects</a>
                <span style={{width:'10px',height:'10px'}}>&nbsp;</span>
                <a href={resume} target='_blank' rel='noopener noreferrer' style={{marginTop:'1rem'}} className="read-all">View Resume</a>
            </div>
        </div>
        <div className="image-holder">
            <img id="me" src={me} alt="ME" loading='lazy'/>
        </div>
    </section>
}