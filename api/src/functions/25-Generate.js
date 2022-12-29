const Vertex = require("./10-Estructures");
const updateEvery = require("./14-Global");
const updateQubsBy = require("./16-UpdateQubsBy");
const create3 = require("./17-Create");

function Generate(vertex){
    var s1= Vertex(vertex)
    var u1= updateEvery(vertex * vertex, s1.rows, s1.cols, s1.boxs, s1.qubs)
    var c1_s= create3(vertex, s1.rows,s1.cols,s1.boxs,s1.qubs)
    c1_s.qubs= updateQubsBy('rows',s1.rows)
    return c1_s
}

function RestoreEstructures(vertex){
    var s1= Vertex(vertex)
    var u1= updateEvery(vertex * vertex, s1.rows, s1.cols, s1.boxs, s1.qubs)
    return s1
}

function kill(removing, qubs){
    for(let b=0;b<qubs.length;b++){
        for(let c=0;c<removing.length;c++){
            if(b===removing[c]){
                qubs[b]=0
            }
        }
    }
}

module.exports = {
    Generate,
    RestoreEstructures,
    kill
}