import { Link } from "react-router-dom";
import { useState } from "react";

export default function CartOffcanvas({
  id = "cartOffcanvas",
  label = "cartOffcanvasLabel",
  total = "0.00",
  children,
}) {
  const [quantities, setQuantities] = useState(Array(5).fill(1));
  const [isEmpty, setIsEmpty] = useState(false);

  const handleIncrease = (index) => {
    const newQuantities = [...quantities];
    newQuantities[index] += 1;
    setQuantities(newQuantities);
  };

  const handleDecrease = (index) => {
    const newQuantities = [...quantities];
    if (newQuantities[index] > 1) {
      newQuantities[index] -= 1;
      setQuantities(newQuantities);
    }
  };

  const handleClearCart = () => {
    setIsEmpty(true);
  };
  return (
    <div
      className="offcanvas offcanvas-bottom"
      tabIndex="-1"
      id={id}
      aria-labelledby={label}
      style={{ height: "auto", maxHeight: "80vh" }}
    >
      <div className="offcanvas-header">
        <h1 className="offcanvas-title" id={label}>
          Mi Orden
        </h1>

        <button
          type="button"
          className="btn-close text-reset"
          data-bs-dismiss="offcanvas"
          aria-label="Close"
        ></button>
      </div>
      <div className="offcanvas-body" style={{ overflowY: "auto", maxHeight: "calc(80vh - 120px)" }}>
        {isEmpty ? (
          <div className="text-center py-5">
            <h5 className="text-muted">Su orden está vacía</h5>
            <p className="text-muted small">Agregue productos a su carrito</p>
          </div>
        ) : (
          <>
            {children ? (
              children
            ) : (
              Array.from({ length: 3 }).map((_, i) => (
                <div className="card mb-3" key={i}>
                  <div className="card-body d-flex align-items-center gap-3">
                    <img src="https://www.menuspararestaurantes.com/wp-content/uploads/2022/12/promociones-en-tu-restaurante-combos2.jpg" alt="Producto" style={{ width: "100px", height: "100px", objectFit: "cover", borderRadius: "8px" }} />
                    <div className="flex-grow-1">
                      <h6 className="card-title mb-1">Big King</h6>
                      <p className="text-muted small mb-2">No onion, pickle</p>
                      <div className="input-group" style={{ width: "140px" }}>
                        <button className="btn btn-outline-secondary" type="button" onClick={() => handleDecrease(i)}>−</button>
                        <input type="text" className="form-control text-center" value={quantities[i]} readOnly />
                        <button className="btn btn-outline-secondary" type="button" onClick={() => handleIncrease(i)}>+</button>
                      </div>
                    </div>
                    <div className="text-end">
                      <span className="fw-bold fs-6">$ 4.10</span>
                    </div>
                  </div>
                </div>
              ))
            )}

            <div className="d-flex justify-content-between align-items-center mt-3">
              <span className="text-muted">Subtotal</span>
              <span className="text-muted">$ 27,00</span>
            </div>

            <div className="d-flex justify-content-between align-items-center c">
              <span className="text-muted">IVA</span>
              <span className="text-muted">$ 5,02</span>
            </div>

            <hr></hr>
            <div className="d-flex justify-content-between align-items-center mt-3">
              <h4 className="text-muted">Total</h4>
              <span className="fw-bold fs-5">$ {total}</span>
            </div>
            <div className="text-center mt-4 d-flex gap-3 justify-content-center">
              <Link to="/checkout" className="btn btn-danger">
                Pagar
              </Link>
              <button className="btn btn-outline-danger" onClick={handleClearCart}>
                Vaciar
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
}
