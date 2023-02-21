// import '../styles/form.css';
import '../styles/setup.css';

export default function Setup(){
    return (
        <div className="contenedor formulario">
            {/* <form action="GET" className="contenedor formulario"> */}
                <div className="fieldset">
                    <label className="label">Tamaño</label>
                    <select >
                        <option value="">Seleccione</option>
                    </select>
                    <button>Aplicar</button>
                    <div className='number' >
                        4*4
                    </div>
                </div>
                <div className="fieldset">
                    <label className="label">Dificultad</label>
                    <select>
                        <option>Seleccione</option>
                    </select>
                    <button>Aplicar</button>
                    <div className='number'>3</div>
                </div>

                <div className="alert">
                    <p>Se creará un sudoku de 4 x 4 y una dificultad de Nivel 3</p>
                </div>
                <div className="alert">
                    <p>Confirma su Elección?</p>    
                    <button className="btn-submit"> OK </button>
                </div>
            {/* </form> */}
        </div>
    )
}