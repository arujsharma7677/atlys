'use client'
const Modal = (props: any) => {
    const { isOpen, children, title, closeModal } = props;
    
  return (
    <>
      {isOpen && (
        <div className="fixed inset-0 flex items-center justify-center z-50">
          {/* Overlay */}
          <div
            className="fixed inset-0 bg-black opacity-90"
            onClick={closeModal}
          ></div>

          {/* Modal Content */}
          <div className="bg-white  rounded-lg shadow-lg z-10 w-11/12 max-w-md">
          
            <div className="">{children}</div>
         
          </div>
        </div>
      )}
    </>
  );
};

export default Modal;
