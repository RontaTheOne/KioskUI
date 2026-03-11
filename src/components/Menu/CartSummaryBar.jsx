function CartSummaryBar() {
  return (
    <div className="cart-summary-bar">
      <div className="cart-bar d-flex align-items-center justify-content-between px-4">
        {/* Total */}
        <div className="total-section">
          <small className="text-muted d-block">Total</small>
          <span className="fw-bold fs-5">$ 33.02</span>
        </div>

        {/* Carrito*/}
        <button
          type="button"
          className="cart-wrapper position-relative d-flex align-items-center justify-content-center"
          data-bs-toggle="offcanvas"
          data-bs-target="#cartOffcanvas"
          aria-controls="cartOffcanvas"
        >
          <i className="bi bi-cart-fill cart-icon"></i>
          {/* Badge */}
          <span className="cart-badge">0</span>
        </button>

        {/* Botón pagar */}
        <Link to="/checkout" className="btn btn-danger pay-btn">
          Pagar
        </Link>
      </div>
    </div>
  );
}

export default CartSummaryBar;
