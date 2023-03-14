import './Skills.css'

export default function Skills(){
    var tech = [["System Programming","Mobile and Web"],["UI Design","Backend development"],["Cross-platform","AI/ML",]]
    var tools = [["Git/Github","Android Studio","Figma"],["Postman","MS Office","SAP-FICO"]]
    var fin = [["Cost Accounting","Taxation"],["Financial Accounting"]]
    return <section id="skills">
        <SkillColumn title="Engineering" data={tech}/>
        <SkillColumn title="CMA" data={fin}/>
        <SkillColumn title="Tools" data={tools}/>
    </section>
}

function SkillColumn({title,data}:{title:String,data:String[][]}){
    return <div className="skill-column">
        <h2 className='col-title'>{title}</h2>
        {
            data.map((el,index)=><div className="row" key={index} style={{alignItems:'center',justifyContent:'start'}}>
                    {el.map((e)=><div className="tag" key={e.toString()}>{e}</div>)}
                </div>
            )
        }
    </div>
}
