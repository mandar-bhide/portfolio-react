import './TopBar.css'
import { navitems } from '../navigation'
import { useState } from 'react'
import $ from 'jquery'

export default function TopBar(){
    const [activeTab,setActiveTab] = useState(0)

    return <div id="intro">
        {
            navitems.map(function(el,index){
                return <p 
                    key={el.name}
                    className={activeTab===index?'navitem active':'navitem'} 
                    onClick={()=>{
                        setActiveTab(index)
                        $('html,body').animate({scrollTop: $(el.url).offset()!.top},'smooth');
                    }}
                >
                    {el.name}
                </p>
            })
        }
    </div>
}
