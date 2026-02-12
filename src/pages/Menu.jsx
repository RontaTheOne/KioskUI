import { Link } from "react-router-dom";
function Menu() {
  return (
    <div className="menu-page">
      <nav className="navbar bg-body-tertiary ustify-content-center">
        <div className="container">
          <Link className="navbar-brand" to="/menu">
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
      </div>
    </div>
  );
}

export default Menu;
