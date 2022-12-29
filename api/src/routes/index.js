const { Router } = require('express');
// Importar todos los routers;

const sudokuRoutes = require ("./sudoku.js");

const router = Router();

router.use("/sudoku", sudokuRoutes);

module.exports = router;
// Configurar los routers



