import React, { useState } from "react";

function CountDown() {
  const [state, setState] = useState({
    minutes: 0,
    seconds: 0,
  });

  const startingTime = 45;
  let time = startingTime * 60;

  const countDown = () => {
    setState({
      minutes: Math.floor(time / 60),
      seconds: time % 60,
    });
    time--;
  };
  return (
    <>
      <p>{`${state.minutes}:${(state.seconds =
        state.seconds < 10 ? "0" + state.seconds : state.seconds)}`}</p>
      <button onClick={() => setInterval(countDown, 1000)}>start</button>
    </>
  );
}

export { CountDown };
