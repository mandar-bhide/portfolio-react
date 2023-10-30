import { useEffect, useState } from 'react';
import './Education.css'
import { getData } from '../firebase';
import { EducationData } from '../types';

async function loadEducation(){
    let education = (await getData("education")) as EducationData[];
    education.sort((a,b)=>b.index-a.index);
    return education;
}

export default function Education(){
    const [education,setEducation] = useState<EducationData[]>([]);

    useEffect(()=>{
        loadEducation().then((data)=>setEducation(data));
    },[]);
    return <section id="education">        
        <div className="ed-area">
            {
                education.map((el)=><EducationBox ed={el} key={el.degree}/>)
            }
        </div>
    </section>
}

function EducationBox({ed}:{ed:EducationData}){
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