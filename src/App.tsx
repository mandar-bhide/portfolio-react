import './App.css';
import Skills from './components/Skills';
import Intro from './components/Intro';
import TopBar from './components/TopBar'
import Work from './components/Work';
import Blogs from './components/Blogs';
import { useEffect, useState } from 'react';
import { social } from './assets/social'
import Footer from './components/Footer';
import $ from 'jquery'
import linkClick from './components/TrackedLink';

function App() {
  const [offset, setOffset] = useState(0);
  useEffect(() => {
      const onScroll = () => setOffset(window.pageYOffset)
      window.removeEventListener('scroll', onScroll)
      window.addEventListener('scroll', onScroll)
      return () => window.removeEventListener('scroll', onScroll)
  }, []);
  return (
    <div>
      <TopBar/>
      <Social/>
      <Intro/>
      <Skills/>
      <Work/>
      <Blogs/>
      <Footer/>
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

function Social(){

  return <div className='social'>
    <div className="square" style={{background:'var(--theme-blue)'}}>&nbsp;</div>
    <div className="square" style={{background:'var(--theme-green)'}}>&nbsp;</div>
    <div className="square" style={{background:'var(--theme-yellow)'}}>&nbsp;</div>
    <div className="square" style={{background:'var(--theme-red)'}}>&nbsp;</div>
    <div style={{flex:1}}></div>
    {
      social.map(function(el){
        return <a href={el["url"]} onClick={(event)=>{event.preventDefault();linkClick({link:el.url,isProfile:true,profileName:el.name});}} rel="noreferrer" key={el["name"]}>
          {el["icon"]}
        </a>
      })
    }
  </div>
}

