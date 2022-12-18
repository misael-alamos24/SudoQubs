export default function Setup(){
    return (
        <div>
                        <form action="GET" class="contenedor formulario">
                <fieldset class="fieldset">
                    <label class="ml" for="tamanio">Tamaño</label>
                    <select class="ml select" name="tamanio" id="tamanio">
                        <option value=""selected disabled>Seleccione</option>
                    </select>
                    <button type="button" class="ml btn btn-aplica">Aplicar</button>
                    <div id="tamanio-registro" class="inline ml border">
                        <p>4*4</p>
                    </div>
                </fieldset>
                <fieldset class="fieldset">
                    <label class="ml" for="dificultad">Dificultad</label>
                    <select class="ml select" name="dificultad" id="dificultad">
                        <option value=""selected disabled>Seleccione</option>
                    </select>
                    <button type="button" class="ml btn btn-aplica">Aplicar</button>
                    <div id="dificultad-registro" class="inline ml border">
                        <p>3</p>
                    </div>
                </fieldset>

                <div class="alerta">
                    <p>Se creará un sudoku de 4 x 4 y una dificultad de Nivel 3</p>
                </div>
                <div class="alerta">
                    <p>Confirma su Elección?</p>    
                    <button class="btn btn-submit" type="Sumbit"> OK </button>
                </div>
            </form>
        </div>
    )
}