import "../../src/style/modalcommon.css";
import { useEffect } from "react";
import { RxCross2 } from "react-icons/rx";
import { createPortal } from "react-dom";

const ModalCommon = ({
  openModal,
  closeModal,
  children,
  handleCloseButton,
}) => {
  // Handle scroll when open modal
  useEffect(() => {
    document.body.style.overflowY = "hidden";
    return () => {
      // cleanup fu for remove scroll hidden
      document.body.style.overflowY = "scroll";
    };
  }, []);
  return createPortal(
    <>
      <div className="modal-wrapper" onClick={closeModal}></div>
      <div className="modal-container">
        <div className="modal-icon">
          <RxCross2 onClick={closeModal} />
        </div>
        {children}
        {handleCloseButton}
      </div>
    </>,
    document.querySelector(".myportalmodaldiv")
  );
};

export default ModalCommon;
