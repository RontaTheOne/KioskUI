import express from "express";

const app = express();

app.get("/", (req, res) => {
   res.send(`
    <h1>Servidor activo</h1>
    <p>KIOSKUI ejecutandose con exito 🚀</p>
  `);
})

export default app;
