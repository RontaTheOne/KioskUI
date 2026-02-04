function StartScreen() {
  return (
    <div className="start-screen align-items-center justify-content-center d-flex flex-column">
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
  );
}

export default StartScreen;
