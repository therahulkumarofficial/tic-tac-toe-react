import { useState } from "react";
import Card from '../Card/Card';
import './Grid.css';
import '../../helpers/checkWinner';
import isWinner from "../../helpers/checkWinner";
function Grid( { numberOfCards } ){
    const [board, SetBoard] = useState(Array(numberOfCards).fill(""));
    const [turn, SetTurn] = useState(true);
    const [winner, SetWinner] = useState(null);
    function play(index){
        if (board[index] || winner) return;
        if(turn == true){
            board[index] = "O";
        } else {
            board[index] = "X";
        }
        const win = isWinner(board, turn ? "O" : "X");
        if(win) {
            SetWinner(win);
        }
        SetBoard([...board]);
        SetTurn(!turn);
    }
    const resetGame = () => {
        SetBoard(Array(numberOfCards).fill(""));
        SetTurn(true);
        SetWinner(null);
    };
    return (
        <div className="grid-wrapper">
            {
                winner && (
                    <>
                    <h1 className="turn-highlight">{winner === "Draw" ? "It's a Draw!" : `Winner is ${winner}`}</h1>
                    <button className="reset" onClick={resetGame}>Reset Game</button>
                    </>
                )
            }
            <h1 className="turn-highlight">Current Turn: {(turn) ? 'O' : 'X'}</h1>
            <div className="grid">
                {board.map((el, idx) => <Card key={idx} onPlay={play} player={el} index={idx} />)}
            </div>
            <div className="space-below"></div>
            <footer className="footer">
            <span>© 2024 Tic Tac Toe • Designed by <a href="https://github.com/therahulkumar9" target="_blank" rel="noopener noreferrer">Rahul Kumar</a></span>
            <a href="https://github.com/therahulkumar9" target="_blank" title="GitHub">
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 20 20" fill="none" stroke="currentcolor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-github">
            <path d="M10 0C4.48 0 0 4.48 0 10c0 4.42 2.87 8.17 6.84 9.49.5.09.68-.22.68-.49 0-.24-.01-.89-.01-1.75-2.79.61-3.39-1.35-3.39-1.35-.46-1.16-1.12-1.47-1.12-1.47-.91-.62.07-.61.07-.61 1 .07 1.53 1.04 1.53 1.04.89 1.52 2.34 1.08 2.91.83.09-.65.35-1.08.64-1.33-2.22-.25-4.56-1.11-4.56-4.93 0-1.09.39-1.98 1.03-2.68-.1-.25-.44-1.27.1-2.65 0 0 .84-.27 2.75 1.02A9.547 9.547 0 0110 3.4c.85.004 1.7.115 2.5.33 1.9-1.29 2.73-1.02 2.73-1.02.54 1.38.2 2.4.1 2.65.64.7 1.03 1.59 1.03 2.68 0 3.83-2.35 4.68-4.58 4.93.36.31.68.92.68 1.85 0 1.34-.01 2.42-.01 2.75 0 .27.18.59.68.49C17.13 18.17 20 14.42 20 10c0-5.52-4.48-10-10-10z"></path>
        </svg>
    </a>
</footer>


        </div>
    );
}

export default Grid;