import React, {useState} from 'react';
import './styles/style.css'
import MainMenu from './components/MainMenu';

function App() {
  const [boards, setBoards] = useState([
    {title: 'dddd', id: 1},
    {title: 'ffdss', id: 2},
  ]);
  const remove = (board) => {
    console.log(board)
  };
  return (
    <MainMenu remove={remove} boards={boards} setBoards={setBoards}/>
  );
}

export default App;
