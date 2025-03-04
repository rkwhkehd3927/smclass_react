import React,{useState} from "react";
import MovieList from '../components/MovieList';
import Form from '../components/Form';
import Nav from '../components/Nav';
import event from '../images/event02.jpg';

const Home = () => {
  
  return(
    <>
      <Nav/>
      <div classNameName="main"> 
        <h2>Home</h2>
        <div>
          <img src={`${process.env.PUBLIC_URL}/images/event02.jpg`}/>
        </div>
        <br/>
        <div>
          <img src={event}/>
        </div>
      </div>
    </>
  )

}

export default Home;