function StartScreen() {
  return (
    <div className="start-screen">
      <div className="align-items-center justify-content-center d-flex flex-column">
        <div className="logo mb-4">
          <img src="/kiosk-logo.svg" alt="Kiosk App Logo" width="150" />
        </div>
        <h1>Bienvenido a Kiosk App</h1>
        <p className="lead mb-4">
          Haz tu pedido en segundos. Elige tú comida, personaliza y paga.
        </p>
        <button type="button" className="btn btn-outline-primary">
          Empezar
        </button>

        <small className="d-block mt-4 text-secondary">
          <i class="bi bi-hand-index-thumb-fill"></i> Presiona “Empezar” para
          continuar
        </small>
      </div>

      <div className="fab-container">
        {/* Botones secundarios */}
        <div className="fab-options">
          <button className="btn btn-success rounded-circle fab-btn">EN</button>
          <button className="btn btn-warning rounded-circle fab-btn">FR</button>
          <button className="btn btn-danger rounded-circle fab-btn">PT</button>
        </div>

        {/* Botón principal */}
        <button className="btn btn-primary rounded-circle fab-main">ES</button>
      </div>
    </div>
  );
}

export default StartScreen;
