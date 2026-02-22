import { useState } from 'react';

function ModalPayCard() {
  const [paymentState, setPaymentState] = useState('iniciar'); // Estados posibles: 'iniciar', 'acercar', 'aprobado', 'rechazado'

  const renderModalBody = () => {
    switch (paymentState) {
      case 'iniciar':
        return (
          <>
            <img src="./img/contacless.png" alt="Inicia Pago Logo" width="150" />
            <h1 className="display-5 mt-3">Orden:001</h1>
            <p className="text-muted mt-3">Iniciando pago...</p>
          </>
        );
      case 'acercar':
        return (
          <>
            <img src="./img/contacless.png" alt="Sin contacto Logo" width="150" />
            <h1 className="display-5 mt-3">Orden:001</h1>
            <p className="text-muted mt-3">Acercar la tarjeta al lector</p>
          </>
        );
      case 'aprobado':
        return (
          <>
            <img src="./img/success.png" alt="Aprobado" width="150" /> {/* Cambia la imagen si tienes una para éxito */}
            <h1 className="display-5 mt-3 text-success">Orden:001</h1>
            <p className="text-muted mt-3">Pago aprobado</p>
          </>
        );
      case 'rechazado':
        return (
          <>
            <img src="./img/error.png" alt="Rechazado" width="150" /> {/* Cambia la imagen si tienes una para error */}
            <h1 className="display-5 mt-3 text-danger">Orden:001</h1>
            <p className="text-muted mt-3">Pago rechazado</p>
          </>
        );
      default:
        return (
          <>
            <img src="./img/contacless.png" alt="Sin contacto Logo" width="150" />
            <h1 className="display-5 mt-3">Orden:001</h1>
            <p className="text-muted mt-3">Poner tarjeta en el lector</p>
          </>
        );
    }
  };

  const renderModalFooter = () => {
    if (paymentState === 'aprobado') {
      return (
        <div className="modal-footer text-center mt-4 d-flex gap-3 justify-content-center">
          <button type="button" className="btn btn-success">
            <i className="bi bi-printer"></i> Imprimir la Factura
          </button>
        </div>
      );
    } else if (paymentState === 'rechazado') {
      return (
        <div className="modal-footer text-center mt-4 d-flex gap-3 justify-content-center">
          <button type="button" className="btn btn-danger" onClick={() => setPaymentState('iniciar')}>
            Reintentar
          </button>
        </div>
      );
    }
    return null;
  };

  return (
    <div
      className="modal fade"
      id="ModalPayCard"
      data-bs-backdrop="static"
      data-bs-keyboard="false"
      tabIndex="-1"
      aria-labelledby="staticBackdropLabel"
      aria-hidden="true"
    >
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title text-danger" id="staticBackdropLabel">
              Pagar con tarjeta
            </h5>
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <br />
          <div className="modal-body d-flex flex-column align-items-center">
            {renderModalBody()}
          </div>
          {renderModalFooter()}
        </div>
      </div>
    </div>
  );
}

export default ModalPayCard;