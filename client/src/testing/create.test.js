const { restore } = require('../functions/2-Estructures.js');
const { create }= require('../functions/3-Creator.js');

console.log(create())

describe("create, a ver qué hace", ()=>{
    it("create()", ()=>{
        restore()
        expect(create()).toEqual("ok")
    })
});