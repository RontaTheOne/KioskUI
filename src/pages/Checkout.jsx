import { Link } from "react-router-dom";
function Checkout() {
  return (
    <div className="container my-5">
        <h1 className="display-1 text-center">¿Como deseas pagar?</h1>

          <div className="align-items-center justify-content-center d-flex flex-column">
            <Link to="/menu" style={{ textDecoration: "none" }}>
              <button className="card m-3" type="button">
               <i class="bi bi-credit-card"></i>
                <span className="order-card__label">Pago con Tarjetas</span>
              </button>
            </Link>
          </div>
        
          <div className="align-items-center justify-content-center d-flex flex-column">
            <Link to="/menu" style={{ textDecoration: "none" }}>
              <button className="card m-3" type="button">
               <i class="bi bi-cash-coin"></i>
                <span className="order-card__label">Pago en caja</span>
              </button>
            </Link>
          </div>
    
         <h1 className="display-3 text-center">Total a pagar</h1>
         <h2 className="text-muted text-center">$ 5,02</h2>
        <hr></hr>
        <div className="text-center mt-4 d-flex gap-3 justify-content-center">
          <button className="btn btn-outline-danger">
            Regresar
          </button>
        </div>
    </div>
  )
}

export default Checkout