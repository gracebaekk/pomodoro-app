import { useState } from "react";
import Modal from "./Modal.tsx";
import settingsButton from "../assets/icon-settings.svg";
import "./Settings.css";
import SettingsContent from "./SettingsContent.tsx";

function Settings() {
  const [open, setOpen] = useState(false);
  
  const handleClose = () => {
    setOpen(false);
  }

  return (
    <div>
      <button className="settings-button" onClick={() => setOpen(true)}>
        <img src={settingsButton} alt="Settings" />
      </button>
      <Modal open={open} onClose={handleClose}>
        <div>
          <SettingsContent />
        </div>
      </Modal>
    </div>
  );
}

export default Settings;
