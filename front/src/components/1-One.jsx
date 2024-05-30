// import Setup2 from "./Setup2";
import Sudoku from "./Sudoku";
import '../styles/one.css';
import Setup from "./Setup";

export default function One(){

    return (
        <div>
            {/* <div>
                The function generators of sudokus are stored in a backend which there is to visit for reactivate it.
                Visit this <a href="https://sudoqubs-backend.onrender.com/sudoku?vertex=4" target="_blank">link</a> only once to reactivate backend.
            </div> */}
            <div className="one">
                <div className="component" id="">
                    <Setup/>
                </div>
                <div className="component" id="sudoku">
                    <Sudoku/>
                </div>    
            </div>
        </div>
    )
}
