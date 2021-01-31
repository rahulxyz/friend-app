import './Modal.css';

export const MODAL = {
    CANCEL : "CANCEL",
    CONFIRM: "CONFIRM"
}

const Modal = (props) => {
    const {handleSubmitModal}=props;

    return ( 
        <div className="modal-wrapper">
            <div className="modal-content">
            <h2>Confirmation</h2>
            <p>Are you sure you want to delete this?</p>
            <div className="action-button">
                <button onClick={()=>handleSubmitModal(MODAL.CONFIRM)}>Confirm</button>
                <button onClick={()=>handleSubmitModal(MODAL.CANCEL)}>Cancel</button>
            </div>
            </div>
        </div>
     );
}
 
export default Modal;