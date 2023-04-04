import Setup2 from "./Setup2";
import Sudoku from "./Sudoku";
import '../styles/one.css';
import Setup from "./Setup";

export default function One(){

    return (
        <div className="one">
            <div className="component" id="">
                <Setup/>
            </div>
            <div className="component" id="sudoku">
                <Sudoku/>
            </div>    
        </div>
    )
}