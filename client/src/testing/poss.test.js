const {possBoxs, possCols, possRows} = require('../functions/2-Estructures.js');

describe('possBoxs, possCols, possRows', ()=>{
    it('Cuando se ejecutan la primera vez deben retornar lo mismo', function() {
        expect(possRows()).toEqual(possCols())
        expect(possBoxs()).toEqual(possCols())
        expect(possBoxs()).toEqual(possRows())
    })
})
