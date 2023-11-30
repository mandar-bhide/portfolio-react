import './Work.css'
import projects from '../assets/data/projects.json'
import { Project } from '../types'

export default function Work(){
    return <section id="work">
        <div className="blog-title">
            <h2 className='blog-area-title'>Top Projects</h2>
            <div style={{flexGrow:1}}>&nbsp;</div>
            <a href="https://github.com/mdb2301?tab=repositories" target='_blank'rel="noreferrer" className="read-all">View All</a>
        </div>
        <div className="work-area">
            {projects.map((el)=><WorkBox element={el} key={el.title}/>)}
        </div>
    </section>
}

function WorkBox({element}:{element:Project}){
    const link = require("../assets/"+element.image)
    return <div className='workbox'>
        <div className='work-image-holder'>
            {element.codeLink!=="In Progress"?
                <a href={element.codeLink} target='_blank' rel="noreferrer" className="git-link"><i className='bx bx-link-alt'></i></a>:
                <p className="in-progress">In Progress</p>}
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

