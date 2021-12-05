import './App.css';
import { useState, useEffect } from 'react';
import { Square } from "./components/Square";
import { Patterns } from "./components/patterns";

function App() {
  const [bord, setBoard] = useState(["", "", "", "", "", "", "", "", ""]);
  const [player, setPlayer] = useState("O");
  const [result, setResult] = useState({ winner: "none", state: "none" });


  useEffect(() => {
    checkWin();
    checkIfTil();
    if (player === "X") {
      setPlayer("O")
    } else {
      setPlayer("X")
    }
  }, [bord])//every time the board change check if some one wins


  useEffect(() => {
    if (result.state != "none") {
      alert(`Game Finished! Winning Player: ${result.winner} `)
    }
  }, [result])

  function refreshPage() {
    window.location.reload(false);
  }

  const chooseSquare = (square) => {
    setBoard(
      bord.map((value, index) => {
        if (index === square && value === "") { //only change when square is empty and it is equal to index (see below index)
          return player;
        }
        return value; // one by one select the square
      })
    );

  };

  const checkWin = () => {
    Patterns.forEach((currentPattern) => {
      const firstPlayer = bord[currentPattern[0]];
      if (firstPlayer === "") return;
      let foundWinningPattern = true;
      currentPattern.forEach((index) => {
        if (bord[index] != firstPlayer) {
          foundWinningPattern = false;
        }
      });
      if (foundWinningPattern) {
        setResult({ winner: player, state: "won" })
      }
    })
  }

  const checkIfTil = () =>{
    let filled = true;
    bord.forEach((square) =>{
      if (square===""){
        filled =false;
      }
    });
    if (filled){
      setResult ({winner: "No one", state: "Tile"});
    }
  }

  return (
    <div className="App">
      <div className="board">
        <div className="row">
          <Square value={bord[0]} chooseSquare={() => { chooseSquare(0) }} />
          <Square value={bord[1]} chooseSquare={() => { chooseSquare(1) }} />
          <Square value={bord[2]} chooseSquare={() => { chooseSquare(2) }} />
        </div>
        <div className="row">
          <Square value={bord[3]} chooseSquare={() => { chooseSquare(3) }} />
          <Square value={bord[4]} chooseSquare={() => { chooseSquare(4) }} />
          <Square value={bord[5]} chooseSquare={() => { chooseSquare(5) }} />
        </div>
        <div className="row">
          <Square value={bord[6]} chooseSquare={() => { chooseSquare(6) }} />
          <Square value={bord[7]} chooseSquare={() => { chooseSquare(7) }} />
          <Square value={bord[8]} chooseSquare={() => { chooseSquare(8) }} />
        </div>
        <div>
          <button className="btn" type="reset" onClick={refreshPage}>Start playing</button>
        </div>
      </div>
    </div>
  );
}
export default App;
