import './App.css';
import {useState} from 'react';
import {Square} from "./components/Square";
import {Patterns} from "./components/patterns";

function App() {
  const [bord, setBoard] = useState (["","","","","","","","",""]);
  const [player,setPlayer] = useState ("X")

  function refreshPage() {
    window.location.reload(false);
  }

  const chooseSquare = (square) => {
    setBoard(
      bord.map((value, index) => {
      if (index === square && value ===""){
        return player;
       } 
        return value;
      })
    );

    if (player === "X"){
      setPlayer("O")
    } else {
      setPlayer("X")
    }
  };

const checkWin = () =>{
  Patterns.forEach((currPattern) => {
  })
}

  return (
    <div className="App">
      <div className="board">
        <div className="row">
          <Square value={bord[0]} chooseSquare={()=> {chooseSquare(0)}}/>
          <Square value={bord[1]} chooseSquare={()=> {chooseSquare(1)}}/>
          <Square value={bord[2]} chooseSquare={()=> {chooseSquare(2)}}/>       
          </div> 
        <div className="row">
          <Square value={bord[3]} chooseSquare={()=> {chooseSquare(3)}}/>
          <Square value={bord[4]} chooseSquare={()=> {chooseSquare(4)}}/> 
          <Square value={bord[5]} chooseSquare={()=> {chooseSquare(5)}}/>        
          </div> 
        <div className="row">
          <Square value={bord[6]} chooseSquare={()=> {chooseSquare(6)}}/>
          <Square value={bord[7]} chooseSquare={()=> {chooseSquare(7)}}/>
          <Square value={bord[8]} chooseSquare={()=> {chooseSquare(8)}}/>
          </div> 

          <div>
            <button className="btn" type="reset" onClick={refreshPage}>Start playing</button>  
          </div>
      </div>
    </div>
  );
}
export default App;
