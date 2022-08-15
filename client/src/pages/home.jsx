// import { Link as RouterLink } from 'react-router-dom';
import {
  Button,
} from '@chakra-ui/react';
import '../styles/app.scss';
import {Link, Navigate, useNavigate} from 'react-router-dom';
import { useState } from 'react';



export const Home = (props) => {
  const setUsername = props.setUsername
  const setEntername_status = props.setEntername_status

  return (
    <main className="home-bg">

      <div className="home-container">

        <div className="home-components">

          <div className="title-header">
            <h1>StudyLatte</h1>
          </div>

          <div className="enter-container">

            <div className="enter-wrapper">
              <form action="" className="form">
                <h3>Enter Username</h3>
                <div className="input-group">
                  <input type='text' onChange={(e)=>setUsername(e.target.value)}/>
                </div>

                <div className="input-group">
                  <Button colorScheme='blackAlpha' size="lg" onClick={()=>setEntername_status(true)}>Come in!
                  </Button>
                </div>
              </form>
            </div>
          </div>

          <div className="about-container">
            <div className="about-header">
              <h2>Welcome</h2>
            </div>

            <div className="about-description">
              <p>Studying is always better together.</p>
              <p>While StudyLatte can't pour you a cup of coffee, we can bring the cafe study experience to you. Inspired by "Study With Me" videos, StudyLatte is a virtual study room. You can study alone or together with a group of friends with a shared study timer to keep you all on track and in sync. Enjoy the ambience and share your goals together with our instant chat feature as you work hard!</p>
              <p>To get started, enter a username, then either choose a study room to join or create your very own that you can share with friends.</p>

            </div>

          </div>
          <a href='https://github.com/solidquartz/StudyLatte'><p align="center">Check us out on Github</p></a>

        </div>
      </div>
    </main>
  );
};