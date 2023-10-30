import { useEffect, useState } from 'react';
import { BlogData } from '../types';
import './Blogs.css'
import { getData } from '../firebase';

async function loadBlogs(){
    let blogs = (await getData("blogs")) as BlogData[];
    blogs.sort((a,b)=>b.date.seconds-a.date.seconds);
    return blogs;
  }

export default function Blogs(){
    const [blogs,setBlogs] = useState<BlogData[]>([]);

    useEffect(()=>{
        loadBlogs().then((data)=>setBlogs(data));
    },[]);

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

function BlogBox({blog}:{blog:BlogData}){
    return <div className="blog-box">
        <div className="blog-img-holder" style={{backgroundColor:blog.imageBgColor}}>
            <img src={blog.imageLink} alt={blog.title} className='blog-img' loading='lazy'/>
            <div className="blog-tag" key={blog.tag}>{blog.tag}</div>
        </div>
        <div className="blog-content">
            <h6 className="blog-content-date">{blog.date.toDate().toLocaleDateString('en-US',{year: 'numeric',month: 'short',day: 'numeric'})}</h6>
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