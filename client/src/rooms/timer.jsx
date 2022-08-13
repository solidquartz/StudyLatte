import {
  Heading,
  Button
} from "@chakra-ui/react";
import useCountdown from './useCountdown';
import { useState, useEffect } from 'react';


function Countdown(props) {
  const socket = props.socket

  



return (
  <>
  <Heading size="lg">{props.study_status}</Heading>
  <div className="countdown">
    {/* <Heading>{`${minutes}:${seconds}`}</Heading> */}
    <Heading>{props.time}</Heading>
    <Button onClick={ props.onClick}>Start Timer</Button>
  </div>
  </>
);
}

export default Countdown;