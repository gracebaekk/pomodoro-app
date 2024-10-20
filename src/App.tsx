import { SetStateAction, useEffect, useState } from "react";
import Logo from "./components/Logo.tsx";
import Button from "./components/Button.tsx";
import Timer from "./components/Timer.tsx";
import Settings from "./components/Settings/Settings.tsx";

function App() {
  const [settings, setSettings] = useState({
    pomodoro: 25,
    shortBreak: 5,
    longBreak: 15,
    font: "Kumbh Sans",
    color: "#F87070",
  });

  const handleApplySettings = (
    newSettings: SetStateAction<{
      pomodoro: number;
      shortBreak: number;
      longBreak: number;
      font: string;
      color: string;
    }>
  ) => {
    setSettings(newSettings);
  };

  useEffect(() => {
    document.body.style.fontFamily = settings.font;
  }, [settings.font, settings.color]);

  return (
    <main style={{ fontFamily: settings.font }}>
      <Logo />
      <Button settings={settings} />
      <Timer settings={settings} />
      <Settings settings={settings} onApplySettings={handleApplySettings} />
    </main>
  );
}

export default App;
