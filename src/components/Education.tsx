import './Education.css'
import education from '../assets/data/education.json'
import { Education } from '../types'
import tick from '../assets/tick.svg'

export default function EducationScreen(){
    return <section id="education">
        <div className="timeline">
            {education.map((el)=>education.indexOf(el)===0?<Circle active/>:<Circle/>)}
        </div>          
        <div className="ed-area">{education.map((el)=><EducationBox ed={el} key={el.degree}/>)}</div>
    </section>
}

function EducationBox({ed}:{ed:Education}){
    return <div className="ed-box">    
        <h4 className="ed-degree">{ed.degree}</h4>
        <p className="ed-uni">{ed.uni}</p>
        <p className="ed-fromto">{ed.fromto} &nbsp; {ed.grade==='N/A'?"":ed.grade}</p> 
    </div>
}

function Circle({active=false}:{active?:boolean}){
    return <div className={active?"circle circle-active":"circle"}>
        {!active?<img style={{width:'10px',height:'10px'}} src={tick} alt="" />:''}
    </div>
}

/* 
<div className="ed-area">{education.map((el)=><EducationBox ed={el} key={el.degree}/>)}</div>
*/