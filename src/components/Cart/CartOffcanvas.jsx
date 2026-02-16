import { Link } from "react-router-dom";

export default function CartOffcanvas({
  id = "cartOffcanvas",
  label = "cartOffcanvasLabel",
  total = "0.00",
  children,
}) {
  return (
    <div
      className="offcanvas offcanvas-bottom"
      tabIndex="-1"
      id={id}
      aria-labelledby={label}
      style={{ height: "auto", maxHeight: "80vh" }}
    >
      <div className="offcanvas-header">
        <h5 className="offcanvas-title" id={label}>
          Tu carrito
        </h5>
        <button
          type="button"
          className="btn-close text-reset"
          data-bs-dismiss="offcanvas"
          aria-label="Close"
        ></button>
      </div>
      <div className="offcanvas-body" style={{ overflowY: "auto", maxHeight: "calc(80vh - 120px)" }}>
        {children ? (
          children
        ) : (
          Array.from({ length: 5 }).map((_, i) => (
            <div className="card mb-3" key={i}>
              <div className="card-body">This is some text within a card body.</div>
            </div>
          ))
        )}

        <div className="d-flex justify-content-between align-items-center mt-3">
          <span className="text-muted">Subtotal</span>
          <span className="text-muted">$ 27,00</span>
        </div>

        <div className="d-flex justify-content-between align-items-center mt-3">
          <span className="text-muted">IVA</span>
          <span className="text-muted">$ 5,02</span>
        </div>

        <hr></hr>
        <div className="d-flex justify-content-between align-items-center mt-3">
          <h4 className="text-muted">Total</h4>
          <span className="fw-bold fs-5">$ {total}</span>
        </div>
        <div className="text-center mt-3">
          <Link to="/checkout" className="btn btn-danger btn-lg">
            Pagar
          </Link>
        </div>
      </div>
    </div>
  );
}
