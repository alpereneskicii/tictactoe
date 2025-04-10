function Modal({ message, onClose }) {
  return (
    <div className="modal-overlay">
      <div className="modal">
        <h2>{message}</h2>
        <button onClick={onClose}>Kapat</button>
      </div>
    </div>
  );
}

export default Modal;
