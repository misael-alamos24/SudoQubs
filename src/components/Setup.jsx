export default function Setup(){
    return (
        <div>
                        <form action="GET" className="contenedor formulario">
                <fieldset className="fieldset">
                    <label className="ml" 
                    // for="tamanio"
                    >Tamaño</label>
                    <select className="ml select" name="tamanio" id="tamanio">
                        <option value=""
                        // selected 
                        disabled>Seleccione</option>
                    </select>
                    <button type="button" className="ml btn btn-aplica">Aplicar</button>
                    <div id="tamanio-registro" className="inline ml border">
                        <p>4*4</p>
                    </div>
                </fieldset>
                <fieldset className="fieldset">
                    <label className="ml" 
                    // for="dificultad"
                    >Dificultad</label>
                    <select className="ml select" name="dificultad" id="dificultad">
                        <option value=""
                        // selected 
                        disabled>Seleccione</option>
                    </select>
                    <button type="button" className="ml btn btn-aplica">Aplicar</button>
                    <div id="dificultad-registro" className="inline ml border">
                        <p>3</p>
                    </div>
                </fieldset>

                <div className="alerta">
                    <p>Se creará un sudoku de 4 x 4 y una dificultad de Nivel 3</p>
                </div>
                <div className="alerta">
                    <p>Confirma su Elección?</p>    
                    <button className="btn btn-submit" type="Sumbit"> OK </button>
                </div>
            </form>
        </div>
    )
}