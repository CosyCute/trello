import React, {useState} from 'react';
import './styles/style.css'
import MainMenu from './components/MainMenu';
import BoardMenu from './components/BoardMenu';
function App() {

  const [boards, setBoards] = useState([
    {title: 'dddd', id: 1},
    {title: 'ffdss', id: 2},
  ]);

  const remove = (board) => {
    let newArr = [...boards];
    setBoards(newArr.filter((a) => a.id !== board.id))
  };

  const [menuCondition, setMenuCondition] = useState(true);

  const [boardName, setBoardName] = useState();

  const change = (board) => {
    setMenuCondition(!menuCondition);
    setBoardName(board.title)
  };
  return (
    <div>
      {menuCondition
      ? <MainMenu change={change} remove={remove} boards={boards} setBoards={setBoards} setMenuCondition={setMenuCondition}/>
      : <BoardMenu boardName={boardName} setMenuCondition={setMenuCondition}/>
      }
    </div>
  );
}

export default App;
