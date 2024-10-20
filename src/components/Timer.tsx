import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import { useState, useEffect } from "react";
import "react-circular-progressbar/dist/styles.css";
import "./Timer.css";

interface TimerProps {
  settings: {
    pomodoro: number;
    shortBreak: number;
    longBreak: number;
    color: string;
  };
}

const Timer: React.FC<TimerProps> = ({ settings }) => {
  const [timeLeft, setTimeLeft] = useState(settings.pomodoro * 60);
  const [isRunning, setIsRunning] = useState(false);

  useEffect(() => {
    setTimeLeft(settings.pomodoro * 60);
  }, [settings.pomodoro]);

  const formatTime = (seconds: number) => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${minutes}:${remainingSeconds < 10 ? "0" : ""}${remainingSeconds}`;
  };

  const handleStartPauseReset = () => {
    if (timeLeft == 0) {
      setTimeLeft(settings.pomodoro);
    } else if (isRunning) {
      setIsRunning(false);
    } else {
      setIsRunning(true);
    }
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
  }, [isRunning, timeLeft, settings.pomodoro]);

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
          pathColor: settings.color,
          textColor: "#ffffff",
          trailColor: "#d6d6d6",
          backgroundColor: "#161932",
          textSize: "22px",
        })}
      />
      <button
        className="center-button"
        onClick={handleStartPauseReset}
        style={{ '--selected-color' : settings.color } as React.CSSProperties}
      >
        {timeLeft === 0 ? 'RESET' : isRunning ? 'PAUSE' : 'START'}
      </button>
    </div>
  );
}

export default Timer;
