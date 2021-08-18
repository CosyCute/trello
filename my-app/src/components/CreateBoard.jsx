import React, {useState} from 'react';
const CreateBoard = (props) => {
    const [inputValue, setInputValue] = useState('')
    return (
        <div className="CreateBoard board-title border">
            <div className="create-board-head">
                <h3>Creating a board</h3>
                <img onClick={() => props.setMenuCondition('start-board')} src={props.exit_png} alt="exit"/>
            </div>
            <div className="create-board-main">
                <h4>What shall we call the board?</h4>
                <input onChange={(e)=> setInputValue(e.target.value)} type="text"/>
            </div>
            <div className="create-board-foot">
                <button onClick={() => props.setMenuCondition('start-board')}>CANCEL</button>
                <button onClick={() => props.createBoard(inputValue)}>CREATE</button>
            </div>
        </div>
    );
};

export default CreateBoard;