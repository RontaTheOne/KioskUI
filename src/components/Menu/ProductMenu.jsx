import { Link } from "react-router-dom";

function ProductMenu() {
  return (
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
  );
}

export default ProductMenu;