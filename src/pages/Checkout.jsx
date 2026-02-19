import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
function Checkout() {
  const navigate = useNavigate();
  return (
    <div className="checkout-page">
      <nav className="navbar bg-body-tertiary ustify-content-center">
        <div className="container">
          <Link className="navbar-brand mx-auto" to="/menu">
            <img src="/kiosk-logo.svg" alt="Kiosk App Logo" width="150" />
          </Link>
        </div>
      </nav>
      <div className="container my-2">
        <h1 className="display-2 text-center">¿Como deseas pagar?</h1>

        <div className="d-flex flex-column align-items-center gap-3">
          <Link to="/menu" style={{ textDecoration: "none" }}>
            <button className="card p-3 d-flex flex-column align-items-center justify-content-center" style={{width: '400px', height: '200px'}} type="button">
              <i className="bi bi-credit-card fs-1"></i>
              <span className="order-card__label">Pago con Tarjetas</span>
            </button>
          </Link>
          <Link to="/menu" style={{ textDecoration: "none"}}>
            <button className="card p-3 d-flex flex-column align-items-center justify-content-center" style={{width: '400px', height: '200px'}} type="button">
              <i className="bi bi-cash-coin fs-1"></i>
              <span className="order-card__label">Pago en caja</span>
            </button>
          </Link>
        </div>
        <h3 className="display-5 text-center">Total a pagar</h3>
        <h4 className="text-muted text-center">$ 33.02</h4>
        <hr></hr>
        <div className="text-center mt-4 d-flex gap-3 justify-content-center">
          <button className="btn btn-outline-danger" onClick={() => navigate(-1)}>Regresar</button>
        </div>
      </div>
    </div>
  );
}

export default Checkout;
