const express = require('express');
const { generate } = require('../utils/generate');
const router = express.Router();


router.get('/', async(req,res)=>{ // la ruta más inservible de todos los tiempos

    let {vertex} = req.query

    let sudoku = generate(vertex)

    if(sudoku) return res.status(201).json(sudoku);

    return res.status(200).json('something was wrong')

});

module.exports= router;