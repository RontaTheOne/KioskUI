import { Link } from "react-router-dom";
import { useState, useRef } from "react";
import bootstrap from 'bootstrap/dist/js/bootstrap.bundle.min.js';
import CartOffcanvas from "../components/Cart/CartOffcanvas";
import CartSummaryBar from "../components/Cart/CartSummaryBar";
import ModalProduct from "../components/Product/ModalProduct";
import ProductMenu from "../components/Menu/ProductMenu";
import Nav from "../components/Menu/Nav";

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
      <Nav />
      
      <div className="container py-4">
        <ProductMenu />
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
              description: "Deliciosa hamburguesa con doble carne, queso, lechuga y salsa especial.",
              price: 4.1,
              img:
                "https://s7d1.scene7.com/is/image/mcdonalds/DC_202201_0007-005_QuarterPounderwithCheese_1564x1564-1:nutrition-calculator-tile",
            },
            {
              name: "Whopper",
              description: "Clásica hamburguesa con carne a la parrilla, tomate, lechuga, mayonesa y ketchup.",
              price: 4.19,
              img:
                "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT4YDCJqgMFtsD9dBn2uch0RTrROXHmvr1vnw&s",
            },
            {
              name: "Rodeo Whopper",
              description: "Hamburguesa con carne a la parrilla, aros de cebolla crujientes, salsa barbacoa, lechuga y mayonesa.",
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

      <CartSummaryBar />

      {/*Modal Mi Orden*/}
      <ModalProduct selectedProduct={selectedProduct} modalRef={modalRef} />
      <CartOffcanvas total="33.02">
      </CartOffcanvas>

    </div>
  );
}

export default Menu;
