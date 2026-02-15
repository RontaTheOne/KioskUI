import { Link } from "react-router-dom";
function Menu() {
  return (
    <div className="menu-page">
      <nav className="navbar bg-body-tertiary ustify-content-center">
        <div className="container">
          <Link className="navbar-brand mx-auto" to="/menu">
            <img src="/kiosk-logo.svg" alt="Kiosk App Logo" width="150" />
          </Link>
        </div>
      </nav>

      <div class="container py-4">
        <div class="d-flex justify-content-center gap-4 flex-wrap category-wrapper">
          <Link
            to="/bowls"
            class="category-item active"
            style={{ textDecoration: "none" }}
          >
            <div class="category-icon">🥣</div>
            <span className="text-black">Bowls</span>
          </Link>

          <Link
            to="/hamburguesas"
            class="category-item"
            style={{ textDecoration: "none" }}
          >
            <div class="category-icon">🍔</div>
            <span className="text-black">Hamburguesas</span>
          </Link>

          <Link
            to="/hot-dogs"
            class="category-item"
            style={{ textDecoration: "none" }}
          >
            <div class="category-icon">🌭</div>
            <span className="text-black">Hot Dogs</span>
          </Link>

          <Link
            to="/acompañantes"
            class="category-item"
            style={{ textDecoration: "none" }}
          >
            <div class="category-icon">🥟</div>
            <span className="text-black">Acompañantes</span>
          </Link>

          <Link
            to="/acompañantes"
            class="category-item"
            style={{ textDecoration: "none" }}
          >
            <div class="category-icon">🥤</div>
            <span className="text-black">Bebidas</span>
          </Link>

          <Link
            to="/postres"
            class="category-item"
            style={{ textDecoration: "none" }}
          >
            <div class="category-icon">🍦</div>
            <span className="text-black">Postres</span>
          </Link>
        </div>
        <br /> <br />
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
          <div class="col col-sm-6 col-md-4">
            <div class="product-card text-center p-3">
              <img
                src="https://s7d1.scene7.com/is/image/mcdonalds/DC_202201_0007-005_QuarterPounderwithCheese_1564x1564-1:nutrition-calculator-tile"
                class="img-fluid product-img mb-2"
                alt="Big King"
              />
              <h6 class="fw-bold mb-1">Big King</h6>
              <p class="price mb-0">$ 4.10</p>
            </div>
          </div>

          <div class="col col-sm-6 col-md-4">
            <div class="product-card text-center p-3">
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT4YDCJqgMFtsD9dBn2uch0RTrROXHmvr1vnw&s"
                class="img-fluid product-img mb-2"
                alt="Whopper"
              />
              <h6 class="fw-bold mb-1">Whopper</h6>
              <p class="price mb-0">$ 4.19</p>
            </div>
          </div>

          <div class="col col-sm-6 col-md-4">
            <div class="product-card text-center p-3">
              <img
                src="https://images.rappi.com/restaurants_background/home76-1747260915136.jpg"
                class="img-fluid product-img mb-2"
                alt="Rodeo Whopper"
              />
              <h6 class="fw-bold mb-1">Rodeo Whopper</h6>
              <p class="price mb-0">$ 2.99</p>
            </div>
          </div>

          <div class="col col-sm-6 col-md-4">
            <div class="product-card text-center p-3">
              <img
                src="https://s7d1.scene7.com/is/image/mcdonalds/DC_202201_0007-005_QuarterPounderwithCheese_1564x1564-1:nutrition-calculator-tile"
                class="img-fluid product-img mb-2"
                alt="Big King"
              />
              <h6 class="fw-bold mb-1">Big King</h6>
              <p class="price mb-0">$ 4.10</p>
            </div>
          </div>

          <div class="col col-sm-6 col-md-4">
            <div class="product-card text-center p-3">
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT4YDCJqgMFtsD9dBn2uch0RTrROXHmvr1vnw&s"
                class="img-fluid product-img mb-2"
                alt="Whopper"
              />
              <h6 class="fw-bold mb-1">Whopper</h6>
              <p class="price mb-0">$ 4.19</p>
            </div>
          </div>

          <div class="col col-sm-6 col-md-4">
            <div class="product-card text-center p-3">
              <img
                src="https://images.rappi.com/restaurants_background/home76-1747260915136.jpg"
                class="img-fluid product-img mb-2"
                alt="Rodeo Whopper"
              />
              <h6 class="fw-bold mb-1">Rodeo Whopper</h6>
              <p class="price mb-0">$ 2.99</p>
            </div>
          </div>
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

        {/* Carrito central */}
        <div className="cart-wrapper position-relative d-flex align-items-center justify-content-center">
          <i className="bi bi-cart-fill cart-icon"></i>

          {/* Badge */}
          <span className="cart-badge">0</span>
        </div>

        {/* Botón pagar */}
        <button className="btn btn-danger pay-btn">Pagar</button>
      </div>
    </div>
  );
}

export default Menu;
