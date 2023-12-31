import './Footer.css'
import links from '../assets/data/footerlinks.json'
import { Social } from '../types'

export default function Footer({data}:{data:Social[]}){
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
                    return <a href={el.link} key={el.text} rel="noreferrer" className="connect-link" target='_blank'>
                        {el.icon}
                        <p className='contact-text'>{el.text}</p>
                    </a>
                })
            }
        </div>
        <div className="footer-links">
            {
                links.map((el)=>{
                    return <a className='footer-link' rel='noreferrer' href={el.url} key={el.name} target='_blank'>{el.name}</a>
                })
            }
        </div>
        <div className='mobile-social'>
            {
                data.map(function(el){
                    return <a href={el.url} className='mobile-social-icon' target="_blank" rel="noreferrer" key={el["name"]}>
                        <i className={el.icon}></i>
                    </a>
                })
            }
        </div>
        <span style={{height:'5em'}}></span>
        <span className='made-with'>
            <div>Made with <i className='bx bxs-heart' style={{color:'red',marginInline:'2px'}}></i></div>
            <span style={{height:'8px'}}></span>
            <div style={{display:'flex',alignItems:'center',justifyContent:'center'}}>in <i className='bx bxl-react' style={{color:'#61DBFB',fontSize:'1.3em',marginInline:'1px'}}></i>+<i className='bx bxl-typescript' style={{color:'#007acc', fontSize:'1.3em',marginInline:'1px'}}></i> </div>
        </span>
    </section>
}

