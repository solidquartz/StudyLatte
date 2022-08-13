// import { Link as RouterLink } from 'react-router-dom';
import {
  Button,
} from '@chakra-ui/react';
import '../styles/app.scss';





export const Home = () => {


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
                  <input type='text'/>
                </div>

                <div className="input-group">
                  <Button colorScheme='blackAlpha' size="lg">
                    Come in!
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

            </div>

          </div>


        </div>
      </div>
    </main>
  );
};