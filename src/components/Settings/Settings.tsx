import { useState } from "react";
import Modal from "./Modal.tsx";
import settingsButton from './icon-settings.svg';
import "./Settings.css";
import SettingsContent from "./SettingsContent.tsx";

interface SettingsProps {
  settings: {
    pomodoro: number;
    shortBreak: number;
    longBreak: number;
    font: string;
    color: string;
  };
  onApplySettings: (newSettings: {
    pomodoro: number;
    shortBreak: number;
    longBreak: number;
    font: string;
    color: string;
  }) => void;
}

const Settings: React.FC<SettingsProps> = ({ settings, onApplySettings }) => {
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = (div: HTMLDivElement) => {
    setOpen(false);
  };

  return (
    <div>
      <button className="settings-button" onClick={handleOpen}>
        <img src={settingsButton} alt="Settings" />
      </button>
      <Modal open={open} onClose={() => handleClose(document.getElementById('modal-overlay') as HTMLDivElement)}>
        <div>
          <SettingsContent
            onApplySettings={onApplySettings}
            currentSettings={settings}
          />
        </div>
      </Modal>
    </div>
  );
};

export default Settings;
