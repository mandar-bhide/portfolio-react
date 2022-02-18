import './Work.css'
import { projects } from '../assets/projects'

export default function Work(){
    return <section id="work">
        <h2 className='work-area-title'>Top Projects</h2>
        <div className="work-area">
            {projects.map((el)=><WorkBox element={el} key={el.title}/>)}
        </div>
    </section>
}

function WorkBox(
    {element}:
    {
        element:{
            title: string;
            image: string;
            description: string;
            technologies: string[];
            codeLink: string;
            type: string;
        }
    }
){
    const link = require("../assets/"+element.image)
    return <div className='workbox'>
        <div className='work-image-holder'>
            {element.codeLink!=="In Progress"?<a href={element.codeLink} rel="noreferrer" target='_blank' className="git-link"><i className='bx bx-link-alt'></i></a>:<p className="in-progress">In Progress</p>}
            <img src={link} loading='lazy' alt={element.title} className='work-image'/>
            <p className="work-type">{element.type}</p>
        </div>
        <div className='workbox-content'>
            <h4 className='work-title'>{element.title}</h4>
            <p className="work-detail">{element.description}</p>
            <div className="built-with">
                {
                    element.technologies.map((el)=><p className='tech' key={el}>{el}</p>)
                }
            </div>
        </div>
    </div>
}

