import { QRCodeCanvas } from "qrcode.react";

function ModalPayCounter() {
  return (
    <div
        className="modal fade"
        id="ModalPayCounter"
        data-bs-backdrop="static"
        data-bs-keyboard="false"
        tabindex="-1"
        aria-labelledby="staticBackdropLabel"
        aria-hidden="true"
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
                <p className="text-muted mt-3">Escanea el código QR para pagar en caja</p>
            </div>
            <div className="modal-footer text-center mt-4 d-flex gap-3 justify-content-center">
              <button type="button" className="btn btn-danger">
                <i class="bi bi-printer"></i> Imprimir la Factura
              </button>
            </div>
          </div>
        </div>
      </div>
    );
}
export default ModalPayCounter;    