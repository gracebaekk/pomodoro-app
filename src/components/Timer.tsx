import { CircularProgressbar , buildStyles} from 'react-circular-progressbar';
import { useState, useEffect } from 'react';
import 'react-circular-progressbar/dist/styles.css';
import "./Timer.css";

const value = 25;

// const TIMER_ACTIONS = {
//   START: 'start',
//   PAUSE: 'pause',
//   RESTART: 'restart',
// };
// const FOCUS_TIME_MINUTES = 0.2 * 60 * 1000;
// const BREAK_TIME_MINUTES = 0.1 * 60 * 1000;

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

const FOCUS_TIME_MINUTES = 0.2 * 60 * 1000;
const [timeLeft, setTimeLeft] = useState(FOCUS_TIME_MINUTES);
const [isRunning, setIsRunning] = useState(false);


const formatTime = (seconds) => {
  const minutes = Math.floor(seconds / 60);
  const remainingSeconds = seconds % 60;
  return `${minutes}:${remainingSeconds < 10 ? '0' : ''}${remainingSeconds}`;
};

useEffect(() => {
  let timer = null;
  if (isRunning && timeLeft > 0) {
    timer = setInterval(() => {
      setTimeLeft((prevTime) => prevTime - 1);
    }, 1000);
  } else if (timeLeft === 0) {
    setIsRunning(false); // Stop when the timer reaches 0
  }
  return () => clearInterval(timer); // Clear interval on component unmount
}, [isRunning, timeLeft, FOCUS_TIME_MINUTES]);


const handleStartStop = () => {
  setIsRunning(!isRunning);
};

// Reset the timer if timeLeft reaches 0
const handleReset = () => {
  setTimeLeft(FOCUS_TIME_MINUTES);
  setIsRunning(false);
};


function Timer() {
  return (
    <div className="timer-container">
      <CircularProgressbar 
        value={100} 
        text={formatTime(timeLeft)} 
        strokeWidth={2.5}
        background={true}
        backgroundPadding={5}
        className="timer"
        styles={buildStyles({
          pathTransitionDuration: 0.5,
          pathColor: '#f87070',
          textColor: '#ffffff',
          trailColor: '#d6d6d6',
          backgroundColor: '#161932',
          textSize: '22px',
        })}
        />
    </div>
  );
}

export default Timer;
