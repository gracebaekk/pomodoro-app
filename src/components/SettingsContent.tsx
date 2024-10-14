import { useState } from "react";
import "./SettingsContent.css";

const SettingsContent: React.FC = () => {
  // For setting input time
  const [pomodoro, setPomodoro] = useState(30);
  const [shortBreak, setShortBreak] = useState(5);
  const [longBreak, setLongBreak] = useState(15);

  const increaseTime = (setter: React.Dispatch<React.SetStateAction<number>>, value: number) => {
    setter(prevTime => prevTime + value);
  };

  const decreaseTime = (setter: React.Dispatch<React.SetStateAction<number>>, value: number) => {
    setter(prevTime => (prevTime - value >= 0 ? prevTime - value : 0));
  };

  // For setting input font
  const [selectedFont, setSelectedFont] = useState("font1"); 
  const handleFontChange = (font: string) => {
    setSelectedFont(font);
  };

  // For setting input colors
  const COLORS = {
    ORANGE_RED: '#f87070',
    TEAL: '#70F3F8',
    PURPLE: '#d881f8',
  };
  const [selectedColor, setSelectedColor] = useState("color1");
  const handleColorChange = (color: string) => {
    setSelectedColor(color);
  };
  
  return (
    <div className="settings-content">
      <h1>Settings</h1>
      <hr></hr>

      <h2>TIME (MINUTES)</h2>
      <div className="time">
        <div className = "pomodoro">
          <p>pomodoro</p> 
          <div className="number-controls">
            <span className="input">{pomodoro}</span>
            <div className="controls">
              <button onClick={() => increaseTime(setPomodoro, 1)}>▲</button>
              <button onClick={() => decreaseTime(setPomodoro, 1)}>▼</button>
            </div>
          </div>
          
        </div>
        <div className = "short-break">
          <p>short break</p> 
          <div className="number-controls">
            <span className="input">{shortBreak}</span>
            <div className="controls">
              <button onClick={() => increaseTime(setShortBreak, 1)}>▲</button>
              <button onClick={() => decreaseTime(setShortBreak, 1)}>▼</button>
            </div>
          </div>
        </div>
        <div className = "long-break">
          <p>long break</p> 
          <div className="number-controls">
            <span className="input">{longBreak}</span>
            <div className="controls">
              <button onClick={() => increaseTime(setLongBreak, 1)}>▲</button>
              <button onClick={() => decreaseTime(setLongBreak, 1)}>▼</button>
            </div>
          </div>
        </div>
      </div>
      <hr></hr>

      <div className="font">
        <h2>FONT</h2>
        <div className="buttons">
          <button onClick={() => handleFontChange('Kumbh Sans')} className={`font-btn ${selectedFont === 'Kumbh Sans' ? 'active' : ''}`} style={{ fontFamily: 'Kumbh Sans, sans-serif' }}>Aa</button>
          <button onClick={() => handleFontChange('Roboto Slab')} className={`font-btn ${selectedFont === 'Roboto Slab' ? 'active' : ''}`} style={{ fontFamily: 'Roboto Slab, sans-serif' }}>Aa</button>
          <button onClick={() => handleFontChange('Space Mono')} className={`font-btn ${selectedFont === 'Space Mono' ? 'active' : ''}`} style={{ fontFamily: 'Space Mono, sans-serif' }}>Aa</button>
        </div>
      </div>
      <hr></hr>

      <div className="color">
        <h2>COLOR</h2>
        <div className="buttons">
          <button onClick={() => handleColorChange('#f87070')} className={`color-btn ${selectedColor === 'f87070' ? 'active' : ''}`} style={{ backgroundColor: '#f87070' }}></button>
          <button onClick={() => handleColorChange('#70F3F8')} className={`color-btn ${selectedColor === '#70F3F8' ? 'active' : ''}`} style={{ backgroundColor: '#70F3F8' }}></button>
          <button onClick={() => handleColorChange('#d881f8')} className={`color-btn ${selectedColor === '#d881f8' ? 'active' : ''}`} style={{ backgroundColor: '#d881f8' }}></button>
        </div>
      </div>

      <div className = "apply">
        <button>Apply</button>
      </div>
      
    </div>
  );
};

export default SettingsContent;