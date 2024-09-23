import "./Modal.css";
import closeIcon from '../assets/icon-close.svg';

type propTypes = {
    open: boolean;
    onClose: () => void;
    children: React.ReactNode;
};

function Modal({ open, onClose, children }: propTypes) {
    if (!open) return null;
    return (
        <div className="modal-overlay" onClick={onClose}>
            <div className="modal-content" onClick={(e) => e.stopPropagation()}>
                <button className="close-button" onClick={onClose}>
                    <img src={closeIcon} alt = "Close" />
                </button>
                <div className="modal-body">
                    {children}
                </div>
            </div>
        </div>
    );
}

export default Modal;