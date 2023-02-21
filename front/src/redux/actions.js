import axios from "axios";
import { API_URL } from "../config/environment";

export const GET_SUDOKU = "GET_SUDOKU";
export const SET_SETTINGS ="SET_SETTINGS";

export const getSudoku = (vertex) => {
    return async function (dispatch) {
        axios.get(`${API_URL}/sudoku?vertex=${vertex}`)
        .then(r => dispatch({
            type: GET_SUDOKU,
            payload: r.data,
        })).catch(e=> console.log('this is an error in getSudoku: ', e))
    }
};

export const setSettings = (object) => {
    return {
        type: SET_SETTINGS,
        payload: object,
    }
}