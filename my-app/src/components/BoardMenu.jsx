import React, {useState} from 'react';
import BoardList from './BoardList';
import red_exit_png from '../assets/png/red-x.png'
const BoardMenu = (props) => {

    const [listForm, setListFrom] = useState(true);

    const [listArray, setListArray] = useState([]);

    const addElementToList = (e) =>{
        setListArray([...listArray, e])
        setListFrom(!listForm);
    }
    return (
        <div className="board">
            <div className="boardName board-size border">
                <h3>{props.boardName}</h3>
            </div>
            <div className="lists">
                {listArray.map((e) => <BoardList list={e} key={e.index}/>)}
                {listForm
                ?<div onClick={() => setListFrom(!listForm)} className="addList"><h3>Add a list...</h3></div>
                :<div className="formList board-title board-size border">
                    <input onKeyDown={(e) => {if (e.key === "Enter") addElementToList(e.target.value)}} placeholder="add a list"/>
                    <img onClick={() => setListFrom(!listForm)} src={red_exit_png}/>
                </div>
                }   
            </div>
        </div>
    );
};

export default BoardMenu;