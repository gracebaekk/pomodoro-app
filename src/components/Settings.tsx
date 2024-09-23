import { useState } from 'react';
import Modal from './Modal.tsx';
import settingsButton from '../assets/icon-settings.svg';
import './Settings.css';

function Settings() {
    const [open, setOpen] = useState(false);
    return (
        <div>
            <button className="settings-button" onClick={() => setOpen(true)}>
                <img src={settingsButton} alt="Settings" />
            </button>
            <Modal open={open} onClose={() => setOpen(false)}>
                <div>
                    <h2>Settings</h2>
                </div>
            </Modal>
        </div>
    );
}

export default Settings;