import { useState } from "react";
import "./Button.css"; // Import the CSS module correctly

function Button() {
  const buttons = ["pomodoro", "short break", "long break"];
  
  const [active, setActive] = useState(-1);

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>, id: number) => {
    setActive(id);
    console.log(event);
    // changeTimer(event);
  }

  return (
    <>
        <button className="timerButton">
            {buttons.map((button, id) => (
                <button 
                    key={id} 
                    name={button} 
                    onClick={(event) => handleClick(event, id)}
                    className={id === active ? "customButton active" : "customButton"}
                >
                    {button}
                </button>
            ))}
        </button>
    </>
  );
}

export default Button;

