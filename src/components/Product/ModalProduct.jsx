import Swal from 'sweetalert2'
export default function ModalProduct({ selectedProduct, modalRef }) {
     const showAlert = () => {
    Swal.fire({
      title: 'Producto agregado',
      text: 'El producto se añadió correctamente',
      icon: 'success',
      timer: 3000,
    })
  }
    return (
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
          <div className="modal-body d-flex flex-column align-items-center">
            {selectedProduct && (
              <div className="text-center mb-3">
                <img
                  src={selectedProduct.img}
                  className="img-fluid product-img mb-2"
                  alt={selectedProduct.name}
                  style={{ maxHeight: 150 }}
                />
                <p className="text-muted mb-1">{selectedProduct.description}</p>
                <p className="fw-bold mb-1">
                  $ {selectedProduct.price.toFixed(2)}
                </p>
              </div>
            )}
            <div className="text-center mb-3">
              <h6>Tamaño</h6>
              <div className="btn-group" role="group" aria-label="size">

                <input
                  type="radio"
                  className="btn-check"
                  name="size"
                  id="sizeMedium"
                  autoComplete="off"
                  defaultChecked
                />
                <label
                  className="btn btn-outline-danger"
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
                <label className="btn btn-outline-danger" htmlFor="sizeLarge">
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
          <div className="modal-footer text-center mt-4 d-flex gap-3 justify-content-center">
            <button type="button" className="btn btn-danger"  onClick={showAlert}>
              Agregar
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
