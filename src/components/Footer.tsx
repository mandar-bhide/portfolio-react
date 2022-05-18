import './Footer.css'
import { links } from '../assets/footerlinks'
import { social } from '../assets/social'
import linkClick from './TrackedLink'

export default function Footer(){
    const contacts = [
        {
            text:"WhatsApp",
            link:"https://wa.me/917972202054",
            icon:<i className='bx bxl-whatsapp'></i>
        },
        {
            text:"Email",
            link:"mailto:mandarbhide62@gmail.com",
            icon:<i className='bx bx-envelope'></i>
        }
    ]

    return <section id="footer">
        <h2 style={{letterSpacing:'1px'}}>Connect With Me</h2>
        <div className="footer-spacer">&nbsp;</div>
        <div className="contact-row">
            {
                contacts.map((el)=>{
                    return <a href={el.link} key={el.text} onClick={(event)=>{event.preventDefault();linkClick({link:el.link,isProfile:true,profileName:el.text});}}rel="noreferrer" className="connect-link">
                        {el.icon}
                        <p className='contact-text'>{el.text}</p>
                    </a>
                })
            }
        </div>
        <div className="footer-links">
            {
                links.map((el)=>{
                    return <a className='footer-link' onClick={(event)=>{event.preventDefault();linkClick({link:el.url,isProfile:false});}} rel='noreferrer' href={el.url} key={el.name}>{el.name}</a>
                })
            }
        </div>
        <div className='mobile-social'>
            {
                social.map(function(el){
                    return <a href={el["url"]} onClick={(event)=>{event.preventDefault();linkClick({link:el.url,isProfile:true,profileName:el.name});}} className='mobile-social-icon' target="_blank" rel="noreferrer" key={el["name"]}>
                        {el["icon"]}
                    </a>
                })
            }
        </div>
        <span className='made-with'>
            Made with <i className='bx bxs-heart' style={{color:'red',marginInline:'7px'}}></i> in <i className='bx bxl-react' style={{color:'#61DBFB',marginLeft:'7px'}}></i>React
        </span>
    </section>
}

