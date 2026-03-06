import { Link } from "react-router-dom";
import { useState, useRef } from "react";
import bootstrap from 'bootstrap/dist/js/bootstrap.bundle.min.js';
import CartOffcanvas from "../components/Cart/CartOffcanvas";
function Menu() {
  const [selectedProduct, setSelectedProduct] = useState(null);
  const modalRef = useRef(null);

  const handleCardClick = (product) => {
    setSelectedProduct(product);
    const ms = new bootstrap.Modal(modalRef.current);
    ms.show();
  };

  return (
    <div className="menu-page">
      <nav className="navbar bg-body-tertiary ustify-content-center">
        <div className="container">
          <Link className="navbar-brand mx-auto" to="/menu">
            <img src="/kiosk-logo.svg" alt="Kiosk App Logo" width="150" />
          </Link>
        </div>
      </nav>

      <div className="container py-4">
        <div className="d-flex justify-content-center gap-4 flex-wrap category-wrapper">
          <Link
            to="/bowls"
            className="category-item active"
            style={{ textDecoration: "none" }}
          >
            <div className="category-icon">🥣</div>
            <span className="text-black">Bowls</span>
          </Link>

          <Link
            to="/hamburguesas"
            className="category-item"
            style={{ textDecoration: "none" }}
          >
            <div className="category-icon">🍔</div>
            <span className="text-black">Hamburguesas</span>
          </Link>

          <Link
            to="/hot-dogs"
            className="category-item"
            style={{ textDecoration: "none" }}
          >
            <div className="category-icon">🌭</div>
            <span className="text-black">Hot Dogs</span>
          </Link>

          <Link
            to="/acompañantes"
            className="category-item"
            style={{ textDecoration: "none" }}
          >
            <div className="category-icon">🥟</div>
            <span className="text-black">Acompañantes</span>
          </Link>

          <Link
            to="/acompañantes"
            className="category-item"
            style={{ textDecoration: "none" }}
          >
            <div className="category-icon">🥤</div>
            <span className="text-black">Bebidas</span>
          </Link>

          <Link
            to="/postres"
            className="category-item"
            style={{ textDecoration: "none" }}
          >
            <div className="category-icon">🍦</div>
            <span className="text-black">Postres</span>
          </Link>
        </div>
        <br/> <br/>
        <div className="d-flex justify-content-between align-items-center">
          <h2 className="mb-0">¿Qué quieres comer hoy?</h2>

          <div className="d-flex align-items-center gap-2">
            <span className="mb-0">
              <strong>Ordenar por</strong>
            </span>
            <select
              className="form-select form-select-sm w-auto"
              aria-label="Ordenar por"
            >
              <option value="1">Más Popular</option>
              <option value="2">Más Barato</option>
            </select>
          </div>
        </div>
        <br /> <br />
        <div className="row g-4">
          {[
            {
              name: "Big King",
              price: 4.1,
              img:
                "https://s7d1.scene7.com/is/image/mcdonalds/DC_202201_0007-005_QuarterPounderwithCheese_1564x1564-1:nutrition-calculator-tile",
            },
            {
              name: "Whopper",
              price: 4.19,
              img:
                "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT4YDCJqgMFtsD9dBn2uch0RTrROXHmvr1vnw&s",
            },
            {
              name: "Rodeo Whopper",
              price: 2.99,
              img: "https://images.rappi.com/restaurants_background/home76-1747260915136.jpg",
            },
            {
              name: "Big King",
              price: 4.1,
              img:
                "https://s7d1.scene7.com/is/image/mcdonalds/DC_202201_0007-005_QuarterPounderwithCheese_1564x1564-1:nutrition-calculator-tile",
            },
            {
              name: "Whopper",
              price: 4.19,
              img:
                "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT4YDCJqgMFtsD9dBn2uch0RTrROXHmvr1vnw&s",
            },
            {
              name: "Rodeo Whopper",
              price: 2.99,
              img: "https://images.rappi.com/restaurants_background/home76-1747260915136.jpg",
            },
          ].map((prod, idx) => (
            <div className="col col-sm-6 col-md-4" key={idx}>
              <div
                className="product-card text-center p-3"
                onClick={() => handleCardClick(prod)}
              >
                <img
                  src={prod.img}
                  className="img-fluid product-img mb-2"
                  alt={prod.name}
                />
                <h6 className="fw-bold mb-1">{prod.name}</h6>
                <p className="price mb-0">$ {prod.price.toFixed(2)}</p>
              </div>
            </div>
          ))}
        </div>
        <br />
        <div className="row g-4">
          <div className="col col-sm-12 col-md-6">
            <div className="card text-bg-dark">
              <img
                src="https://www.menuspararestaurantes.com/wp-content/uploads/2022/12/promociones-en-tu-restaurante-combos2.jpg"
                className="card-img"
                alt="Publicidad"
              />
            </div>
          </div>
          <div className="col col-sm-12 col-md-6">
            <div className="card text-bg-dark">
              <img
                src="https://www.menuspararestaurantes.com/wp-content/uploads/2022/12/promociones-en-tu-restaurante-combos2.jpg"
                className="card-img"
                alt="Promociones"
              />
            </div>
          </div>
        </div>
        
      </div>

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

      {/* product configuration modal */}
      <div
        className="modal fade"
        id="productModal"
        ref={modalRef}
        tabIndex="-1"
        aria-labelledby="productModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-lg">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="productModalLabel">
                {selectedProduct ? selectedProduct.name : 'Producto'}
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              {selectedProduct && (
                <div className="text-center mb-3">
                  <img
                    src={selectedProduct.img}
                    className="img-fluid product-img mb-2"
                    alt={selectedProduct.name}
                    style={{ maxHeight: 150 }}
                  />
                  <p className="fw-bold mb-1">
                    $ {selectedProduct.price.toFixed(2)}
                  </p>
                </div>
              )}
              <div className="mb-3">
                <h6>Tamaño</h6>
                <div className="btn-group" role="group" aria-label="size">
                  <input
                    type="radio"
                    className="btn-check"
                    name="size"
                    id="sizeSmall"
                    autoComplete="off"
                  />
                  <label className="btn btn-outline-primary" htmlFor="sizeSmall">
                    Pequeño
                  </label>

                  <input
                    type="radio"
                    className="btn-check"
                    name="size"
                    id="sizeMedium"
                    autoComplete="off"
                    defaultChecked
                  />
                  <label
                    className="btn btn-outline-primary"
                    htmlFor="sizeMedium"
                  >
                    Mediano
                  </label>

                  <input
                    type="radio"
                    className="btn-check"
                    name="size"
                    id="sizeLarge"
                    autoComplete="off"
                  />
                  <label className="btn btn-outline-primary" htmlFor="sizeLarge">
                    Grande
                  </label>
                </div>
              </div>
              <div className="mb-3">
                <h6>Quita algo</h6>
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    value=""
                    id="noOnion"
                  />
                  <label className="form-check-label" htmlFor="noOnion">
                    Sin cebolla
                  </label>
                </div>
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    value=""
                    id="noLettuce"
                  />
                  <label className="form-check-label" htmlFor="noLettuce">
                    Sin lechuga
                  </label>
                </div>
              </div>
              <div className="mb-3">
                <h6>Añadir un ingrediente</h6>
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    value=""
                    id="addCheese"
                  />
                  <label className="form-check-label" htmlFor="addCheese">
                    Queso extra
                  </label>
                </div>
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    value=""
                    id="addBacon"
                  />
                  <label className="form-check-label" htmlFor="addBacon">
                    Tocino
                  </label>
                </div>
              </div>
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-primary">
                Agregar
              </button>
            </div>
          </div>
        </div>
      </div>

      <CartOffcanvas total="33.02">
      </CartOffcanvas>

    </div>
  );
}

export default Menu;
