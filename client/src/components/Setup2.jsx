import React from "react";
import '../styles/setup2.css';

export default function Setup2(){
    return (
        <div className="setup2">
            Soy Setup2
            <div className="table">
                <div className="left">
                    <div className="size">
                        <div className="text">
                            Tamaño
                        </div>
                        <div className="select">
                            <select>
                                <option></option>
                            </select>
                        </div>
                        <div className="apply">
                            <button className="buttonapply">
                                Aplicar
                            </button>
                        </div>
                        <div className="prod">
                            
                        </div>
                    </div>
                    <div className="diff">
                        <div className="text">
                            Dificultad
                        </div>
                        <div className="select">
                            <select>
                                <option></option>
                            </select>
                        </div>
                        <div className="apply">
                            <button className="buttonapply">
                                Aplicar
                            </button>
                        </div>
                        <div className="prod">
                            
                        </div>
                    </div>
                </div>
                <div className="right">
                    <div className="legend">
                        Se creará un sudoku de 
                    </div>
                    <button className="ok">
                        Ok
                    </button>
                </div>
            </div>
        </div>
    )
}