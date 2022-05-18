import axios from "axios";

export default function linkClick({link,isProfile,profileName}:{link:string,isProfile:boolean,profileName?:string}){
    const platform = navigator.userAgent
    const key = '3T$Np5ryi#yDQyJTC3aSy!:?32np6aExQ%pXBnpxgENQP&yeVGviGB'
    window.open(link,'_blank')?.focus()
    if(isProfile){
        axios.post(
            'https://mdb-portfolio-backend.herokuapp.com/profile',
            {platform:platform,key:key,profile:profileName}
        )
    }else{
        axios.post(
            'https://mdb-portfolio-backend.herokuapp.com/link',
            {platform:platform,key:key,link:link}
        )
    }
}
