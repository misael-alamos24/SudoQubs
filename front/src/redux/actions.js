import axios from "axios";
import { API_URL } from "../config/environment";
import { Generate } from "../functions/25-Generate";

export const GET_SUDOKU = "GET_SUDOKU";
export const SET_SETTINGS = "SET_SETTINGS";
export const CLEAN = "CLEAN";

export const getSudoku = (vertex) => { //console.log({vertex})
    return {
        type: GET_SUDOKU,
        payload: Generate(String(vertex))
    }
    // // return 
    // return async function (dispatch) {
    //     axios.get(`${API_URL}/sudoku?vertex=${vertex}`)
    //     .then(r => {
    //         dispatch({
    //             type: GET_SUDOKU,
    //             payload: r.data,
    //         })
    //         return r
    //     }).then(r=> console.log(r.data?.sudoku)
    //     ).catch(e=> console.log('this is an error in getSudoku: ', e))
    // }
};

export const setSettings = (object) => {
    return {
        type: SET_SETTINGS,
        payload: object,
    }
}

export const cleanSudoku = () => {
    return {
        type: CLEAN,
        payload: {}
    }
}