import React, { useState, useEffect } from "react";

const Clock = () => {
  const [hours, setHours] = useState();
  const [minutes, setMinutes] = useState();
  const [seconds, setSeconds] = useState();

  const getTime = () => {
    const date = new Date();
    const hou = date.getHours();
    const min = date.getMinutes();
    const sec = date.getSeconds();

    setHours(hou);
    setMinutes(min);
    setSeconds(sec);

    if (hou < 10) {
      setHours(`0${hou}`);
    }
    if (min < 10) {
      setMinutes(`0${min}`);
    }
    if (sec < 10) {
      setSeconds(`0${sec}`);
    }
  };

  useEffect(() => {
    getTime();
  }, []);

  useEffect(() => {
    setTimeout(getTime, 1000);
  }, [seconds]);

  return (
    <h1 className="clock">
      {hours}:{minutes}:{seconds}
    </h1>
  );
};

export default Clock;