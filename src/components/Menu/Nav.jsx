import { Link } from "react-router-dom";

function ProductMenu() {
  return (
    <nav className="navbar bg-body-tertiary ustify-content-center">
        <div className="container">
          <Link className="navbar-brand mx-auto" to="/menu">
            <img src="/kiosk-logo.svg" alt="Kiosk App Logo" width="150" />
          </Link>
        </div>
    </nav>
  );
}

export default ProductMenu;