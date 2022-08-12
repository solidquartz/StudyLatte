// import { Link as RouterLink } from 'react-router-dom';
import {
  Button
} from '@chakra-ui/react';
import '../styles/app.scss';



export const Home = () => {


  return (
    <main>

      <div className="home-container">

        <div className="home-components">

          <div className="title-header">
            <h1>StudyLatte</h1>
          </div>

          <div className="enter-container">

            <div className="enter-form">
              <div className="username-field">

              </div>
              <div className="username-button">
              </div>
            </div>
            
          </div>

          <div className="about-container">
            <div className="about-header">

            </div>

            <div className="about-description">

            </div>
          </div>

        </div>

      </div>

    </main>
  );
};