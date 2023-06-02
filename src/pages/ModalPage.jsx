import { useState } from "react";
import Button from "../components/Button";
import Modal from "../components/Modal";

const ModalPage = () => {
    const [showModal, setShowModal] = useState(false);

    const handleClick = (e) => {
        e.preventDefault();
        setShowModal(true)
    }

    const handleClose = () => {
        setShowModal(false)
    }

    const modal = <Modal onClose={handleClose} actionBar={<Button primary ><h3 onClick={handleClose} >I accept</h3></Button>} >
        <p>
            Here is an important agreement that you must accept!
        </p>
    </Modal>
    return (
        <div>
            <p>Neque viverra justo nec ultrices dui sapien eget mi proin. Eget est lorem ipsum dolor sit amet consectetur adipiscing elit. Purus in massa tempor nec feugiat nisl pretium. Nisl pretium fusce id velit. Mi in nulla posuere sollicitudin aliquam ultrices sagittis orci a. Diam in arcu cursus euismod. Tortor dignissim convallis aenean et tortor at risus viverra adipiscing. Cursus sit amet dictum sit amet justo donec enim diam. Nisi scelerisque eu ultrices vitae. Vitae turpis massa sed elementum tempus egestas. Pellentesque massa placerat duis ultricies lacus sed. Lacus vel facilisis volutpat est velit. Vitae turpis massa sed elementum. Purus in massa tempor nec.</p>
            <p>Neque viverra justo nec ultrices dui sapien eget mi proin. Eget est lorem ipsum dolor sit amet consectetur adipiscing elit. Purus in massa tempor nec feugiat nisl pretium. Nisl pretium fusce id velit. Mi in nulla posuere sollicitudin aliquam ultrices sagittis orci a. Diam in arcu cursus euismod. Tortor dignissim convallis aenean et tortor at risus viverra adipiscing. Cursus sit amet dictum sit amet justo donec enim diam. Nisi scelerisque eu ultrices vitae. Vitae turpis massa sed elementum tempus egestas. Pellentesque massa placerat duis ultricies lacus sed. Lacus vel facilisis volutpat est velit. Vitae turpis massa sed elementum. Purus in massa tempor nec.</p>
            <p>Neque viverra justo nec ultrices dui sapien eget mi proin. Eget est lorem ipsum dolor sit amet consectetur adipiscing elit. Purus in massa tempor nec feugiat nisl pretium. Nisl pretium fusce id velit. Mi in nulla posuere sollicitudin aliquam ultrices sagittis orci a. Diam in arcu cursus euismod. Tortor dignissim convallis aenean et tortor at risus viverra adipiscing. Cursus sit amet dictum sit amet justo donec enim diam. Nisi scelerisque eu ultrices vitae. Vitae turpis massa sed elementum tempus egestas. Pellentesque massa placerat duis ultricies lacus sed. Lacus vel facilisis volutpat est velit. Vitae turpis massa sed elementum. Purus in massa tempor nec.</p>
            <p>Neque viverra justo nec ultrices dui sapien eget mi proin. Eget est lorem ipsum dolor sit amet consectetur adipiscing elit. Purus in massa tempor nec feugiat nisl pretium. Nisl pretium fusce id velit. Mi in nulla posuere sollicitudin aliquam ultrices sagittis orci a. Diam in arcu cursus euismod. Tortor dignissim convallis aenean et tortor at risus viverra adipiscing. Cursus sit amet dictum sit amet justo donec enim diam. Nisi scelerisque eu ultrices vitae. Vitae turpis massa sed elementum tempus egestas. Pellentesque massa placerat duis ultricies lacus sed. Lacus vel facilisis volutpat est velit. Vitae turpis massa sed elementum. Purus in massa tempor nec.</p>
            <p>Neque viverra justo nec ultrices dui sapien eget mi proin. Eget est lorem ipsum dolor sit amet consectetur adipiscing elit. Purus in massa tempor nec feugiat nisl pretium. Nisl pretium fusce id velit. Mi in nulla posuere sollicitudin aliquam ultrices sagittis orci a. Diam in arcu cursus euismod. Tortor dignissim convallis aenean et tortor at risus viverra adipiscing. Cursus sit amet dictum sit amet justo donec enim diam. Nisi scelerisque eu ultrices vitae. Vitae turpis massa sed elementum tempus egestas. Pellentesque massa placerat duis ultricies lacus sed. Lacus vel facilisis volutpat est velit. Vitae turpis massa sed elementum. Purus in massa tempor nec.</p>

            <Button primary > <h3 onClick={handleClick} >Modal</h3> </Button>
            {showModal && modal}
        </div>
    );
}

export default ModalPage;