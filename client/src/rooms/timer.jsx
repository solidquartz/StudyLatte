import {
  Heading,
  Button
} from "@chakra-ui/react";
import useCountdown from './useCountdown';
import { useState, useEffect } from 'react';
import '../styles/app.scss';


function Countdown(props) {
  const socket = props.socket
  const [timeStarted, setTimeStarted] = useState(false)
  const isAdmin = props.isAdmin


  const timeConverter = function (totalSeconds) {
    let minutes = Math.floor(totalSeconds / 60);
    let seconds = totalSeconds % 60
    function padTo2D(num) {
      return num.toString().padStart(2, '0')
    }

    return `${padTo2D(minutes)} : ${padTo2D(seconds)}`

  }
  const handleClick = function () {
    setTimeStarted(true)
    props.onClick()
  }


  return (
    <>
      <Heading size="lg">{props.study_status}</Heading>
      <div className="countdown">
        <Heading>{timeConverter(props.time)}</Heading>

        <div>
          {isAdmin && 
          <Button
            disabled={timeStarted}
            onClick={
              handleClick
            }
          >
            Start Timer
          </Button>}

        </div>
      </div>
    </>
  );
}

export default Countdown;