const {solution} = require('../functions/0-Unrepeatable');
const {
  rows, cols, boxs, qubs,
  updateRow, updateCol, updateBox,
  update, resetSquare
} = require('../functions/2-Estructures');

let array2= [0,0,0,0,0,0,0,0,1] //any rep
let array3= [1,2,3,4,5,6,7,8,9] //any rep
let array4= [1,2,3,4,2,4,5,6,7] //must be shown [2,2]
let array5= [1,2,3,4,4,2,5,6,7] //must be shown [4,4]
let array6= new Array(81)
array6[9]=6
let array7= new Array(81)
array7[55]=5
array7[57]=5
let array8= new Array() //array creado con la clase
let array9= [] //array creado con la mano 


describe('solution(array)', () => {
  it('Debe devolver un -1 si no hay elementos repetidos que no sean 0', () => {
    expect(solution(array2)).toEqual(-1)
  })
  it('Debe devolver un -1 si no hay elementos repetidos', function(){
    expect(solution(array3)).toEqual(-1)
  })
  it('Debe mostrar un array con los elementos repetidos', function() {
    expect(solution(array4)).toEqual([2, 2])
  })
  it('Debe mostrar un array con los elementos repetidos', function() {
    expect(solution(array5)).toEqual([4,4])
  })
  it('A ver qué onda', function() {
    expect(solution(array6)).toEqual(-1)// quiere decir que el array vacío es recorrible
  })
  it('Espero que tire -1', function() {
    expect(solution(array6)).toEqual(-1)
  })
  it('Espero que entre tanto undefined encuentre dos 5', function() {
    expect(solution(array7)).toEqual([5,5])//
  })
  it('Test de array creado con la clase Array', function() {
    expect(solution(array8)).toEqual(-1)// Una forma de probar array vacio
  })
  it('Test de array creado manualmente []', function() {
    expect(solution(array9)).toEqual(-1)// Otra forma de probar array vacío
  })
  it('Test de rows, cols, boxs, qubs', () => {
    expect(solution(rows)).toEqual(-1)
    expect(solution(cols)).toEqual(-1)
    expect(solution(qubs)).toEqual(-1)
    expect((boxs)).toEqual([[],[],[],[],[],[],[],[],[]])
  })
  // it('Test de array creado manualmente []', function() {
  //   expect(solution(array9)).toEqual(-1)
  // })
  // it('Test de array creado manualmente []', function() {
  //   expect(solution(array9)).toEqual(-1)
  // })
})

describe('Probando updates', () => {
  it('Comprobar updates de cada estructura: Rows, Cols, Boxs', () => {
    qubs[19]= 7
    updateRow(19)
    updateCol(19)
    updateBox(19)
    expect(rows[2][1]).toEqual(7)
    expect(cols[1][2]).toEqual(7)
    expect(boxs[0][7]).toEqual(7)
  })
  it('Comprobar alcance del scope anterior a este', () => {
    expect(rows[2][1]).toEqual(7)
    expect(cols[1][2]).toEqual(7)
    expect(boxs[0][7]).toEqual(7)
  })
})

describe('Probando update(18)', () => {
  it('Comprobar que updatee', ()=>{
    qubs[18]= 6
    update(18)
    expect(rows[2][0]).toEqual(6)
    expect(cols[0][2]).toEqual(6)
    expect(boxs[0][6]).toEqual(6)
  })
})

describe('Probando alcance del update', () => {
  it('Comprobar alcance del updateo', () => {
    expect(rows[2][0]).toEqual(6)
    expect(cols[0][2]).toEqual(6)
    expect(boxs[0][6]).toEqual(6)
  })
})

describe('Probando reseteo de un square', () => {
  it('Comprobar resetSquare(19)', () => {
    resetSquare(19)
    resetSquare(18)
    expect(rows[2][1]).toEqual(0)
    expect(cols[1][2]).toEqual(0)
    expect(boxs[0][7]).toEqual(0)
  })
})

describe('Probando alcance del reseteo de un square', () => {
  it('Comprobar alcance resetSquare(18)', () => {
    expect(rows[2][0]).toEqual(0)
    expect(cols[0][2]).toEqual(0)
    expect(boxs[0][6]).toEqual(0)
  })
})