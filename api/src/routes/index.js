const { Router } = require('express');
// Importar todos los routers;

const sudokuRoutes = require ("./sudoku.js");

const router = Router();

router.use("/sudoku", sudokuRoutes);

module.exports = router;

router.get('/', (req, res)=>{
    res.status(200).json({
        message: 'Welcome to the sudoku API',
        sudoku: '/sudoku',
    })
})
// Configurar los routers



