import './Blogs.css'
import blogs from '../assets/data/blogs.json'
import { Blog } from '../types'

export default function Blogs(){

    return <section id='blogs'>
        <div className="blog-title">
            <h2 className='blog-area-title'>I Write Here</h2>
            <div style={{flexGrow:1}}>&nbsp;</div>
            <a href="https://mdb2301.medium.com/" target='_blank'rel="noreferrer" className="read-all">Read More</a>
        </div>
        <div className="blog-area">
            {
                blogs.map((el)=><BlogBox blog={el} key={el.title}/>)
            }
        </div>
    </section>
}

function BlogBox({blog}:{blog:Blog}){
    return <div className="blog-box">
        <div className="blog-img-holder" style={{backgroundColor:blog.imageBgColor}}>
            <img src={blog.imageLink} alt={blog.title} className='blog-img' loading='lazy'/>
            <div className="blog-tag" key={blog.tag}>{blog.tag}</div>
        </div>
        <div className="blog-content">
            <h6 className="blog-content-date">{blog.date}</h6>
            <div style={{height:'4px'}}>&nbsp;</div>
            <h4 className="blog-content-title">{blog.title}</h4>
            <div style={{height:'10px'}}>&nbsp;</div>
            <h6 className="blog-content-subtitle">{blog.subtitle}</h6>
            <a href={blog.link} target='_blank' rel="noreferrer" className="read-blog">
                <span className="read">Read</span>
                <span className="time">{blog.time}</span>
            </a>
        </div>
    </div>
}