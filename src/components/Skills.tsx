import './Skills.css'

export default function Skills(){

    var languages = [["C/C++","Java","Kotlin","Dart"],["Typescript","Python","Lua"],["Flutter","ReactJS","Flask"],["NodeJS","ElectronJS"]]
    var other = [["Databases","Google Cloud"],["Image Processing","Machine Learning"],["Data Analytics"]]
    var tools = [["Git/Github","Android Studio","Figma"],["Postman","MS Office"]]
    return <section id="skills">
        <SkillColumn title="Languages & Frameworks" data={languages}/>
        <SkillColumn title="Development" data={other}/>
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
