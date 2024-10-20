import { useState } from "react";
import "./SettingsContent.css";

interface SettingsContentProps {
  onApplySettings: (settings: {
    pomodoro: number;
    shortBreak: number;
    longBreak: number;
    font: string;
    color: string;
  }) => void;
  currentSettings: {
    pomodoro: number;
    shortBreak: number;
    longBreak: number;
    font: string;
    color: string;
  };
}

const SettingsContent: React.FC<SettingsContentProps> = ({ onApplySettings, currentSettings }) => {
  // For setting input time
  const [pomodoro, setPomodoro] = useState(currentSettings.pomodoro);
  const [shortBreak, setShortBreak] = useState(currentSettings.shortBreak);
  const [longBreak, setLongBreak] = useState(currentSettings.longBreak);
  const [selectedFont, setSelectedFont] = useState(currentSettings.font);
  const [selectedColor, setSelectedColor] = useState(currentSettings.color);

  const increaseTime = (setter: React.Dispatch<React.SetStateAction<number>>, value: number) => {
    setter(prevTime => prevTime + value);
  };

  const decreaseTime = (setter: React.Dispatch<React.SetStateAction<number>>, value: number) => {
    setter(prevTime => (prevTime - value >= 0 ? prevTime - value : 0));
  };

  // For setting input font
  const handleFontChange = (font: string) => {
    setSelectedFont(font);
  };

  // For setting input colors
  const handleColorChange = (color: string) => {
    setSelectedColor(color);
  };

  const handleApplySettings = () => {
    const settings = {
      pomodoro: pomodoro,
      shortBreak: shortBreak,
      longBreak: longBreak,
      font: selectedFont,
      color: selectedColor,
    };
    onApplySettings(settings);  // Call parent handler
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
        <button onClick={handleApplySettings}>Apply</button>
      </div>
      
    </div>
  );
};

export default SettingsContent;