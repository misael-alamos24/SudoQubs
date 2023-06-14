const express = require('express');
const { generate } = require('../utils/generate');
const router = express.Router();


router.get('/', async(req,res)=>{ // la ruta más inservible de todos los tiempos

    let {vertex} = req.query

    if(!vertex) return res.status(202).json({
        message: 'Put the size of sudoku next to vertex query. It can be any non-prime number (4, 6, 8, 9, etc.).',
        vertex4x4: '/sudoku?vertex=4',
        vertex6x6: '/sudoku?vertex=6',
        vertex8x8: '/sudoku?vertex=8',
        back: '/',
    })

    let sudoku = generate(vertex)

    if(sudoku) return res.status(201).json(sudoku);

    return res.status(200).json('something was wrong')

});

module.exports= router;