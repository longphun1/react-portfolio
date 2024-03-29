import Modal from 'react-modal';
import './modal.styles.css';

type ModalProps = {
    messager?: string;
    removeModal: (event: React.MouseEvent<Element, MouseEvent> | React.KeyboardEvent<Element>) => void
}

const MessageModal = (props: ModalProps) => (
    <Modal className="modal" isOpen={!!props.messager} contentLabel="Messager name" onRequestClose={props.removeModal} closeTimeoutMS={200}>
        <div className="modal-box">
            <h3>Your message have been sent, </h3>
            <h3>{props.messager}</h3>
            <button className="modal-button" onClick={props.removeModal}>Okay</button>
        </div>
    </Modal>
);

export default MessageModal;