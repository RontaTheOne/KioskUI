import { QRCodeCanvas } from "qrcode.react";
import { useEffect, useRef } from 'react';
import bootstrap from 'bootstrap/dist/js/bootstrap.bundle.min.js';

function ModalPayCounter() {
  const modalRef = useRef(null);

  useEffect(() => {
    const modalElement = modalRef.current;
    const handleShown = () => {
      setTimeout(() => {
        const modal = bootstrap.Modal.getInstance(modalElement);
        if (modal) modal.hide();
      }, 60000); // 1 minute
    };
    modalElement.addEventListener('shown.bs.modal', handleShown);
    return () => {
      modalElement.removeEventListener('shown.bs.modal', handleShown);
    };
  }, []);

  return (
    <div
        className="modal fade"
        id="ModalPayCounter"
        data-bs-backdrop="static"
        data-bs-keyboard="false"
        tabindex="-1"
        aria-labelledby="staticBackdropLabel"
        aria-hidden="true"
        ref={modalRef}
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title text-danger" id="staticBackdropLabel">
                Pagar en caja
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
                <br></br>
            <div className="modal-body d-flex flex-column align-items-center">
                <QRCodeCanvas value={123} size={200} />
                <h1 className="display-5 mt-3">Orden:001</h1>
                <p className="text-muted mt-3 text-center">Escanea el código QR para obtener la factura y dirijase a la caja para pagar</p>
            </div>
          </div>
        </div>
      </div>
    );
}
export default ModalPayCounter;    