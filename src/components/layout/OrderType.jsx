import { Link } from "react-router-dom";

function OrderType() {
  return (
    <div className="container-fluid min-vh-100 d-flex align-items-center justify-content-center">
      <div className="row">
        <div className="text-center">
          <h1>¿Cómo te gustaría recibir tu pedido?</h1>
          <p className="lead mb-4">
            Selecciona una opción para continuar con tu pedido.
          </p>
        </div>

        {/* Comer aquí */}
        <div className="col-12 col-sm-6 col-md-6">
          <div className="align-items-center justify-content-center d-flex flex-column">
            <Link to="/menu" style={{ textDecoration: "none" }}>
              <button className="order-card order-card--eat" type="button">
                <img
                  src="burger.png"
                  alt="Eat in"
                  className="order-card__img"
                />
                <span className="order-card__label">Eat in</span>
              </button>
            </Link>
          </div>
        </div>

        {/* Para llevar */}
        <div className="col-12 col-sm-6 col-md-6">
          <div className="align-items-center justify-content-center d-flex flex-column">
            <Link to="/menu" style={{ textDecoration: "none" }}>
              <button className="order-card order-card--take" type="button">
                <img src="bag.png" alt="Take out" className="order-card__img" />
                <span className="order-card__label">Take out</span>
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default OrderType;
