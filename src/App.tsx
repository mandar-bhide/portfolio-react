import './App.css';
import Skills from './components/Skills';
import Intro from './components/Intro';
import TopBar from './components/TopBar'
import Work from './components/Work';
import Blogs from './components/Blogs';
import Education from './components/Education';
import { useEffect, useState } from 'react';
import Footer from './components/Footer';
import $ from 'jquery'
import linkClick from './components/TrackedLink';
import { getData } from './firebase';
import { SocialData } from './custom-types';

async function loadSocial(){
  let social = (await getData("social")) as SocialData[];
  return social;
}

function App() {
  const [offset, setOffset] = useState(0);
  useEffect(() => {
      const onScroll = () => setOffset(window.pageYOffset)
      window.removeEventListener('scroll', onScroll)
      window.addEventListener('scroll', onScroll)
      return () => window.removeEventListener('scroll', onScroll)
  }, []);
  const [social, setSocial] = useState<SocialData[]>([]);
  useEffect(()=>{
    loadSocial().then((data)=>setSocial(data));
  },[]);
  return (
    <div>
      <TopBar/><Social data={social}/><Intro data={social}/><Education/><Skills/><Work/><Blogs/><Footer data={social}/>
      {
        offset>80?<button style={{cursor:'pointer'}} onClick={()=>{
          setOffset(0)
          $('html,body').animate({scrollTop: $('#intro').offset()!.top},'smooth');
        }} className="to-top"><i className='bx bx-up-arrow' ></i></button>:<div></div>
      }
    </div>
  );
}

export default App;

function Social({data}:{data:SocialData[]}){
  return <div className='social'>
    <div className="square" style={{background:'var(--theme-blue)'}}>&nbsp;</div>
    <div className="square" style={{background:'var(--theme-green)'}}>&nbsp;</div>
    <div className="square" style={{background:'var(--theme-yellow)'}}>&nbsp;</div>
    <div className="square" style={{background:'var(--theme-red)'}}>&nbsp;</div>
    <div style={{flex:1}}></div>
    {
      data?.map(function(el){        
        return <a href={el.url} onClick={(event)=>{event.preventDefault();linkClick({link:el.url,isProfile:true,profileName:el.name});}} rel="noreferrer" key={el.name}>
          <i className={el.icon}></i>
        </a>
      })
    }
  </div>
}

