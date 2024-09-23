import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import { useState, useEffect } from "react";
import "react-circular-progressbar/dist/styles.css";
import "./Timer.css";


// const TIMER_ACTIONS = {
//   START: 'start',
//   PAUSE: 'pause',
//   RESTART: 'restart',
// };

// const [isPaused, setIsPaused] = useState(true);
// const [timerCount, setTimerCount] = useState<number>(12);
// const [timerInterval, setTimerInterval] = useState<NodesJS.Timer | null>(null);

// const startTimer = () => {
//   const id = setInterval(() => setTimerCount((prev) => prev - 1000), 1000);
//   setTimerInterval(id);
// }

// const stopTimer = () => {
//   if (timerInterval != null) {
//     clearInterval(timerInterval);
//   }
// }




function Timer() {
  const FOCUS_TIME_MINUTES = 25;
  const BREAK_TIME_MINUTES = 5;

  const [timeLeft, setTimeLeft] = useState(FOCUS_TIME_MINUTES);
  const [isRunning, setIsRunning] = useState(false);

  const formatTime = (seconds: number) => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${minutes}:${remainingSeconds < 10 ? "0" : ""}${remainingSeconds}`;
  };

  const handleStartPauseReset = () => {
    if (timeLeft == 0) {
      setTimeLeft(FOCUS_TIME_MINUTES);
    } else if (isRunning) {
      setIsRunning(false);
    } else {
      setIsRunning(true);
    }
    
  };

  const buttonStyle = {
    fontSize: '18px',
    background: 'none',
    border: 'none',
    color: '#ffffff',
    cursor: 'pointer',
  };

  useEffect(() => {
    let timer: number | undefined;
    if (isRunning && timeLeft > 0) {
      timer = setInterval(() => {
        setTimeLeft((prevTime) => prevTime - 1);
      }, 1000);
    } else if (timeLeft === 0) {
      setIsRunning(false); // Stop when the timer reaches 0
    }
    return () => clearInterval(timer); // Clear interval on component unmount
  }, [isRunning, timeLeft, FOCUS_TIME_MINUTES]);

  return (
    <div className="progressbar-container">
      <CircularProgressbar
        value={100}
        text={formatTime(timeLeft)}
        strokeWidth={2.5}
        background={true}
        backgroundPadding={5}
        className="timer"
        styles={buildStyles({
          pathTransitionDuration: 0.5,
          pathColor: "#f87070",
          textColor: "#ffffff",
          trailColor: "#d6d6d6",
          backgroundColor: "#161932",
          textSize: "22px",
        })}
      />
      <button className="center-button" onClick={handleStartPauseReset}>
          {timeLeft === 0 ? 'RESET' : isRunning ? 'PAUSE' : 'START'}
      </button>
    </div>
  );
}

export default Timer;
