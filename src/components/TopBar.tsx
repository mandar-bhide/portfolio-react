import './TopBar.css'
import { navitems } from '../navigation'
import { Dispatch, SetStateAction, useState } from 'react'

export default function TopBar(){
    const [activeTab,setActiveTab] = useState(0)

    return <div id="intro">
        {
            navitems.map(function(el,index){
                return <NavItem 
                    name={el["name"]} 
                    url={el["url"]} 
                    isActive={index===activeTab} 
                    onclick={setActiveTab}
                    index={index}
                    key={el["name"]}
                />
            })
        }
    </div>
}

function NavItem(
    {name,url,isActive=false,onclick,index}:
    {name:String,url:string,isActive?:boolean,onclick:Dispatch<SetStateAction<number>>,index:number}
):JSX.Element{    
    return <a href={url.toString()} className={isActive?'navitem active':'navitem'} onClick={()=>onclick(index)}>
        {name}
    </a>
}