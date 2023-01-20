import './Education.css'
import { education } from "../assets/education";

export default function Education(){
    
    return <section id="education">        
        <div className="ed-area">
            {
                education.map((el)=><EducationBox ed={el} key={el.degree}/>)
            }
        </div>
    </section>
}

function EducationBox(
    {ed}:
    {
        ed:{
            degree: string;
            uni: string;
            fromto: string;
            grade: string;
        }
    }
){
    return <div className="ed-box">
        <span className="vline"></span>
        <div className="ed-text">
            <h4 className="ed-degree">{ed.degree}</h4>
            <p className="ed-uni">{ed.uni}</p>
            <p className="ed-fromto">{ed.fromto}</p> 
            <p className="ed-grade">{ed.grade}</p> 
        </div>       
    </div>
}